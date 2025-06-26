import "./App.css";
import Child from "./components/Child";
import React from "react"



const App = () => {
  const [num, setNum] = React.useState(0)


  return (
    <div className="App">
      <h1>{num}</h1>
      <Child setCount={setNum}/>
      {num < 0 ? <p>Why so negative?</p> : ""}
    </div>
  );
};

export default App;
