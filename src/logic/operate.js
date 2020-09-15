import Big from 'big.js';

const operate = (number1, number2, operation) => {
  const num1 = Big(number1);
  const num2 = Big(number2);
  let total = 0;

  const divide = () => {
    return num2 == 0 ? 'NaN' : num1.div(num2)
  }

  const operations = {
    '+': () => num1.plus(num2),
    '-': () => num1.minus(num2),
    'X': () => num1.times(num2),
    // eslint-disable-next-line
    '÷': () => divide(num1 , num2),
    '%': () => (!num2 ? num1.times(0.01) : num1.times(num2).times(0.01)),
  };

  total = operations[operation]();

  return total.toString();
};

export default operate;