import operate from './operate';

const calculate = (data, buttonName) => {
  let {
    total, next, operation, previousOperation,
  } = data;
  const operators = ['+', '-', '÷', 'X', '%', '+/-'];

  if (!total) {
    total = '0';
  }

  if (buttonName === 'AC') {
    return { total: 0, next: null, operation: null };
  }

  if (total === 'NaN') {
    return {
      total, next, operation: null, previousOperation: null,
    };
  }

  if (buttonName === 'X' && !next && !operation && !previousOperation) {
    return {
      total, next, operation, previousOperation,
    };
  }

  if (buttonName === '-' && total && next && !operation && !previousOperation) {
    return {
      total: next, next: null, operation: buttonName, previousOperation: buttonName,
    };
  }

  if (!operators.includes(buttonName) && buttonName !== '=' && buttonName !== '.') {
    // eslint-disable-next-line
    !next ? next = buttonName : next += buttonName;
  }

  if (buttonName === '+/-') {
    if (total !== '0') {
      total = (total * -1).toString();
    } else {
      total = (next * -1).toString();
      next = null;
    }
  } else if (operators.includes(buttonName) && next && buttonName !== 'X') {
    if (buttonName === '÷') {
      if (!total || total === '0') {
        total = next;
        operation = buttonName;
        next = null;
        previousOperation = buttonName;
      } else {
        total = operate(total, next, previousOperation).toString();
        next = null;
        previousOperation = buttonName;
      }
    } else {
      if (!previousOperation) {
        previousOperation = buttonName;
      }
      operation = buttonName;

      if (next && total && operation === previousOperation) {
        total = operate(total, next, operation).toString();
        next = null;
      } else if (next && total && operation !== previousOperation) {
        total = operate(total, next, previousOperation).toString();
        next = null;
        previousOperation = buttonName;
      }
    }
  } else if (buttonName === 'X' && buttonName !== '=') {
    if (!previousOperation) {
      previousOperation = buttonName;
    }
    operation = buttonName;

    if ((total === '0' && !previousOperation) || (!total && !previousOperation)) {
      total = '0';
    } else if (total === '0' || !total) {
      total = '1';
    }

    if (next && total && operation === previousOperation) {
      total = operate(total, next, operation).toString();
      next = null;
      previousOperation = buttonName;
    } else if (next && total && operation !== previousOperation) {
      total = operate(total, next, previousOperation).toString();
      next = null;
      previousOperation = buttonName;
    }
  } else if (buttonName === '=') {
    if (total && next) {
      total = operate(total, next, operation).toString();
      next = null;
      operation = null;
    }
  } else if (buttonName === '.') {
    if (next) {
      if (!next.includes(buttonName)) {
        next += buttonName;
      }
    } else if (total !== '0') {
      if (!total.includes(buttonName)) {
        total += buttonName;
        next = total
        total = '0'
      }
    } else {
      next = '0.';
    }
  }

  return {
    total, next, operation, previousOperation,
  };
};

export default calculate;
