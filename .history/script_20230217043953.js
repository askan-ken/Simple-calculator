const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const counts = document.querySelectorAll('#counts');


function addNumber(number) {
    for(let i = 0 ; i < counts.length; i++){
        counts[i].textContent = parse
    }
}

plus.addEventListener('click', function(){
    addNumber(1)
})

