import { libFn } from "./lib.js"

globalThis.TEST_NAMESPACE ??= {};
console.log(libFn("module-a"));

globalThis.TEST_NAMESPACE.notObfuscated = () => console.log("not obfuscated fn executed successfully");