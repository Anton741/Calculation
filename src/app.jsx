import {useState, useRef} from 'react'
import Operators from './components/operators';
import LeftPannel from './components/leftPannel';
import './App.css';

function App() {
  let [expression, setExpression] = useState('')
  let [cancel, setCansel] = useState(false)
  

  const getResult = () => {
    let result = 0;
    const variables = expression.match(/\d+(\.\d+)?/g)
    const operator = expression.match(/[-*+/]/)
    console.log(operator[0]);
    switch (operator[0]) {
      case '+':
        result = Number(variables[0]) + Number(variables[1]);
        break;
      case '-':
        result = Number(variables[0]) - Number(variables[1]);
        break;
      case '/':
        console.log(Number(variables[0]));
        result = Number(variables[0]) / Number(variables[1]);
        break
      case '*':
        result = Number(variables[0]) * Number(variables[1]);
        break;
    }
    setExpression(String(result))
    setCansel(true)
    
  }

  const calculateExpression = (e)=> {
    if (cancel) {
      console.log('hjjkhjk')
      setExpression("67")
    }
    const {target} = e
    if (target.innerText === "AC") {
      setExpression('')
    }else{
    setExpression(expression + target.innerText)
    }
  }

  const operator = (e) =>{
    const { target } = e;
    setExpression(expression + target.innerText);
  }
  return (
    <div className="calculator">
      <div className="input">{expression !== '' ? expression : 0}</div>
      <div className="buttons"></div>
      <Operators onCalculate={operator}></Operators>
      <LeftPannel onCalculate={calculateExpression}></LeftPannel>
      <div className="equal" onClick={getResult}>
        =
      </div>
    </div>
  );
}

export default App;
