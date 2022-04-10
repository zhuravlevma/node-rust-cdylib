const {fibonacci} = require('../index.node');
const {fibonacciJS} = require('./fibonacci');
const {matrixJs} = require('./matrix');
const {matrix} = require('../index.node');


let sumRustDuration = 0;
let sumJsDuration = 0;

for (let i = 0; i < 42; i++) {
    const rustStart = Date.now()
    fibonacci(i)
    const rustDuration = Date.now() - rustStart

    const jsStart = Date.now()
    fibonacciJS(i)
    const jsDuration = Date.now() - jsStart

    sumRustDuration += rustDuration;
    sumJsDuration += jsDuration;
}

console.log('Average time of calculations for fibonacci: ');
console.log('Rust cdylib: ', Math.floor(sumRustDuration / 50));
console.log('JS vanilla: ', Math.floor(sumJsDuration) / 50);

sumRustDuration = 0;
sumJsDuration = 0;

for (let i = 0; i < 50; i++) {
    const rustStart = Date.now()
    matrix()
    const rustDuration = Date.now() - rustStart

    const jsStart = Date.now()
    matrixJs()
    const jsDuration = Date.now() - jsStart

    sumRustDuration += rustDuration;
    sumJsDuration += jsDuration;
}

console.log('Average time of calculations for matrix: ');
console.log('Rust cdylib: ', Math.floor(sumRustDuration / 50));
console.log('JS vanilla: ', Math.floor(sumJsDuration) / 50);