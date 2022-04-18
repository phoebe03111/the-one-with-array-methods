import React from "react";

function QuestionSection(props) {
  const { question, answer, handleEnter1, handleCheckAnswer1, checkAnswer1 } =
    props;

  return (
    <>
      <h3 className="method__question">{question}</h3>
      <input onKeyDown={handleEnter1} />
      <button onClick={handleCheckAnswer1}>
        {checkAnswer1 ? "Hide" : "Show"} answer
      </button>
      {checkAnswer1 && <p className="method__answer">{answer}</p>}
    </>
  );
}

export default QuestionSection;
