const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const display = document.getElementById('display');
const equals = document.getElementById('equals');

let currentValue = null;
let previousOperator = null;

numbers.forEach(number => {
  number.addEventListener('click', () => {
    if (currentValue === null) {
      currentValue = 0;
    }
    currentValue = (currentValue * 10) + parseInt(number.innerText);
    display.innerText = currentValue;
  });
});

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    const operatorValue = operator.innerText;
    switch (operatorValue) {
      case '+':
        if (currentValue === null) {
          currentValue = 0;
        }
        if (previousOperator === '-') {
          currentValue -= parseInt(display.innerText);
        } else if (previousOperator === '*') {
          currentValue *= parseInt(display.innerText);
        } else if (previousOperator === '/') {
          currentValue /= parseInt(display.innerText);
        } else {
          currentValue += parseInt(display.innerText);
        }
        break;
      case '-':
        if (currentValue === null) {
          currentValue = 0;
        }
        if (previousOperator === '+') {
          currentValue += parseInt(display.innerText);
        } else if (previousOperator === '*') {
          currentValue *= parseInt(display.innerText);
        } else if (previousOperator === '/') {
          currentValue /= parseInt(display.innerText);
        } else {
          currentValue = parseInt(display.innerText);
        }
        break;
      case '*':
        if (currentValue === null) {
          currentValue = 1;
        }
        if (previousOperator === '+') {
          currentValue += parseInt(display.innerText);
        } else if (previousOperator === '-') {
          currentValue -= parseInt(display.innerText);
        } else if (previousOperator === '/') {
          currentValue /= parseInt(display.innerText);
        } else {
          currentValue *= parseInt(display.innerText);
        }
        break;
      case '/':
        if (currentValue === null) {
          currentValue = parseInt(display.innerText);
        } else if (previousOperator === '+') {
          currentValue += parseInt(display.innerText);
        } else if (previousOperator === '-') {
          currentValue -= parseInt(display.innerText);
        } else if (previousOperator === '*') {
          currentValue *= parseInt(display.innerText);
        } else {
          currentValue /= parseInt(display.innerText);
        }
        break;
    }
    previousOperator = operatorValue;
    display.innerText = 0;
  });
});

equals.addEventListener('click', () => {
  display.innerText = currentValue;
  currentValue = null;
  previousOperator = null;
});

console.log(numbers);
console.log(operators);
console.log(display);
console.log(equals);
