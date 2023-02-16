const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const counts = document.getElementById('counts');


function addNumber(number) {
    for(let i = 0 ; i < counts.length; i++){
        counts[i].textContent = parseInt(counts[i].textContent) + number
    }
}

plus.addEventListener('click', 