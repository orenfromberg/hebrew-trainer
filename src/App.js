import React, { useState } from "react";
import "./App.css";
import Question from "./Question";
import Result from "./Result";
import { questions } from "./questions.json";

const getRandomQuestion = () => Math.floor(Math.random() * questions.length);

function App() {
  const [question, setQuestion] = useState(questions[getRandomQuestion()]);
  const [result, setResult] = useState("unanswered");

  const test = answer => {
    const isCorrect = question.answers.includes(answer);
    setResult(isCorrect ? "correct" : "incorrect");

    setTimeout(
      () => {
        setResult("unanswered");
        setQuestion(questions[getRandomQuestion()]);
      },
      isCorrect ? 1000 : 4000
    );
  };

  return (
    <div>
      <header>What letter is this?</header>
      <Question prompt={question.prompt} checkAnswer={test} />
      <Result result={result} acceptedAnswers={question.answers} />
    </div>
  );
}

export default App;
