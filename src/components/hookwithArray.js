import React, { useState } from "react";
function HookwithArray() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        key: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => {
          return <li key={item.key}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
}
export default HookwithArray;
