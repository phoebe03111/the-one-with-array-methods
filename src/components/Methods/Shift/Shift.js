import React, { useState } from "react";
import Notes from "../../Notes/Notes";
import "../Push/Push.scss";

function Shift() {
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
    "Removes the first element from an array",
    "Returns the removed element",
    "Will alter the original array",
  ];

  return (
    <div className="method__container">
      <h2 className="method__title">shift()</h2>
      <section className="method__section">
        <Notes notes={notes} />
      </section>

      <section className="method__section">
        <h3 className="method__question">
          Rachel is going for the Ralph Lauren fashion show tonight. Remove her
          from the array!
        </h3>
        <input />
        <button onClick={handleCheckAnswer1}>Show answer</button>
        {checkAnswer1 && <p className="method__answer">friends.shift()</p>}
      </section>

      <section className="method__section">
        <h3 className="method__question">What's the return value?</h3>
        <p className="method__hint">console.log(friends.shift())</p>
        <input />
        <button onClick={handleCheckAnswer2}>Show answer</button>
        {checkAnswer2 && <p className="method__answer">"Rachel"</p>}
      </section>

      <section className="method__section">
        <h3 className="method__question">How does the array look like now?</h3>
        <p className="method__hint">console.log(friends)</p>
        <input />
        <button onClick={handleCheckAnswer3}>Show answer</button>
        {checkAnswer3 && (
          <p className="method__answer">
            ["Ross", "Phoebe", "Joey", "Monica", "Chandler"]
          </p>
        )}
      </section>
    </div>
  );
}

export default Shift;
