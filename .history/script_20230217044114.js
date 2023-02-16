const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const counts = document.querySelectorAll('#count');


function addNumber(number) {
    for(let i = 0 ; i < counts.length; i++){
        counts[i].textContent = parseInt(counts[i].textContent) + number
    }
}
function subtractNumber(number) {
    for(let i = o; i < counts.length; i++){
        counts[i].textContent = paseInt()
    }
}
plus.addEventListener('click', function(){
    addNumber(1)
})

