import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Happy",
  "😉": "Wink",
  "😣": "Irritated",
  "🥱": "Yawning",
  "😭": "Crying"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputhandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Sorry, This is not our Database.";
    }

    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>WhatMoji</h1>
      <input onChange={emojiInputhandler}></input>
      <h2>{meaning}</h2>
    </div>
  );
}
