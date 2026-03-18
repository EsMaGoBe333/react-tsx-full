import React, { Component } from "react";
import Context from "./contexts/LangContext/LangContext";

class App extends Component {
  render() {
    return (
      <div>
        <Context />
      </div>
    );
  }
}

export default App;
