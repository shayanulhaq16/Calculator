var outputScreen = document.getElementById("container2");

var firstNumber;
var operator = '';
var secondNumber;



function calculator(parameter) {

  if (parameter === '+' && operator === '') {
    operator = parameter;
    outputScreen.innerHTML += operator;
  }
  else if (parameter === '-' && operator === '') {
    operator = parameter;
    outputScreen.innerHTML += operator;
    
  }
  else if (parameter === 'x' && operator === '') {
    operator = parameter;
    outputScreen.innerHTML += operator;
    
  }
  else if (parameter === '/' && operator === '') {
    operator = parameter;
    outputScreen.innerHTML += operator;
    
  }
  else if (parameter === '%' && operator === '') {
    operator = parameter;
    outputScreen.innerHTML += operator;
    
  }

  else{
    if(operator === ''){
        firstNumber =  parameter;
       outputScreen.innerHTML = firstNumber;
      console.log('first: ', parameter);
    }else if(parameter !== 'x' && parameter !== '/' && parameter !== '-' && parameter !== '+' && parameter !== '%'){
      secondNumber = parameter;
      outputScreen.innerHTML += secondNumber;
      console.log('second: ', parameter);
    }else{
      operator = parameter;
      outputScreen.innerHTML = firstNumber + operator;      
    }
  }

}


function output(){
  if(operator === '' || firstNumber === '' || secondNumber === ''){
    outputScreen.innerHTML = 'Error'
  }
  else if(operator === '+'){
    outputScreen.innerHTML = firstNumber + secondNumber;
  }
  else if(operator === '/'){
    outputScreen.innerHTML = firstNumber / secondNumber;
  }
  else if(operator === 'x'){
    outputScreen.innerHTML = firstNumber * secondNumber;
  }
  else if(operator === '-'){
    outputScreen.innerHTML = firstNumber - secondNumber;
  }
  firstNumber = '';
  secondNumber = '';
  operator = '';
}

function on(){
  firstNumber = '';
  secondNumber = '';
  operator = '';
  outputScreen.innerHTML = '';
}

function ce(index){
  if(firstNumber !== '' && operator === ''){
    firstNumber = '';
    outputScreen.innerHTML = '';
  } else if(operator !== '' && secondNumber === ''){
    operator = '';
    outputScreen.innerHTML = firstNumber;
  }else{
    secondNumber = '';
    outputScreen.innerHTML = firstNumber + operator;
  }
}


