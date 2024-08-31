import React, { useState, useEffect } from "react";
function Hookeffect() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("Document title changed");
    document.title = `you have clicked ${counter} times`;
  }, [counter]);

  return (
    <div>
      <h1>{counter}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCounter((prev) => prev + 1)}>click</button>
    </div>
  );
}
export default Hookeffect;
