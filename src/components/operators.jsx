const Operators = ({onCalculate}) => {
  const operators = ['+','-','*', '/']
  return (
    <div className="operators" onClick = {onCalculate}>
      {operators.map((operator,index) => (
        <div key = {index} >{operator}</div>
      ))}
    </div>
  );
}

export default Operators;