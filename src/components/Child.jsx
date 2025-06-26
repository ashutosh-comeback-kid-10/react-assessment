<<<<<<< HEAD
const Child = ({setCount}) => {



  const handleMinusClick = () => {
    setCount(prevNum => prevNum - 1)
  };

  const handlePlusClick = () => {
    setCount(prevNum => prevNum + 1)
=======
import React from "react"

const Child = () => {

  const [num, setNum] = React.useState(0)

  const handleMinusClick = () => {
    setNum(prevNum => prevNum - 1)
  };

  const handlePlusClick = () => {
    setNum(prevNum => prevNum + 1)
>>>>>>> c8307c1b64cba249d9c7300e8569862914714ca5
  };

  return (
    <div>
      <h1>{num}</h1>
      <button type="button" className="btn" onClick={handleMinusClick}>
        -
      </button>
      <button type="button" className="btn" onClick={handlePlusClick}>
        +
      </button>
      <div className="negative">
      {num < 0 ? <p>Why so negative?</p> : null}
      </div>
    </div>
  );
};

export default Child;
