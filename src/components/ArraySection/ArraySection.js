import React from "react";

function ArraySection(props) {
  const { answer, handleEnter3, handleCheckAnswer3, checkAnswer3 } = props;

  return (
    <>
      <h3 className="method__question">
        How does the original array look like now?
      </h3>
      <p className="method__hint">console.log(friends)</p>
      <input onKeyDown={handleEnter3} />
      <button onClick={handleCheckAnswer3}>
        {checkAnswer3 ? "Hide" : "Show"} answer
      </button>
      {checkAnswer3 && <p className="method__answer">{answer}</p>}
    </>
  );
}

export default ArraySection;
