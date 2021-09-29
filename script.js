let displayValue = [];

const display = document.querySelector(".display");
const addBtn = document.querySelector(".addBtn");
const menosBtn = document.querySelector(".menosBtn");
const multiplyBtn = document.querySelector(".multiplyBtn");
const divideBtn = document.querySelector(".divideBtn");
const zeroBtn = document.querySelector(".zeroBtn");
const oneBtn = document.querySelector(".oneBtn");
const twoBtn = document.querySelector(".twoBtn");
const threeBtn = document.querySelector(".threeBtn");
const fourBtn = document.querySelector(".fourBtn");
const fiveBtn = document.querySelector(".fiveBtn");
const sixBtn = document.querySelector(".sixBtn");
const sevenBtn = document.querySelector(".sevenBtn");
const eightBtn = document.querySelector(".eightBtn");
const nineBtn = document.querySelector(".nineBtn");
const dotBtn = document.querySelector(".dotBtn");
const piBtn = document.querySelector(".piBtn");
const sinBtn = document.querySelector(".sinBtn");
const cosBtn = document.querySelector(".cosBtn");
const tanBtn = document.querySelector(".tanBtn");
const eBtn = document.querySelector(".eBtn");
const logBtn = document.querySelector(".logBtn");
const equalBtn = document.querySelector(".equalBtn");
const ACBtn = document.querySelector(".ACbtn");
const deleteBtn = document.querySelector(".deleteBtn");

oneBtn.addEventListener("mousedown", () => (display.textContent += 1));
twoBtn.addEventListener("mousedown", () => (display.textContent += 2));
threeBtn.addEventListener("mousedown", () => (display.textContent += 3));
fourBtn.addEventListener("mousedown", () => (display.textContent += 4));
fiveBtn.addEventListener("mousedown", () => (display.textContent += 5));
sixBtn.addEventListener("mousedown", () => (display.textContent += 6));
sevenBtn.addEventListener("mousedown", () => (display.textContent += 7));
eightBtn.addEventListener("mousedown", () => (display.textContent += 8));
nineBtn.addEventListener("mousedown", () => (display.textContent += 9));
zeroBtn.addEventListener("mousedown", () => (display.textContent += 0));
piBtn.addEventListener("mousedown", () => (display.textContent = 3.14));
eBtn.addEventListener("mousedown", () => (display.textContent = 2.71));
ACBtn.addEventListener("mousedown", () => (display.textContent = undefined));
addBtn.addEventListener("mousedown", () => addOperator("add"));
menosBtn.addEventListener("mousedown", () => addOperator("substract"));
multiplyBtn.addEventListener("mousedown", () => addOperator("multiply"));
divideBtn.addEventListener("mousedown", () => addOperator("divide"));
ACBtn.addEventListener("mousedown", () => clearFunc());
equalBtn.addEventListener("mousedown", () =>
  operate(
    displayValue.currentOperator,
    +displayValue.secondValue,
    +display.textContent
  )
);

// Basic operations
function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
// Basic operations

function operate(currentOperation, firstNumber, secondNumber) {
  let result = 0;
  if (currentOperation == "add") {
    result = add(firstNumber, secondNumber);
  } else if (currentOperation == "substract") {
    result = substract(firstNumber, secondNumber);
  } else if (currentOperation == "multiply") {
    result = multiply(firstNumber, secondNumber);
  } else if (currentOperation == "divide") {
    result = divide(firstNumber, secondNumber);
  }
  display.textContent = result;
  return result;
}
function addOperator(operator) {
  if (displayValue.currentOperator == undefined) {
    displayValue.secondValue = display.textContent;
    displayValue.currentOperator = operator;
    display.textContent = "";
  } else if(displayValue.currentOperation == undefined && display.textContent == ""){
    displayValue.currentOperator = operator
  } 
  
  else if (
    displayValue.currentOperator !== undefined &&
    displayValue.secondValue !== undefined &&
    display.textContent !== ""
  ) {
    operate(
      displayValue.currentOperator,
      +displayValue.secondValue,
      +display.textContent
    );
    displayValue.secondValue = display.textContent;
    display.textContent = "";
    displayValue.currentOperator = operator;
  }
}
function clearFunc() {
  displayValue.currentOperator = undefined;
  displayValue.secondValue = undefined;
  display.textContent = undefined;
}
/*

si yo meto otro operador => ejecute operate()
*/