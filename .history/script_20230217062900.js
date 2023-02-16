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
        rightOperand = rightOperand ? parseInt(`${rightOperand}${number.innerText}`) : parseInt(number.innerText);
        console.log(`Right operand: ${rightOperand}`);
        display.innerText = rightOperand;
      } else {
        leftOperand = leftOperand ? parseInt(`${leftOperand}${number.innerText}`) : parseInt(number.innerText);
        console.log(`Left operand: ${leftOperand}`);
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
        console.log(`Current operator: ${currentOperator}`);
        display.innerText = result;
      } else {
        currentOperator = operator.innerText;
        console.log(`Current operator: ${currentOperator}`);
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
