import React from "react";
import "./Question.css";
const Result = ({ result, acceptedAnswers }) => {
  if (result === "correct") {
    return (
      <div>
        <h1 className="footer">Correct!</h1>
      </div>
    );
  } else if (result === "incorrect") {
    return (
      <div>
        <h1 className="footer">WRONG</h1>
        <p>Accepted answers:</p>
        <ul>
          {acceptedAnswers.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Result;
