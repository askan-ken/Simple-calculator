const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const modulus  = document.getElementById("modulus");
const exponent = document.getElementById("exponent");
const sqrt = document.getElementById("sqrt");
const log = document.getElementById("natlog");

function updateCounts(operator, number) {
    const counts = document.querySelectorAll('count');
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < counts.length; i++) {
      const count = parseInt(counts[i].textContent);
      let result;
      switch (operator) {
        case '+':
          result = count + number;
          break;
        case '-':
          result = count - number;
          break;
        case '*':
          result = count * number;
          break;
        case '/':
          result = count / number;
          break;
        case '%':
          result = count % number;
          break;
        case '^':
          result = Math.pow(count, number);
          break;
        case 'sqrt':
          result = Math.sqrt(count);
          break;
        case 'log':
          result = Math.log(count);
          break;
      }
      counts[i].textContent = result;
      const isEven = result % 2 === 0;
      counts[i].classList.toggle('even', isEven);
      counts[i].classList.toggle('odd', !isEven);
      if (isEven) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
    const root = document.querySelector('#root');
    root.textContent = `Even: ${evenCount}, Odd: ${oddCount}`;
  }
  
  plus.addEventListener('click', function() {
    updateCounts('+', 1);
  });
  
  minus.addEventListener('click', function() {
    updateCounts('-', 1);
  });
  
  multiply.addEventListener('click', function() {
    updateCounts('*', 2);
  });
  
  divide.addEventListener('click', function() {
    updateCounts('/', 2);
  });
  
  modulus.addEventListener('click', function() {
    updateCounts('%', 2);
  });
  
  exponent.addEventListener('click', function() {
    updateCounts('^', 2);
  });
  
  sqrt.addEventListener('click', function() {
    updateCounts('sqrt', 0);
  });
  
  log.addEventListener('click', function() {
    updateCounts('log', 0);
  });
  
  clear.addEventListener('click', function() {
    const counts = document.querySelectorAll('.count');
    for (let i = 0; i < counts.length; i++) {
      counts[i].textContent = '0';
      counts[i].classList.remove('even', 'odd');
    }
    const root = document.querySelector('#root');
    root.textContent = '';
  });
  
  const countInputs = document.querySelectorAll('.count-input');
  for (let i = 0; i < countInputs.length; i++) {
    countInputs[i].addEventListener('input', function() {
      const count = parseInt(this.value);
      if (!isNaN(count)) {
        const countElements = document.querySelectorAll(`.count${i + 1}`);
        for (let j = 0; j < countElements.length; j++) {
          countElements[j].textContent = count;
        }
      }
    });
  }
  