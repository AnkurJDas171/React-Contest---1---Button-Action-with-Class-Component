import React, { Component, useState } from "react";
import "../styles/App.css";
import Para from "./para";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { para: null };
  }


  render() {
    return (
      <div id="main">
        <button id="click" onClick={() => this.setState({para: <Para/>})}>
          click
        </button>
		{this.state.para}
      </div>
    );
  }
}

export default App;
