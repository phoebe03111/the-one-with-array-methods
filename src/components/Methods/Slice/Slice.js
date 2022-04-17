import React, { useState } from "react";
import "../Push/Push.scss";

function Slice() {
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
      <h2 className="method__title">slice()</h2>
      <section className="method__section">
        <p className="method__hint">
          -<strong>slice(startIndex, endIndex)</strong>
        </p>
        <p>
          - Makes a copy of the array from startIndex (inclusive) to endIndex
          (exclusive). If endIndex is not specified, it wll copy to the last
          index of the array
        </p>
        <p>- Returns a "selection of array" from startIndex to endIndex</p>
        <p>- Will NOT alter the original array</p>
      </section>

      <section className="method__section">
        <h3 className="method__question">
          I'LL BE THERE FOR YOU~ Can you make a copy of the friends array?
        </h3>
        <input />
        <button onClick={handleCheckAnswer1}>Show answer</button>
        {checkAnswer1 && <p className="method__answer">friends.slice()</p>}
      </section>

      <section className="method__section">
        <h3 className="method__question">What's the return value?</h3>
        <p className="method__hint">console.log(friends.slice())</p>
        <input />
        <button onClick={handleCheckAnswer2}>Show answer</button>
        {checkAnswer2 && (
          <p className="method__answer">
            ["Rachel", "Ross", "Phoebe", "Joey", "Monica", "Chandler"]
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

export default Slice;
