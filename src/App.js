import React, { useState } from "react";
import "./App.css";
import Question from "./Question";

const questions = [
  {
    prompt: "א",
    regex: /[alef|aleph]/i
  },
  {
    prompt: "בּ",
    regex: /[bet|beth]/i
  },
  {
    prompt: "ב",
    regex: /vet/i
  },
  {
    prompt: "גּ",
    regex: /gimel/i
  },
  {
    prompt: "ג",
    regex: /ghimel/i
  },
  {
    prompt: "דּ",
    regex: /daleth/i
  },
  {
    prompt: "ד",
    regex: /dhaleth/i
  },
  {
    prompt: "ה",
    regex: /hey/i
  },
  {
    prompt: "ו",
    regex: /vav/i
  },
  {
    prompt: "ז",
    regex: /zayin/i
  },
  {
    prompt: "ח",
    regex: /chet/i
  },
  {
    prompt: "ט",
    regex: /tet/i
  },
  {
    prompt: "י",
    regex: /yud/i
  },
  {
    prompt: "כּ",
    regex: /kaph/i
  },
  {
    prompt: "כ",
    regex: /chaf/i
  },
  {
    prompt: "ך",
    regex: /chaf sofit/i
  },
  {
    prompt: "ל",
    regex: /lamedh/i
  },
  {
    prompt: "מ",
    regex: /mem/i
  },
  {
    prompt: "ם",
    regex: /final mem/i
  },
  {
    prompt: "נ",
    regex: /nun/i
  },
  {
    prompt: "ן",
    regex: /final nun/i
  },
  {
    prompt: "ס",
    regex: /samech/i
  }
];

function App() {
  const [count, setCount] = useState(0);
  const [prompt, setPrompt] = useState(questions[0].prompt);
  const [regex, setRegex] = useState(questions[0].regex);

  const [result, setResult] = useState("unanswered");

  const test = answer => {
    setResult(regex.test(answer) ? "correct" : "incorrect");
    setTimeout(() => {
      setResult("unanswered");

      let i = (count + 1) % questions.length;

      setPrompt(questions[i].prompt);
      setRegex(questions[i].regex);
      setCount(i);
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
