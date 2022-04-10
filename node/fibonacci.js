function fibonacciJS(x) {
    if (x === 0) {
        return 0
    }

    if (x === 1) {
        return 1
    }

    return fibonacciJS(x - 1) + fibonacciJS(x - 2)
}

module.exports = {
    fibonacciJS
}