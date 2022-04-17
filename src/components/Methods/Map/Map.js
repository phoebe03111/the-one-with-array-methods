import React, { useState } from "react";
import "../Push/Push.scss";

function Map() {
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
      <h2 className="method__title">map()</h2>
      <section className="method__section">
        <p>- Performs a callback function on each item</p>
        <p>- Returns a new array with the results</p>
        <p>- Will NOT alter the original array</p>
      </section>

      <section className="method__section">
        <h3 className="method__question">
          Friends are THE BEST show ever! Let's make them all uppercase.
        </h3>
        <input />
        <button onClick={handleCheckAnswer1}>Show answer</button>
        {checkAnswer1 && (
          <p className="method__answer">
            friends.map(person ={">"} person.toUpperCase())
          </p>
        )}
      </section>

      <section className="method__section">
        <h3 className="method__question">What's the return value?</h3>
        <p className="method__hint">console.log(friends.map(...))</p>
        <input />
        <button onClick={handleCheckAnswer2}>Show answer</button>
        {checkAnswer2 && (
          <p className="method__answer">
            ["RACHEL", "ROSS", "PHOEBE", "JOEY", "MONICA", "CHANDLER"]
          </p>
        )}
      </section>

      <section className="method__section">
        <h3 className="method__question">How does the array look like now?</h3>
        <p className="method__hint">console.log(friends)</p>
        <input />
        <button onClick={handleCheckAnswer3}>Show answer</button>
        {checkAnswer3 && (
          <p className="method__answer">
            ["RACHEL", "ROSS", "PHOEBE", "JOEY", "MONICA", "CHANDLER"]
          </p>
        )}
      </section>
    </>
  );
}

export default Map;
