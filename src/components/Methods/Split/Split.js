import React, { useState } from "react";
import Notes from "../../Notes/Notes";
import "../Push/Push.scss";

function Split() {
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

  const notes = [
    "It's a string method that splits a string into an array of substrings",
    "Returns a new array",
    "Will NOT alter the original array",
  ];

  return (
    <div className="method__container">
      <h2 className="method__title">split()</h2>
      <section className="method__section">
        <Notes notes={notes} />
      </section>

      <section className="method__section">
        <h3 className="method__question">
          const show = "Days-Of-Our-Lives". Can you split this string to an
          array?
        </h3>
        <input />
        <button onClick={handleCheckAnswer1}>Show answer</button>
        {checkAnswer1 && <p className="method__answer">show.split('-')</p>}
      </section>

      <section className="method__section">
        <h3 className="method__question">What's the return value?</h3>
        <p className="method__hint">console.log(show.split('-'))</p>
        <input />
        <button onClick={handleCheckAnswer2}>Show answer</button>
        {checkAnswer2 && (
          <p className="method__answer">['Days', 'Of', 'Our', 'Lives']</p>
        )}
      </section>

      <section className="method__section">
        <h3 className="method__question">How does the string look like now?</h3>
        <p className="method__hint">console.log(show)</p>
        <input />
        <button onClick={handleCheckAnswer3}>Show answer</button>
        {checkAnswer3 && <p className="method__answer">"Days-Of-Our-Lives"</p>}
      </section>
    </div>
  );
}

export default Split;
