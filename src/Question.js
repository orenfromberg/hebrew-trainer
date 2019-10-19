import React from "react";
import "./Question.css";
const Question = ({ result, prompt, checkAnswer, hint }) => {
  return (
    <div className="question">
      <div className="he prompt" title={hint()}>{prompt}</div>
      <label htmlFor="answer">Answer:</label>
      <input
        disabled={result!=="unanswered"?true:false}
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
