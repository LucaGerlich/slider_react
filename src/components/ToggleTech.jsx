import React, { Component } from "react";

export default class ToggleTech extends Component {
  state = {
    on: false,
  };

  toggle = () => {
    this.setState({ on: !this.state.on });
    alert("Bro");
  };

  render() {
    return (
      <div>
        {this.state.on && console.log("Moin")}
        <button onClick={this.toggle}>Show/Hide</button>
      </div>
    );
  }
}
