const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const display = document.getElementById('display');
const equals = document.getElementById('equals');

let currentValue = 0;

numbers.forEach(number => {
  number.addEventListener('click', () => {
    currentValue = (currentValue * 10) + parseFloat(number.innerText);
    display.innerText = currentValue;
    console.log('Number clicked:', number.innerText);
    console.log('Current value:', currentValue);
  });
});

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    const operatorValue = operator.innerText;
    switch (operatorValue) {
      case '+':
        currentValue += parseFloat(display.innerText);
        break;
      case '-':
        currentValue -= parseFloat(display.innerText);
        break;
      case '*':
        currentValue *= parseFloat(display.innerText);
        break;
      case '/':
        const value = parseFloat(display.innerText);
        if (value === 0) {
          display.innerText = 'Error: division by zero';
        } else {
          currentValue /= value;
        }
        break;
    }
    console.log('Operator clicked:', operatorValue);
    console.log('Current value:', currentValue);
    display.innerText = 0; // Reset the display after the operator is clicked
  });
});

equals.addEventListener('click', () => {
  display.innerText = currentValue;
  currentValue = 0;
  console.log('Equals clicked');
});

display.innerText = 0; // Initialize the display

console.log(numbers);
console.log(operators);
console.log(display);
console.log(equals);
