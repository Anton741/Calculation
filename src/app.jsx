import {useState } from 'react'
import Operators from './components/operators';
import LeftPannel from './components/leftPannel';
import './App.css';

function App() {
  let [expression, setExpression] = useState({
    value: null,
    displayValue: '',
    operator: null,
    AfterEqual: true,
    valueDigit: '',
  });
  
  const inputDigit = (inputValue) => {
    if (
      (expression.valueDigit.length === 0 && inputValue === '.') ||
      (expression.valueDigit.includes('.') && inputValue === '.')
    ) {
      inputValue = '';
    }
    if (inputValue === 'AC') {
      setExpression({
        value: null,
        displayValue: '',
        operator: null,
        AfterEqual: true,
        valueDigit: '',
      });
    }else{
      if (expression.AfterEqual){
        setExpression({...expression, displayValue: expression.displayValue + inputValue, valueDigit: expression.valueDigit + inputValue})
      }else{
        setExpression({
          ...expression,
          displayValue: inputValue,
          valueDigit: inputValue,
          AfterEqual: true,
          value: null,
        });
      }
  }
  }
const inputOperator = (operator_input) => {
  if ((/[0-9]/).test(expression.displayValue.slice(-1))){
      if (expression.value === null) {
        expression.value = Number(expression.valueDigit);
      }else{
        identifyOfOperator(expression.operator)
      }
      expression.operator = operator_input;
      expression.valueDigit = ''
      setExpression({
        ...expression,
        displayValue: expression.displayValue + expression.operator,
        AfterEqual: true,
      });
  }else{
    expression.displayValue = expression.displayValue.slice(0,-1) + operator_input
    expression.operator = operator_input;
    setExpression({...expression})

  }
}

const equal = () => {
  identifyOfOperator(expression.operator)
  expression.operator = null
  setExpression({
    ...expression,
    displayValue: String(expression.value),
    AfterEqual: false,
    valueDigit: '',
  });
  expression.displayValue = ''
}


const identifyOfOperator = (oper) => {
  switch (oper) {
    case '+':
      expression.value = expression.value + Number(expression.valueDigit);
      break;
    case '-':
      expression.value = expression.value - Number(expression.valueDigit);
      break;
    case '/':
      expression.value = expression.value / Number(expression.valueDigit);
      break;
    case '*':
      expression.value = expression.value * Number(expression.valueDigit);
      break;
  }
}


  return (
    <div className="calculator">
      <div className="input">
        {expression.displayValue !== '' ? expression.displayValue : 0}
      </div>
      <div className="buttons"></div>
      <Operators onCalculate={(e) => e.target.className === ''  ? inputOperator(e.target.innerText) : null}></Operators>
      <LeftPannel onCalculate={(e) => e.target.className === '' ? inputDigit(e.target.innerText)  : null }></LeftPannel>
      <div className="equal" onClick={equal}>
        =
      </div>
    </div>
  );
}

export default App;
