import React, { useState, useEffect } from "react";

function Runeffect() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("LogMousePositioCalled");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useeffect Called");
    document.addEventListener("mousemove", logMousePosition);
  }, []);
  return (
    <div>
      <p>X:{x}</p>
      <p>Y:{y}</p>
    </div>
  );
}
export default Runeffect;
