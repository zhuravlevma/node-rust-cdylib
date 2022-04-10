const {fibonacci_rs, matrix_rs} = require('../index.node');
const {fibonacciJS} = require('./fibonacci');
const {matrixJs} = require('./matrix');
const {run} = require('./banchmark');

const [avgFibonacciRs, avgFibonacciJS] = run(fibonacci_rs, fibonacciJS, 42);
console.log('Average time of calculations for Matrix: ');
console.log('Rust cdylib: ', avgFibonacciRs, 'ms');
console.log('JS vanilla: ', avgFibonacciJS, 'ms');

const [avgMatrixRs, avgMatrixJS] = run(matrix_rs, matrixJs, 50);
console.log('Average time of calculations for Matrix: ');
console.log('Rust cdylib: ', avgMatrixRs, 'ms');
console.log('JS vanilla: ', avgMatrixJS, 'ms');