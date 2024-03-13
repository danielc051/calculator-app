// Acess DOM elements of the Calculator (Document Object model e.g. heirarchy of html,page description)
const inputBox = document.getElementById("input");
const expressionDiv = document.getElementById("expression");
const resultDiv = document.getElementById("result");

// Define expression and result variable
let expression = "";
let result = "";

// Define a event handler for button clicks

function buttonClick(event) {
  const target = event.target;
  const action = target.dataset.action;
  const value = target.dataset.value;

  // Switch ase to control the calculator
  switch (action) {
    case "number":
      addValue(value);
      break;
    case "clear":
      clear();
      break;
    case "backspace":
      backspace();
      break;
      // add result to expression as a starting point of expression is empty
      case 'addition':
      case 'subtraction':
      case 'multiplication':
      case 'division':
        if (expression == ' && result ' == empty) {
          startFromResult(value);
        } else if (expression != '' && !isLastCharOperator()) {
          addValue(value);
        }
  }

  updateDisplay(expression, result);
}

inputBox.addEventListener("click", buttonClick);

function addValue(value) {
  // add value to the expression
  expression += value;
}

function updateDisplay(expression, result) {
  expressionDiv.textContent = result;
}

function clear() {
  expression = '';
  result = '';
}

function backspace() {
  expression = expression.slice(0, -1)
}

function isLastCharOperator() {
  return isNaN(parseInt(expression.slice(-1)));
}

function startFromResult(value)