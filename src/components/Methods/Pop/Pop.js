import React, { useState } from "react";
import "../Push/Push.scss";

function Pop() {
  const [checkAnswer1, setCheckAnswer1] = useState(false);
  const [checkAnswer2, setCheckAnswer2] = useState(false);
  const [checkAnswer3, setCheckAnswer3] = useState(false);

  const handleCheckAnswer1 = () => {
    setCheckAnswer1((prev) => !prev);
  };

  const handleCheckAnswer2 = () => {
    setCheckAnswer2((prev) => !prev);
  };

  const handleCheckAnswer3 = () => {
    setCheckAnswer3((prev) => !prev);
  };

  return (
    <>
      <h2 className="method__title">pop()</h2>
      <section className="method__section">
        <p>- Removes the last element from an array</p>
        <p>- Returns the removed element</p>
        <p>- Will Alter the original array</p>
      </section>

      <section className="method__section">
        <h3 className="method__question">
          Chandler has to go on a business trip to Tulsa, Oklahoma. Remove him
          from the array!
        </h3>
        <input />
        <button onClick={handleCheckAnswer1}>Show answer</button>
        {checkAnswer1 && <p className="method__answer">friends.pop()</p>}
      </section>

      <section className="method__section">
        <h3 className="method__question">What's the return value?</h3>
        <p className="method__hint">console.log(friends.pop())</p>
        <input />
        <button onClick={handleCheckAnswer2}>Show answer</button>
        {checkAnswer2 && <p className="method__answer">"Chandler"</p>}
      </section>

      <section className="method__section">
        <h3 className="method__question">How does the array look like now?</h3>
        <p className="method__hint">console.log(friends)</p>
        <input />
        <button onClick={handleCheckAnswer3}>Show answer</button>
        {checkAnswer3 && (
          <p className="method__answer">
            ["Rachel", "Ross", "Phoebe", "Joey", "Monica"]
          </p>
        )}
      </section>
    </>
  );
}

export default Pop;
