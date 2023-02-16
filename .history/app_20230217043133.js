const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const counts = document.querySelectorAll('#count')


function addNumber(number) {
  for(let i = 0 ; i < counts.length; i++ ){
    counts[i].textContent = parseInt(counts[i].textContent) + number
  }
}
































function subtractNumber() {
  for()
}















plus.addEventListener("click", function(){
  addNumber(1)
})