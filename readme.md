# Reproducer

Closure compiler incorrectly obfuscates properties on the prefix namespace, even though they are defined in externs.js.

To reproduce, run
```
npm install && npm start
```

It will log an output like this:
```
Importing module a
module-a53.64759549392874_lib
Module a imported successfully
Importing module b
module-b34.722856162940175_lib
Module b imported successfully
> Error executing libFn. THIS SHOULD NOT HAPPEN! It means 'libFn' was obfuscated even if declared as extern!
> globalThis.TEST_NAMESPACE.libFn is not a function
Non-obfuscated fn executed successfully
```

If you take a look at [./externs.js](./externs.js), you can see that `libFn`, as well as `notObfuscated` are part of the externs
and are properly configured, so closure shouldn't obfuscate them. The difference is how they are assigned. `libFn` is assigned
to the prefix namespace by closure during compilation, while `notObfuscated` is assigned by the source code itself.

Required compiler flags (see [./index.mjs](./index.mjs)):
```
--compilation_level ADVANCED_OPTIMIZATIONS
--rename_prefix_namespace TEST_NAMESPACE
--assume_function_wrapper
--externs externs.js
--chunk_output_path_prefix ./dist/