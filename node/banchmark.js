function run(func1, func2, count) {
    if (!count || !func1 || !func1) {
        throw new Error("arguments invalid");
    }
    let sumFirstDuration = 0;
    let sumSecondDuration = 0;

    for (let i = 0; i < count; i++) {
        const firstStart = Date.now();
        func1(i);
        const firstDuration = Date.now() - firstStart;

        const secondStart = Date.now();
        func2(i);
        const secondDuration = Date.now() - secondStart;

        sumFirstDuration += firstDuration;
        sumSecondDuration += secondDuration;
    }
    return [Math.floor(sumFirstDuration / count), Math.floor(sumSecondDuration / count)]
}

module.exports = {
    run,
}