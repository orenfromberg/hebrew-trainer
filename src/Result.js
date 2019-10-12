import React from "react";
import "./Question.css";
const Result = ({ result, submittedAnswer, acceptedAnswers }) => {
  if (result === "correct") {
    return (
      <div>
        <h1 className="correct">{submittedAnswer} is correct!</h1>
        {acceptedAnswers.length > 1 && (
          <div>
            <h2>other accepted answers:</h2>
            <ul>
              {acceptedAnswers
                .filter(item => item !== submittedAnswer)
                .map(item => (
                  <li key={item}>{item}</li>
                ))}
            </ul>
          </div>
        )}
      </div>
    );
  } else if (result === "incorrect") {
    return (
      <div>
        <h1 className="incorrect">{submittedAnswer} is incorrect!</h1>
        <h2>Accepted answers:</h2>
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
