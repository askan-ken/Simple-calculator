const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const count = document.getElementById('root');

function addNumber(){
    if (.innerText <= "1"){
        plus.innerText = parseInt(plus.innerText) + 1
    }
}

plus.addEventListener('click', addNumber)