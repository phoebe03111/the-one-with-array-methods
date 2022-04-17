import React, { useState } from "react";
import Notes from "../../Notes/Notes";
import "../Push/Push.scss";

function ToString() {
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
    "Returns a new string representing the elements of an array",
    "Will NOT alter the original array",
  ];

  return (
    <div className="method__container">
      <h2 className="method__title">toString()</h2>
      <section className="method__section">
        <Notes notes={notes} />
      </section>

      <section className="method__section">
        <h3 className="method__question">
          Join each friend member into a big string
        </h3>
        <input />
        <button onClick={handleCheckAnswer1}>Show answer</button>
        {checkAnswer1 && <p className="method__answer">friends.toString()</p>}
      </section>

      <section className="method__section">
        <h3 className="method__question">What's the return value?</h3>
        <p className="method__hint">console.log(friends.toString(...))</p>
        <input />
        <button onClick={handleCheckAnswer2}>Show answer</button>
        {checkAnswer2 && (
          <p className="method__answer">
            "Rachel,Ross,Phoebe,Joey,Monica,Chandler"
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
            ["Rachel", "Ross", "Phoebe", "Joey", "Monica", "Chandler"]
          </p>
        )}
      </section>
    </div>
  );
}

export default ToString;
