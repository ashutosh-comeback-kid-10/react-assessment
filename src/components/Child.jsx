import React from "react"

const Child = () => {

  const [num, setNum] = React.useState(0)

  const handleMinusClick = () => {
    setNum(prevNum => prevNum - 1)
  };

  const handlePlusClick = () => {
    setNum(prevNum => prevNum + 1)
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
