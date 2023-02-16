const plusButton = document.createElement('click');
const minusButton = document.getElementById('minus');
const count = document.getElementById("root")

function addNumber(){
    if(count.innerText === "1"){
        count.innerText = parseInt(count.innerText) + 1
    }else{
        count.innerText = parseInt(count.innerText) + 1
    }
}
plusButton.addEventListener("click", addNumber)



function subtractNumber(){
    if(count.innerText <== "1"){
        count.innerText = parseInt(count.innerText) - 1
    }
}
minusButton.addEventListener("click", subtractNumber)