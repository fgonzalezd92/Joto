import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      isError: false,
    };
  }

  increment = () => {
    this.setState({ isError: false, counter: this.state.counter + 1 });
  };

  decrement = () => {
    if (this.state.counter === 0) {
      this.setState({ ...this.state, isError: true });
    } else {
      this.setState({ ...this.state, counter: this.state.counter - 1 });
    }
  };

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        <button data-test="increment-button" onClick={this.increment}>
          Increment counter
        </button>
        <span></span>
        <button data-test="decrement-button" onClick={this.decrement}>
          Decrement counter
        </button>
        {this.state.isError ? (
          <span data-test="error-message" style={{ color: "red" }}>
            The counter can't go below zero
          </span>
        ) : null}
        <span></span>
      </div>
    );
  }
}

export default App;
