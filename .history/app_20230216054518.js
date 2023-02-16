const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const counts = document.querySelectorAll('#ro');

function addNumbers(numbers){
    for( let i = 0; i < counts.length; i++){
        counts[i].textContent = parseInt(counts[i].textContent) + numbers
    }
}

plus.addEventListener('click', function() {
    addNumbers(1)
})