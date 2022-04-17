import React, { useState } from "react";
import "../Push/Push.scss";

function Sort() {
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
      <h2 className="method__title">sort()</h2>
      <section className="method__section">
        <p>
          - By default, the sort() function sorts values as strings and the
          order is ascending
        </p>
        <p>
          - To sort numbers, we can provide a <strong>compare function</strong>{" "}
          ((a,b) ={">"}
          a-b); we can also use it to sort an array descending
        </p>
        <p>- Returns the sorted array</p>
        <p>- Will alter the original array</p>
      </section>

      <section className="method__section">
        <h3 className="method__question">
          Let's sort the array in a ascending order.
        </h3>
        <input />
        <button onClick={handleCheckAnswer1}>Show answer</button>
        {checkAnswer1 && <p className="method__answer">friends.sort()</p>}
      </section>

      <section className="method__section">
        <h3 className="method__question">What's the return value?</h3>
        <p className="method__hint">console.log(friends.sort())</p>
        <input />
        <button onClick={handleCheckAnswer2}>Show answer</button>
        {checkAnswer2 && (
          <p className="method__answer">
            ['Chandler', 'Joey', 'Monica', 'Phoebe', 'Rachel', 'Ross']
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
            ['Chandler', 'Joey', 'Monica', 'Phoebe', 'Rachel', 'Ross']
          </p>
        )}
      </section>
    </div>
  );
}

export default Sort;
