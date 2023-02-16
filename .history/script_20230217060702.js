const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const display = document.getElementById('display');
const equals = document.getElementById('equals');

let currentOperator = null;
let leftOperand = null;
let rightOperand = null;

numbers.forEach(number => {
  number.addEventListener('click', () => {
    if (currentOperator) {
      if (rightOperand === null) {
        rightOperand = parseInt(number.innerText);
      } else {
        rightOperand = parseInt(`${rightOperand}${number.innerText}`);
      }
      display.innerText = rightOperand;
    } else {
      if (leftOperand === null) {
        leftOperand = parseInt(number.innerText);
      } else {
        leftOperand = parseInt(`${leftOperand}${number.innerText}`);
      }
      display.innerText = leftOperand;
    }
  });
});

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    if (leftOperand && rightOperand && currentOperator) {
      let result;
      switch (currentOperator) {
        case '+':
          result = leftOperand + rightOperand;
          break;
        case '-':
          result = leftOperand - rightOperand;
          break;
        case '*':
          result = leftOperand * rightOperand;
          break;
        case '/':
          result = leftOperand / rightOperand;
          break;
      }
      leftOperand = result;
      rightOperand = null;
      currentOperator = operator.innerText;
      display.innerText = result;
    } else {
      currentOperator = operator.innerText;
    }
  });
});

equals.addEventListener('click', () => {
  if (leftOperand && rightOperand && currentOperator) {
    let result;
    switch (currentOperator) {
      case '+':
        result = leftOperand + rightOperand;
        break;
      case '-':
        result = leftOperand - rightOperand;
        break;
      case '*':
        result = leftOperand * rightOperand;
        break;
      case '/':
        result = leftOperand / rightOperand;
        break;
    }
    display.innerText = result;
    leftOperand = result;
    rightOperand = null;
    currentOperator = null;
  }
});
