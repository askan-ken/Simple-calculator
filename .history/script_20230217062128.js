const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const display = document.getElementById('display');
const equals = document.getElementById('equals');

let currentOperator = null;
let leftOperand = '';
let rightOperand = '';

numbers.forEach(number => {
  number.addEventListener('click', () => {
    if (currentOperator) {
      rightOperand += number.innerText;
      display.innerText = rightOperand;
    } else {
      leftOperand += number.innerText;
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
          result = parseInt(leftOperand) + parseInt(rightOperand);
          break;
        case '-':
          result = parseInt(leftOperand) - parseInt(rightOperand);
          break;
        case '*':
          result = parseInt(leftOperand) * parseInt(rightOperand);
          break;
        case '/':
          result = parseInt(leftOperand) / parseInt(rightOperand);
          break;
      }
      leftOperand = result.toString();
      rightOperand = '';
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
        result = parseInt(leftOperand) + parseInt(rightOperand);
        break;
      case '-':
        result = parseInt(leftOperand) - parseInt(rightOperand);
        break;
      case '*':
        result = parseInt(leftOperand) * parseInt(rightOperand);
        break;
      case '/':
        result = parseInt(leftOperand) / parseInt(rightOperand);
        break;
    }
    display.innerText = result;
    leftOperand = result.toString();
    rightOperand = '';
    currentOperator = null;
  }
});
