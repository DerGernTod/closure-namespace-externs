export function libFn(foo) {
    let res = foo;
    // do a bit more so closure doesn't inline this content
    const rnd = Math.random() * 100;
    for (let i = 0; i < rnd; i++) {
        res = foo + i * Math.random();
    }
    return res + "_lib";
}

