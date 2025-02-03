globalThis.TEST_NAMESPACE = {};

await importModule("a");
await importModule("b");

try {
    globalThis.TEST_NAMESPACE.libFn("test");
} catch (e) {
    console.log("> Error executing libFn. THIS SHOULD NOT HAPPEN! It means 'libFn' was obfuscated even if declared as extern!\n>", e.message);
}

try {
    globalThis.TEST_NAMESPACE.notObfuscated();
} catch (e) {
    console.log("> Error executing non-obfuscated function. THIS SHOULD NOT HAPPEN! It means 'nonObfuscated' was obfuscated even if declared as extern!\n>", e.message);
}

async function importModule(mod) {
    console.log(`Importing module ${mod}`)
    try {
        await import(`./dist/module-${mod}.js`);
        console.log(`Module ${mod} imported successfully`);
    } catch (e) {
        console.log(`> Error while importing module-${mod}. THIS SHOULD NOT HAPPEN!\n>`, e.message);
    }
}