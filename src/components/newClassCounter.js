import React, { Component } from "react";
class Newcounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name: "",
    };
  }
  componentDidMount() {
    document.title = `you have clicked ${this.state.counter} times`;
  }
  componentDidUpdate(prevProps, prevState) {
    document.title = `you have clicked ${this.state.counter} times`;
  }
  incrementCounter = () => {
    this.setState((prev) => ({ counter: prev.counter + 1 }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.incrementCounter}>click</button>
      </div>
    );
  }
}
export default Newcounter;
