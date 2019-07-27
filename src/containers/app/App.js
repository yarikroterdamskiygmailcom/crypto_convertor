import React, { Component } from "react";
import Chart from "../chart/Chart";
import Calc from "../calculator/Calc";
import { Container } from "./index";
import Trade from "../trade/Trade";

class App extends Component {
  state = {
    value: "hello"
  };

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  render() {
    return (
      <Container>
        <Chart />
        <Calc />
        <Trade />
      </Container>
    );
  }
}

export default App;
