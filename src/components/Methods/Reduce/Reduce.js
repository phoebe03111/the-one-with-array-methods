import React, { useState } from "react";
import "../Push/Push.scss";

function Reduce() {
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
    <div className="method__container">
      <h2 className="method__title">reduce()</h2>
      <section className="method__section">
        <p className="method__hint">
          <strong>-reduce(callbackFn, initialValue)</strong>
        </p>
        <p className="method__hint">
          <strong>-reduce((prevValue, currValue) ={">"} ...)</strong>
        </p>
        <p>- Returns a single value that the function accumulated</p>
        <p>- Will NOT alter the original array</p>
      </section>

      <section className="method__section">
        <h3 className="method__question">
          Count the sum of the length of everyone's name!
        </h3>
        <input />
        <button onClick={handleCheckAnswer1}>Show answer</button>
        {checkAnswer1 && (
          <p className="method__answer">
            friends.map(person ={">"} person.length).reduce((prev, curr) ={">"}{" "}
            prev + curr)
          </p>
        )}
      </section>

      <section className="method__section">
        <h3 className="method__question">What's the return value?</h3>
        <p className="method__hint">console.log(friends.reduce(...))</p>
        <input />
        <button onClick={handleCheckAnswer2}>Show answer</button>
        {checkAnswer2 && <p className="method__answer">34</p>}
      </section>

      <section className="method__section">
        <h3 className="method__question">How does the array look like now?</h3>
        <p className="method__hint">console.log(friends)</p>
        <input />
        <button onClick={handleCheckAnswer3}>Show answer</button>
        {checkAnswer3 && (
          <p className="method__answer">
            ["Rachel", "Ross", "Phoebe", "Joey", "Monica", "Chandler"]
          </p>
        )}
      </section>
    </div>
  );
}

export default Reduce;
