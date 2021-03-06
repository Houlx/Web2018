import Big from 'big.js';

export default (numberOne, numberTwo, operation) => {
    const one = Big(numberOne);
    const two = Big(numberTwo);
    if (operation === '+') {
        return one.plus(two).toString();
    }
    if (operation === '-') {
        return one.minus(two).toString();
    }
    if (operation === '*') {
        return one.times(two).toString();
    }
    if (operation === '/') {
        return one.div(two).toString();
    }
    throw Error('unknown operation');
}