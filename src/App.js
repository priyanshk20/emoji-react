import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [likeCounter, setLikecounter] = useState(0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Hello React</h2>
      <button onClick={() => setLikecounter(likeCounter + 1)}>
        Like Me
      </button>{" "}
      {likeCounter}
    </div>
  );
}
