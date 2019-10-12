import React from "react";
import "./Question.css";
const Question = ({ prompt, checkAnswer }) => {
  return (
    <div>
      <h1 className="he">{prompt}</h1>
      <label htmlFor="answer">Answer:</label>
      <input
        type="text"
        id="answer"
        name="answer"
        size="10"
        onKeyUp={e => {
          if (e.keyCode === 13) {
            checkAnswer(e.target.value);
            e.target.value = "";
          }
        }}
      ></input>
    </div>
  );
};

export default Question;
