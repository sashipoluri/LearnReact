import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Hello(props) {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>testing with git hub at time {props.now}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Hello now={new Date().toISOString()} />, rootElement);
