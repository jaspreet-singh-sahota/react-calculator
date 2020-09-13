import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  const operators = ['+', '-', '/', '*', '%'];

  if (buttonName === 'AC') {
    total = 0;
    next = null;
    operation = null;
  } else if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (operators.includes(buttonName)) {
    total = operate(total, next, operation);
  } else if (buttonName === '=') {
    if (total && next) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }
console.log(total, next)
  return { total, next, operation };
};

export default calculate;
