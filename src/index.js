// var React = require("react");
// var ReactDOM = require("react-dom");
// import createRoot from "react-dom/client";
// import React from "react";
// import ReactDOM from "react-dom";
// ReactDOM.render(<h1>Heloo world!</h1>, document.getElementById("root"));
import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
import App from "./App";
// let myName = "Dilip";
/* <h1>JS Expression {myName}</h1>
<p>{Math.floor(Math.random() * 100)}</p> */

// const title = {
//   color: "orange",
//   backgroundColor: "black",
//   textTransform: "capitalise",
// };
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <div className="container">
      <div className="card">
        <h1>Animation</h1>
        <img
          src="https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="NotAvailable"
        />
      </div>
    </div> */}
    <App />
  </React.StrictMode>
);
