import React, { Component } from "react";
class Classcounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  increment = () => {
    this.setState((prev) => {
      return { counter: prev.counter + 1 };
    });
  };
  decrement = () => {
    this.setState((prev) => {
      return { counter: prev.counter - 1 };
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
export default Classcounter;
