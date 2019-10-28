import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useLocation
} from "react-router-dom";
import "./App.css";
import Question from "./Question";
import Result from "./Result";
import { levels, questions } from "./questions.json";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {levels.map((level, idx) => (
              <li>
                <Link to={`/level/${idx}`}>{level.description}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/level/:levelId">
            <Level />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Welcome!</h1>;
}

function Level() {
  let { levelId } = useParams();

  let location = useLocation();

  const getRandomQuestion = () => {
    const { start, end } = levels[levelId];
    return start + Math.round(Math.random() * (end - start));
  };

  const [questionIndex, setQuestionIndex] = useState(getRandomQuestion());
  const [result, setResult] = useState("unanswered");
  const [submittedAnswer, setSubmittedAnswer] = useState("");

  useEffect(() => {
    setQuestionIndex(getRandomQuestion());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const test = answer => {
    const trimmed_answer = answer.trim();
    setSubmittedAnswer(trimmed_answer);
    const isCorrect = questions[questionIndex].answers.includes(
      trimmed_answer.toLowerCase()
    );
    setResult(isCorrect ? "correct" : "incorrect");

    setTimeout(
      () => {
        setResult("unanswered");
        const currentQuestion = questionIndex;
        let nextQuestion = currentQuestion;
        while (currentQuestion === nextQuestion) {
          nextQuestion = getRandomQuestion();
        }
        setQuestionIndex(nextQuestion);
      },
      isCorrect ? 1000 : 4000
    );
  };

  const getHint = () => {
    const answersFirstLetters = questions[questionIndex].answers.map(
      item => item[0]
    );
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
      <p>Lesson: {levels[levelId].description}</p>
      <Question
        isDisabled={result !== "unanswered" ? true : false}
        prompt={questions[questionIndex].prompt}
        instruction={questions[questionIndex].instruction}
        checkAnswer={test}
        hint={getHint}
      />
      <Result
        result={result}
        submittedAnswer={submittedAnswer}
        acceptedAnswers={questions[questionIndex].answers}
      />
    </div>
  );
}
