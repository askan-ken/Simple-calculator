const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const mod = document.getElementById("modulus");

function updateCounts(operator, number) {
  const counts = document.querySelectorAll("#count");
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < counts.length; i++) {
    const count = parseInt(counts[i].textContent);
    let result;
    switch (operator) {
      case "+":
        result = count + number;
        break;
      case "-":
        result = count - number;
        break;
      case "*":
        result = count * number;
        break;
      case "/":
        result = count / number;
        break;
    }
    counts[i].textContent = result;
    const isEven = result % 2 === 0;
    counts[i].classList.toggle("even", isEven);
    counts[i].classList.toggle("odd", !isEven);
    if (isEven) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  const root = document.querySelector("#root");
  root.textContent = `Even: ${evenCount}, Odd: ${oddCount}`;
}

plus.addEventListener("click", function () {
  updateCounts("+", 1);
});

minus.addEventListener("click", function () {
  updateCounts("-", 1);
});

multiply.addEventListener("click", function () {
  updateCounts("*", 2);
});

divide.addEventListener("click", function () {
  updateCounts("/", 2);
});
