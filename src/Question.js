import React from "react";
import "./Question.css";
const Question = ({ isDisabled, prompt, checkAnswer, hint }) => {
  return (
    <div className="question">
      <div className="prompt" title={hint()}>
        {prompt}
      </div>
      <label className={isDisabled ? "invisible" : ""} htmlFor="answer">
        what hebrew letter is this?
      </label>
      <input
        className={isDisabled ? "invisible" : ""}
        disabled={isDisabled}
        autoCapitalize="false"
        autoCorrect="false"
        autoComplete="false"
        spellCheck="false"
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
