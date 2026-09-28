var outputScreen = document.getElementById("container2");

var firstNumber = '';
var operator = '';
var secondNumber = '';



function calculator(parameter) {

  if (parameter === '+' && firstNumber !== '') {
    operator = parameter;
    outputScreen.innerHTML = firstNumber + operator;
  }
  else if (parameter === '-' && firstNumber !== '') {
    operator = parameter;
    outputScreen.innerHTML = firstNumber + operator;

  }
  else if (parameter === 'x' && firstNumber !== '') {
    operator = parameter;
    outputScreen.innerHTML = firstNumber + operator;

  }
  else if (parameter === '/' && firstNumber !== '') {
    operator = parameter;
    outputScreen.innerHTML = firstNumber + operator;

  }
  else if (parameter === '%' && firstNumber !== '') {
    operator = parameter;
    outputScreen.innerHTML = firstNumber + operator;

  }
  
  else {
    if (operator === '' && parameter !== 'x' && parameter !== '/' && parameter !== '-' && parameter !== '+' && parameter !== '%') {
      firstNumber += parameter;
      outputScreen.innerHTML += parameter;
    }
    else if (parameter !== 'x' && parameter !== '/' && parameter !== '-' && parameter !== '+' && parameter !== '%') {
      secondNumber += parameter;
      outputScreen.innerHTML += parameter;
    }
  }

}


function output() {
  var result;
  if (operator === '' || firstNumber === '' || secondNumber === '') {
    outputScreen.innerHTML = 'Error'
  }
  else if (operator === '+') {
    result = Number(firstNumber) + Number(secondNumber);
    outputScreen.innerHTML = result;
  }
  else if (operator === '/') {
    result = Number(firstNumber) / Number(secondNumber);
    outputScreen.innerHTML = result;
  }
  else if (operator === 'x') {
    result = Number(firstNumber) * Number(secondNumber);
    outputScreen.innerHTML = result;
  }
  else if (operator === '-') {
    result = Number(firstNumber) - Number(secondNumber);
    outputScreen.innerHTML = result;
  }


  firstNumber = result.toString();
  secondNumber = '';
  operator = '';
}

function on() {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  outputScreen.innerHTML = '';
}

function ce() {


  
  
  
  if (firstNumber !== '' && operator === '') {
    firstNumber = firstNumber.slice(0, firstNumber.length - 1);
    outputScreen.innerHTML = firstNumber;
    } else if (operator !== '' && secondNumber === '') {
        operator = '';
        outputScreen.innerHTML = firstNumber;
      } else {
        secondNumber = secondNumber.slice(0, secondNumber.length - 1);
        outputScreen.innerHTML = firstNumber + operator + secondNumber;
  }
}


