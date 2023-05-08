import { sum, sub, mul, div } from './lib/lib-calculator/lib/index.js'

console.log('Welcome so simple calculator');

console.log(`2 + 2 = ${ sum(2, 2)}`);
console.log(`2 - 2 = ${ sub(2, 2)}`);
console.log(`2 * 2 = ${ mul(2, 2)}`);
console.log(`2 / 2 = ${ div(2, 2)}`);


try {
    console.log(`2 / 0 =`);
    div(2, 0);
} catch (e) {
    console.log(`Caught error ${e.message}`);
}
