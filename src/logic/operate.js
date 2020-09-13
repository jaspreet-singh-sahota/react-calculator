import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  let result = 0;

  const operations = {
    '+': () => num1.plus(num2),
    '-': () => num1.minus(num2),
    x: () => num1.times(num2),
    '÷': () => num1.div(num2),
    '%': () => num1.mod(num2),
  };

  result = operations[operation]();

  return result;
};

export default operate;
