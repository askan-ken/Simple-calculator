const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const display = document.getElementById('display');
const equals = document.getElementById('equals');

let currentValue = 0;
let previousValue = 0;
let currentOperator = null;

numbers.forEach(number => {
  number.addEventListener('click', () => {
    currentValue = (currentValue * 10) + parseInt(number.innerText);
    display.innerText = currentValue;
  });
});

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    if (currentOperator) {
      switch (currentOperator) {
        case '+':
          previousValue += currentValue;
          break;
        case '-':
          previousValue -= currentValue;
          break;
        case '*':
          previousValue *= currentValue;
          break;
        case '/':
          previousValue /= currentValue;
          break;
      }
      currentValue = 0;
      display.innerText = previousValue;
    } else {
      previousValue = currentValue;
      currentValue = 0;
      display.innerText = previousValue;
    }
    currentOperator = operator.innerText;
  });
});

equals.addEventListener('click', () => {
  if (currentOperator) {
    switch (currentOperator) {
      case '+':
        currentValue = previousValue + currentValue;
        break;
      case '-':
        currentValue = previousValue - currentValue;
        break;
      case '*':
        currentValue = previousValue * currentValue;
        break;
      case '/':
        currentValue = previousValue / currentValue;
        break;
    }
    display.innerText = currentValue;
    previousValue = 0;
    currentOperator = null;
  }
});

console.log(numbers);
console.log(operators);
console.log(display);
console.log(equals);
