import React from "react";
import { useState } from "react";

function Calculator() {
  const [finalValue, setFinalValue] = useState(100);
  const [initialValue, setinitialValue] = useState(90);
  const [relativeChange, setRelativeChange] = useState(
    ((finalValue - initialValue) / finalValue) * 100
  );

  return <div>{relativeChange}</div>;
}
export default Calculator;
