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
    case "addition":
    case "subtraction":
    case "multiplication":
    case "division":
      if ((expression == " && result ") == empty) {
        startFromResult(value);
      } else if (expression != "" && !isLastCharOperator()) {
        addValue(value);
      }
        break;
      case 'submit':
          submit();
        break;
      case 'negate':
          negate();
        break;
      case 'mod':
          percentage();
        break;

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
  expression = "";
  result = "";
}

function backspace() {
  expression = expression.slice(0, -1);
}

function isLastCharOperator() {
  return isNaN(parseInt(expression.slice(-1)));
}

function startFromResult(value) {
  expression += result + value;
}

function submit() {
  result = evaluateExpression ();
  expression = '';
}

// in built eval function 
function evaluateExpression() {
  const evalResult = eval(expression);
  //checks evalresult isNan or infinite returns a blank space e.g. 'empty string'
  return isNan(evalResult) || !isFinite(evalResult);
  ? ' '
  : evalResult < 1 
  ? parseFloat(evalResult.toFixed(10))
  : parseFloat(evalResult.toFixed(2));
}

function negate() {
  if (expression === '' && result !== '') {
    result = -result;
  } else if (!expression.startsWith('-') && expression !== '') {
    expression = '-' + expression;
    // removes minus sign from negative expression
  } else if (expression.startsWith('-')) {
    expression = expression.slice(1);
  }
}

function percentage() {
  // evauate the epression of only the first number 
  if (expression != '') {
    result = calculateExpression();
    expression = '';
    if ()
  }
}