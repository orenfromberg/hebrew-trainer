import React, { useState } from "react";
import "./App.css";
import Question from "./Question";
import Result from "./Result";
import { questions } from "./questions.json";

const getRandomQuestion = () => Math.floor(Math.random() * questions.length);

function App() {
  const [question, setQuestion] = useState(questions[getRandomQuestion()]);
  const [result, setResult] = useState("unanswered");
  const [submittedAnswer, setSubmittedAnswer] = useState("");

  const test = answer => {
    setSubmittedAnswer(answer);
    const isCorrect = question.answers.includes(answer.toLowerCase());
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
    <div className="main">
      <h1>Name the Hebrew letter!</h1>
      <h4>
        Please submit issues{" "}
        <a href="https://github.com/orenfromberg/hebrew-trainer/issues">
          here.
        </a>
      </h4>
      <Question prompt={question.prompt} checkAnswer={test} />
      <Result
        result={result}
        submittedAnswer={submittedAnswer}
        acceptedAnswers={question.answers}
      />
    </div>
  );
}

export default App;
