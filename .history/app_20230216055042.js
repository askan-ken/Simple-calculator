const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const counts = document.querySelectorAll('#root');

function updateCounts(operator, number) {
    const counts = document.querySelectorAll('');
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
      }
      counts[i].textContent = result;
      const isEven = result % 2 === 0;
      counts[i].classList.toggle('even', isEven);
      counts[i].classList.toggle('odd', !isEven);
    }
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
  