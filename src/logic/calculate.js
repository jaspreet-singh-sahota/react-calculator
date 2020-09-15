import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  const operators = ['+', '-', '÷', 'X', '%', '+/-'];

  if (!total) {
    total = '0'
  }

  if (!operators.includes(buttonName) && buttonName !== '=') {
    if (!next) {
      next = buttonName
    } else {
      next += buttonName
    }
  }

  if (buttonName === 'AC') {
    total = 0;
    next = null;
    operation = null;
  } 
  if (buttonName === '+/-') {
    next = (next * -1).toString()
  } else if (operators.includes(buttonName) && next) {
    if (buttonName === '÷') {
      total = next;
      operation = buttonName;
      next = null;
    } else {
      operation = buttonName
      total = operate(total, next, operation).toString()
      next = null
    }
  } else if (operators.includes(buttonName) && next && !total) {
      
  } else if (buttonName === '=') {
    if (total && next) {
      total = operate(total = next, next, operation).toString()
      next = null;
      operation = null;
    }
  }
console.log(total, next)
  return { total, next, operation };
};

export default calculate;
