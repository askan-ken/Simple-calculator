const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const counts = document.querySelectorAll('counts');

function addNumbers(numbers){
    for( let i = 0; i < numbers.length; i++){
        counts[i].textContent = parseInt(counts[i].textContent) + numbers
    }
}

plus.addEventListener('click', function() {
    addNumbers(1)
})