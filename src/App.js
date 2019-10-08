import React, { useState } from "react";
import "./App.css";
import Question from "./Question";

function App() {
  const [result, setResult] = useState("unanswered");

  const prompt = "א";

  const regex = /alef/i;

  const test = answer => {
    setResult(/alef/i.test(answer) ? "correct" : "incorrect");
    setTimeout(() => setResult("unanswered"), 1000);
  };

  // const test2 = re => answer => {
  //   setResult(re.test(answer) ? "correct" : "incorrect");
  //   setTimeout(() => setResult("unanswered", 1000));
  // };

  let footer = "";
  if (result === "correct") {
    footer = "correct!";
  } else if (result === "incorrect") {
    footer = "incorrect!";
  }

  return (
    <div>
      <header>What letter is this?</header>
      {/* <Question prompt={prompt} checkAnswer={test2(regex)} /> */}
      <Question prompt={prompt} checkAnswer={test} />
      <h1 className="footer">{footer}</h1>
    </div>
  );
}

export default App;
