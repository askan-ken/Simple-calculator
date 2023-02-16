const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const count = document.getElementById('root');

function addNumber(){
    if (count.innerText <= "1"){
        count.innerText = parseInt(p.innerText) + 1
    }
}

plus.addEventListener('click', addNumber)