import React, { useState } from "react";
import Notes from "../../Notes/Notes";
import "../Push/Push.scss";

function Reverse() {
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
    "Reverses the order of the elements in an array",
    "Returns the reversed array",
    "Will alter the original array",
  ];

  return (
    <div className="method__container">
      <h2 className="method__title">reverse()</h2>
      <section className="method__section">
        <Notes notes={notes} />
      </section>

      <section className="method__section">
        <h3 className="method__question">
          Rachel and Ross are fighting again ("WE WERE ON A BREAK!!!"). 🙄
          Reverse the order and move them to the end of the array.
        </h3>
        <input />
        <button onClick={handleCheckAnswer1}>Show answer</button>
        {checkAnswer1 && <p className="method__answer">friends.reverse()</p>}
      </section>

      <section className="method__section">
        <h3 className="method__question">What's the return value?</h3>
        <p className="method__hint">console.log(friends.reverse())</p>
        <input />
        <button onClick={handleCheckAnswer2}>Show answer</button>
        {checkAnswer2 && (
          <p className="method__answer">
            ['Chandler', 'Monica', 'Joey', 'Phoebe', 'Ross', 'Rachel']
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
            ['Chandler', 'Monica', 'Joey', 'Phoebe', 'Ross', 'Rachel']
          </p>
        )}
      </section>
    </div>
  );
}

export default Reverse;
