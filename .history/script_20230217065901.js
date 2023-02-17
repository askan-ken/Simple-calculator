const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const display = document.getElementById("display");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
log

let currentOperator = null;
let leftOperand = "";
let rightOperand = "";

numbers.forEach(number => {
    number.addEventListener('click', () => {
      if (currentOperator) {
        rightOperand = rightOperand ? parseFloat(`${rightOperand}${number.innerText}`) : parseFloat(number.innerText);
        console.log(`Right operand: ${rightOperand}`);
        display.innerText = rightOperand;
      } else {
        leftOperand = leftOperand ? parseFloat(`${leftOperand}${number.innerText}`) : parseFloat(number.innerText);
        console.log(`Left operand: ${leftOperand}`);
        display.innerText = leftOperand;
      }
    });
  });
  
  
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (leftOperand && rightOperand && currentOperator) {
      let result;
      switch (currentOperator) {
        case "+":
          result = leftOperand + rightOperand;
          break;
        case "-":
          result = leftOperand - rightOperand;
          break;
        case "*":
          result = leftOperand * rightOperand;
          break;
        case "/":
          result = leftOperand / rightOperand;
          break;
      }
      leftOperand = parseFloat(display.innerText);
      rightOperand = null;
      currentOperator = operator.innerText;
      console.log(`Current operator: ${currentOperator}`);
      console.log(`Result: ${result}`);
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
          result = parseFloat(leftOperand) + parseFloat(rightOperand);
          break;
        case '-':
          result = parseFloat(leftOperand) - parseFloat(rightOperand);
          break;
        case '*':
          result = parseFloat(leftOperand) * parseFloat(rightOperand);
          break;
        case '/':
          result = parseFloat(leftOperand) / parseFloat(rightOperand);
          break;
      }
      display.innerText = result;
      leftOperand = result.toString();
      rightOperand = '';
      currentOperator = null;
    }
  });
  
