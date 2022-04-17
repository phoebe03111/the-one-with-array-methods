import React, { useState } from "react";
import "../Push/Push.scss";

function Unshift() {
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
      <h2 className="method__title">unshift()</h2>
      <section className="method__section">
        <p>- Adds element(s) to the beginning of an array</p>
        <p>- Returns the length of the new array</p>
        <p>- Will alter the original array</p>
      </section>

      <section className="method__section">
        <h3 className="method__question">
          Gunther came to see Rachel, add him to the beginning of the array so
          he can stand next to her.
        </h3>
        <input />
        <button onClick={handleCheckAnswer1}>Show answer</button>
        {checkAnswer1 && (
          <p className="method__answer">friends.unshift("Gunther")</p>
        )}
      </section>

      <section className="method__section">
        <h3 className="method__question">What's the return value?</h3>
        <p className="method__hint">console.log(friends.unshift())</p>
        <input />
        <button onClick={handleCheckAnswer2}>Show answer</button>
        {checkAnswer2 && <p className="method__answer">7</p>}
      </section>

      <section className="method__section">
        <h3 className="method__question">How does the array look like now?</h3>
        <p className="method__hint">console.log(friends)</p>
        <input />
        <button onClick={handleCheckAnswer3}>Show answer</button>
        {checkAnswer3 && (
          <p className="method__answer">
            ["Gunther", "Rachel", "Ross", "Phoebe", "Joey", "Monica",
            "Chandler"]
          </p>
        )}
      </section>
    </>
  );
}

export default Unshift;
