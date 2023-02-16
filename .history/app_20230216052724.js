const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const count = document.getElementById("root");

function addNumber() {
  for (let i = 0; i < count.length; i++) {
    if (count[i].innerText <= "1") {
      count[i].innerText = parseInt(count[i].innerText) + 1;
    }
  }
}

plus.addEventListener("click", addNumber);
