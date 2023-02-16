const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const counts = document.querySelectorAll('#root');

function addNumber(){
    for (let i = 0; i < counts.length; i++) {
        if (counts[i].innerText <= "1"){
            counts[i].innerText = parseInt(counts[i].innerText) + 1
        }
    }
}

plus.addEventListener('click', addNumber);
