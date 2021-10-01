import React, { Component } from "react";

export class HomeC extends Component {
  constructor() {
    super();
    this.state = {
      data: "first name",
    };
  }
  clickme() {
    this.setState({ data: "seconda name" });
  }
  render() {
    return (
      <div>
        <h1>My name is {this.state.data}</h1>
        <button onClick={() => this.clickme()}>clickme</button>
      </div>
    );
  }
}

export default HomeC;
