import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogBrowser from "./HogBrowser.js";
import hogs from "../porkers_data";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HogBrowser hogs={hogs} />
      </div>
    );
  }
}
export default App;
