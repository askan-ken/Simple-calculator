const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const count = document.getElementById('root');

function addNumber(){
    if (plus.innerText <= "1"){
        plus.innerText = parseInt(min.innerText) + 1
    }
}

plus.addEventListener('click', addNumber)