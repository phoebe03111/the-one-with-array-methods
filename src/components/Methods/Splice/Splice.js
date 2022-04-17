import React, { useState } from "react";
import Notes from "../../Notes/Notes";
import "../Push/Push.scss";

function Splice() {
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
    "Changes the content of an array by removing or replacing existing elements, and/or adding new elements in place",
    "Returns an array containing the added element / removed element, or an empty array if nothing is removed",
    "Will alter the original array",
  ];

  return (
    <div className="method__container">
      <h2 className="method__title">splice()</h2>
      <section className="method__section">
        <Notes notes={notes} />
      </section>

      <section className="method__section">
        <h3 className="method__question">
          Phoebe is going to Central Perk to sing "smelly cat" today. Remove her
          from the array so she can go practice!
        </h3>
        <input />
        <button onClick={handleCheckAnswer1}>Show answer</button>
        {checkAnswer1 && <p className="method__answer">friends.splice(2,1)</p>}
      </section>

      <section className="method__section">
        <h3 className="method__question">What's the return value?</h3>
        <p className="method__hint">console.log(friends.splice(2,1))</p>
        <input />
        <button onClick={handleCheckAnswer2}>Show answer</button>
        {checkAnswer2 && <p className="method__answer">["Phoebe"]</p>}
      </section>

      <section className="method__section">
        <h3 className="method__question">How does the array look like now?</h3>
        <p className="method__hint">console.log(friends)</p>
        <input />
        <button onClick={handleCheckAnswer3}>Show answer</button>
        {checkAnswer3 && (
          <p className="method__answer">
            ["Rachel", "Ross", "Joey", "Monica", "Chandler"]
          </p>
        )}
      </section>
    </div>
  );
}

export default Splice;
