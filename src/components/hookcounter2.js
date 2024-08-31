import React, { useState } from "react";

export default function HookCounter2() {
  const initialValue = 0;
  const [counter, setCounter] = useState(initialValue);
  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCounter((prev) => prev + 1);
    }
  };
  return (
    <div className="app">
      <h1>count value: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(initialValue)}>Reset</button>
      <button onClick={incrementByFive}>Increment5</button>
    </div>
  );
}
