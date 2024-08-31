import React, { Component } from "react";
class RunEffectOnce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }
  logMousePosition = (e) =>
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });

  componentDidMount() {
    document.addEventListener("mousemove", this.logMousePosition);
  }
  render() {
    return (
      <div>
        <p>X:{this.state.x}</p>
        <p>Y:{this.state.y}</p>
      </div>
    );
  }
}
export default RunEffectOnce;
