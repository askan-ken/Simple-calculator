const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const counts = document.querySelectorAll('#root');

function addNumber(number){
    for (let i = 0; i < counts.length; i++){
        counts[i].innerText = parseInt(counts[i].innerText) + number;
    }
}

function subtractNumber(number){
    for (let i = 0; i < counts.length; i++){
        counts[i].innerText = parseInt(counts[i].innerText) - number;
    }
}
plus.addEventListener('click', addNumber);
minus.addEventListener('click', subtractNumber);