import closure from "google-closure-compiler";

const flags = [
    "--compilation_level", "ADVANCED_OPTIMIZATIONS",
    "--language_in", "ECMASCRIPT_2021",
    "--language_out", "ECMASCRIPT_2021",
    "--rewrite_polyfills", "false",
    "--rename_prefix_namespace", "TEST_NAMESPACE",
    "--assume_function_wrapper", "--source_map_include_content",
    "--externs", "externs.js",
    "--chunk_output_path_prefix", "./dist/",
    "--chunk", "module-a:2",
    "--chunk_wrapper", "module-a:(function(){%output%})();",
    "--js", "./source/lib.js",
    "--js", "./source/module-a.js",
    "--chunk", "module-b:1:module-a",
    "--chunk_wrapper", "module-b:(function(){%output%})();",
    "--js", "./source/module-b.js"];

const compilerInstance = new closure.compiler(flags);

compilerInstance.run(function closureCompilerRun(code, out, err) {
    if (code) {
        throw new Error(`Closure exit code ${code}!`, { cause: err });
    } else {
        console.log("Output:\n", out, "\nErrors:\n", err, "\nClosure run complete!");
    }
});
