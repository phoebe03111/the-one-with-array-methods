import React from "react";

function ReturnValueSection(props) {
  const { hint, answer, handleEnter2, handleCheckAnswer2, checkAnswer2 } =
    props;
    
  return (
    <>
      <h3 className="method__question">What's the return value?</h3>
      <p className="method__hint">console.log({hint})</p>
      <input onKeyDown={handleEnter2} />
      <button onClick={handleCheckAnswer2}>{checkAnswer2 ? "Hide" : "Show"} answer</button>
      {checkAnswer2 && <p className="method__answer">{answer}</p>}
    </>
  );
}

export default ReturnValueSection;
