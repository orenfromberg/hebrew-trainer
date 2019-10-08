import React, { useState } from "react";
import "./App.css";
import Question from "./Question";

function App() {
  const [prompt, setPrompt] = useState("א");
  const [regex, setRegex] = useState(/alef/i);
  const [result, setResult] = useState("unanswered");

  const test = answer => {
    setResult(regex.test(answer) ? "correct" : "incorrect");
    setTimeout(() => {
      setResult("unanswered");
      setPrompt("ב");
      setRegex(/bet/i);
    }, 1000);
  };

  let footer = "";
  if (result === "correct") {
    footer = "correct!";
  } else if (result === "incorrect") {
    footer = "incorrect!";
  }

  return (
    <div>
      <header>What letter is this?</header>
      <Question prompt={prompt} checkAnswer={test} />
      <h1 className="footer">{footer}</h1>
    </div>
  );
}

export default App;
