const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const counts = document.quer('counts');


function addNumber(number) {
    for(let i = 0 ; i < counts.lenght; i++){
        counts[i].textContent = parseInt(counts[i].textContent) + number
    }
}

plus.addEventListener('click', function(){
    addNumber(1)
})