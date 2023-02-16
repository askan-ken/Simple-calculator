const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const counts = document.querySelectorAll('#root');

// Function to add a number to each count
function addNumber(number) {
  for (let i = 0; i < counts.length; i++) {
    counts[i].textContent = parseInt(counts[i].textContent) + number;
  }
}

// Function to subtract a number from each count
function subtractNumber(number) {
  for (let i = 0; i < counts.length; i++) {
    counts[i].textContent = parseInt(counts[i].textContent) - number;
  }
}

// Event listener for the plus button
plus.addEventListener('click', function() {
  addNumber(1);
});

// Event listener for the minus button
minus.addEventListener('click', function() {
  subtractNumber(1);
});
