import React from "react";
import { useState } from "react";

function Calculator() {
  const [finalValue, setFinalValue] = useState(0);

  function handleChange() {}

  return (
    <div>
      <span className="initialValue">{finalValue}</span>
      <input
        type="number"
        name="finalValue"
        placeholder="Enter Final value"
        className="input"
      />
    </div>
  );
}
export default Calculator;
