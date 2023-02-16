const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const counts = document.querySelectorAll('#count')


function addNumber(number) {
  for(let i = 0 ; counts.length < 1; i++ ){
    counts[i].textContent = parseInt(counts[i].textContent) + number
  }
}
pluas