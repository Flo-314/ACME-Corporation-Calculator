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
equalBtn.addEventListener("mousedown", () => {
 //verifico que el text content tenga contenido. si no duelve undefined para que la operacion operate(K) haga nada. 
  if (display.textContent == "") {
    displayValue.currentOperator,
      +displayValue.secondValue,
      undefined;
  } else {
    operate(
      displayValue.currentOperator,
      +displayValue.secondValue,
      +display.textContent
    );
  }
});
dotBtn.addEventListener("mousedown", () => {
  if (display.textContent.length !== 0 && !display.textContent.includes(".")) {
    display.textContent += ".";
  }
});

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

function operate(currentOperation, firstNumber, secondNumber) {
  let result = 0;

  if (
    firstNumber !== undefined &&
    currentOperation !== undefined &&
    secondNumber !== undefined
  ) {
    switch (currentOperation) {
      case "add":
        result = add(firstNumber, secondNumber);
        break;
      case "substract":
        result = substract(firstNumber, secondNumber);
        break;
      case "multiply":
        result = multiply(firstNumber, secondNumber);
        break;
      case "divide":
        result = divide(firstNumber, secondNumber);
        break;
    }
    result = Math.round(+result * 10000) / 10000;
    display.textContent = result;
    displayValue.secondValue = undefined;
    displayValue.currentOperator = undefined;
  } else {
  }
  return result;
}

function addOperator(operator) {
  if (displayValue.currentOperator == undefined) {
    // si no hay operador, guarda los numeros del display, borra el display y guarda el operador.
    displayValue.secondValue = display.textContent;
    displayValue.currentOperator = operator;
    display.textContent = "";

    // si no tiene definido ni la operacion ni el text content, cambia de operador
  } else if (
    displayValue.currentOperation == undefined &&
    display.textContent == ""
  ) {
    displayValue.currentOperator = operator;
  }
  // si tiene definido todo, hace la misma operacion que haría un igual.
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
