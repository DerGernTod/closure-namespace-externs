import { libFn } from "./lib.js"

console.log(libFn("module-a"));

globalThis.TEST_NAMESPACE.notObfuscated = () => console.log("Non-obfuscated fn executed successfully");