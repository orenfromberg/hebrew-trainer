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
    const trimmed_answer = answer.trim();
    setSubmittedAnswer(trimmed_answer);
    const isCorrect = question.answers.includes(trimmed_answer.toLowerCase());
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
  };

  return (
    <div className="main">
      <p>
        Please submit issues{" "}
        <a href="https://github.com/orenfromberg/hebrew-trainer/issues/new">
          here.
        </a>
      </p>
      <Question
        isDisabled={result !== "unanswered" ? true : false}
        prompt={question.prompt}
        checkAnswer={test}
        hint={getHint}
      />
      <Result
        result={result}
        submittedAnswer={submittedAnswer}
        acceptedAnswers={question.answers}
      />
    </div>
  );
}

export default App;
