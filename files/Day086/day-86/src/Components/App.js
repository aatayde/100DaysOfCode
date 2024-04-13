import "../App.css";
import Heading from "./Heading";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);
  function handleClick() {
    console.log("i have been clicked");
    return setCounter(counter * 2);
  }
  return (
    <div>
      <Heading />
      <div className="absolute-center">
        <span className="center-text">{counter}</span>
        <button className="button auto-margin" onClick={handleClick}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
