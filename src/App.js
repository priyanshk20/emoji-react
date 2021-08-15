import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Happy",
  "😉": "Wink",
  "😣": "Irritated",
  "🥱": "Yawning",
  "😭": "Crying",
  "🙄": "Rolling eyes",
  "😥":"Tensed",
  "🤑": "Rich",
  "😴" : "Sleepy",
  "🥵": "Hot face"
};

var emojisIndb = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiClickhandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

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
      <input
        placeholder={"Copy any Emoji from below"}
        onChange={emojiInputhandler}
      ></input>
      <h2>{meaning}</h2>
      <h3>Emojis in our Database: </h3>
      {emojisIndb.map((emoji) => {
        return (
          <span
            key={emoji}
            style={{ padding: "1rem", fontSize: "3rem", cursor: "pointer" }}
            onClick={() => emojiClickhandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
