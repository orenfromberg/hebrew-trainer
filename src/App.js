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

  const getHint = () => {
    const answersFirstLetters = question.answers.map(item => item[0]);
    return `The first letter could be "${answersFirstLetters[0].toUpperCase()}"`;
  }

  return (
    <div className="main">
      <h1>Name the Hebrew letter!</h1>
      <h4>
        Please submit issues{" "}
        <a href="https://github.com/orenfromberg/hebrew-trainer/issues/new">
          here.
        </a>
      </h4>
      <Result
        result={result}
        submittedAnswer={submittedAnswer}
        acceptedAnswers={question.answers}
      />
      <Question
        result={result}
        prompt={question.prompt}
        checkAnswer={test}
        hint={getHint}
      />
    </div>
  );
}

export default App;
