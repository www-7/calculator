const resultElement = document.getElementById("result");
const oneBtn = document.getElementById("num-1");
const twoBtn = document.getElementById("num-2");
const threeBtn = document.getElementById("num-3");
const fourBtn = document.getElementById("num-4");
const fiveBtn = document.getElementById("num-5");
const sixBtn = document.getElementById("num-6");
const sevenBtn = document.getElementById("num-7");
const eightBtn = document.getElementById("num-8");
const nineBtn = document.getElementById("num-9");
const zeroBtn = document.getElementById('num-0')
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById('multiply')
const divisionBtn = document.getElementById('division')
const resetBtn = document.getElementById("reset");
const calcBtn = document.getElementById("calc");
const dotBtn = document.getElementById('dot')

oneBtn.addEventListener("click", () => {
  resultElement.textContent += "1";
});

twoBtn.addEventListener("click", () => {
  resultElement.textContent += '2';
});
threeBtn.addEventListener('click', () => {
  resultElement.textContent += '3'
})
fourBtn.addEventListener("click", () => {
  resultElement.textContent += '4';
});
fiveBtn.addEventListener("click", () => {
  resultElement.textContent += '5';
});
sixBtn.addEventListener("click", () => {
  resultElement.textContent += '6';
});
sevenBtn.addEventListener("click", () => {
  resultElement.textContent += '7';
});
eightBtn.addEventListener("click", () => {
  resultElement.textContent += '8';
});
nineBtn.addEventListener("click", () => {
  resultElement.textContent += '9';
});
zeroBtn.addEventListener("click", () => {
  resultElement.textContent += '0';
});
plusBtn.addEventListener("click", () => {
  resultElement.textContent += '+';
});
minusBtn.addEventListener("click", () => {
  resultElement.textContent += '-';
});
multiplyBtn.addEventListener("click", () => {
  resultElement.textContent += '*';
});
divisionBtn.addEventListener("click", () => {
  resultElement.textContent += '/';
});
dotBtn.addEventListener('click', () => {
  resultElement.textContent += '.';
})

calcBtn.addEventListener("click", () => {
  const expression = resultElement.textContent; // 1+2;
  resultElement.textContent = eval(expression); // 3;
});
resetBtn.addEventListener("click", () => {
  resultElement.textContent = "";
});

// const buttons = [
// 	'num-1', 'num-2', 'num-3', 'num-4', 'num-5', 'num-6', 'num-7', 'num-8', 'num-9', 'plus', 'minus', 'division', 'multiply'
// ]
// buttons.forEach(btnId => {
// 	const btnEl = document.getElementById(btnId)
// 	btnEl.addEventListener('click', () => {
// 		resultElement.textContent += btnEl.textContent
// 	})
// })
