const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const display = document.getElementById('display');
const equals = document.getElementById('equals');

let currentValue = 0;
let previousValue = 0;
let currentOperator = null;

numbers.forEach(number => {
  number.addEventListener('click', () => {
    currentValue = parseFloat(currentValue.toString() + number.innerText);
    display.innerText = currentValue;
    console.log('Number clicked:', number.innerText);
    console.log('Current value:', currentValue);
  });
});

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    const operatorValue = operator.innerText;
    if (currentOperator !== null) {
      switch (currentOperator) {
        case '+':
          previousValue += parseFloat(display.innerText);
          break;
        case '-':
          previousValue -= parseFloat(display.innerText);
          break;
        case '*':
          previousValue *= parseFloat(display.innerText);
          break;
        case '/':
          const value = parseFloat(display.innerText);
          if (value === 0) {
            display.innerText = 'Error: division by zero';
          } else {
            previousValue /= value;
          }
          break;
      }
      display.innerText = previousValue;
    } else {
      previousValue = parseFloat(display.innerText);
    }
    currentOperator = operatorValue;
    console.log('Operator clicked:', currentOperator);
    console.log('Previous value:', previousValue);
    console.log('Current value:', currentValue);
    currentValue = 0;
  });
});

equals.addEventListener('click', () => {
  switch (currentOperator) {
    case '+':
      currentValue += previousValue;
      break;
    case '-':
      currentValue = previousValue - currentValue;
      break;
    case '*':
      currentValue *= previousValue;
      break;
    case '/':
      if (currentValue === 0) {
        display.innerText = 'Error: division by zero';
      } else {
        currentValue = previousValue / currentValue;
      }
      break;
  }
  display.innerText = currentValue;
  currentOperator = null;
  previousValue = 0;
  console.log('Equals clicked');
  console.log('Current value:', currentValue);
});

console.log(numbers);
console.log(operators);
console.log(display);
console.log(equals);
display.innerText = currentValue;
