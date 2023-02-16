const numbers = document.querySelectorAll('#numbers');
const operators = document.querySelectorAll('#operatos');
const display = document.getElementById('display');
const equals = document.getElementById('equals');
let currentValue = 0;

numbers.forEach(number => {
  number.addEventListener('click', () => {
    currentValue = (currentValue * 10) + parseInt(number.innerText);
    display.innerText = currentValue;
  });
});

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    const operatorValue = operator.innerText;
    switch (operatorValue) {
      case '+':
        currentValue += parseInt(display.innerText);
        break;
      case '-':
        currentValue -= parseInt(display.innerText);
        break;
      case '*':
        currentValue *= parseInt(display.innerText);
        break;
      case '/':
        currentValue /= parseInt(display.innerText);
        break;
    }
    display.innerText = 0;
  });
});

// equals.addEventListener('click', () => {
//   display.innerText = currentValue;
//   currentValue = 0;
// });

console.log(numbers);
console.log(operators);
console.log(display);
console.log();