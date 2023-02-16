const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const counts = document.querySelectorAll('#root');

function updateCounts(operator, number) {
    const counts = document.querySelectorAll('.count');
    for (let i = 0; i < counts.length; i++) {
      const count = parseInt(counts[i].textContent);
      counts[i].textContent = operator === '+' ? count + number : count - number;
    }
  }
  
  plus.addEventListener('click', function() {
    updateCounts('+', 1);
  });
  
  minus.addEventListener('click', function() {
    updateCounts('-', 1);
  });
  