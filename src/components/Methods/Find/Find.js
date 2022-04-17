import React, { useState } from "react";
import "../Push/Push.scss";

function Find() {
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
      <h2 className="method__title">find()</h2>
      <section className="method__section">
        <p>
          - Returns the <strong>FIRST</strong> element in the array that
          satisfies the provided testing function
        </p>
        <p>(- Returns undefined if no values satisfy the testing function)</p>
        <p>- Will NOT alter the original array</p>
      </section>

      <section className="method__section">
        <h3 className="method__question">
          There's a hot girl looking for her boyfriend whose name starts with
          "J". Let's find out who's the lucky guy?
        </h3>
        <input />
        <button onClick={handleCheckAnswer1}>Show answer</button>
        {checkAnswer1 && (
          <p className="method__answer">
            friends.find(person ={">"} person[0] === 'J')
          </p>
        )}
      </section>

      <section className="method__section">
        <h3 className="method__question">What's the return value?</h3>
        <p className="method__hint">console.log(friends.find(...))</p>
        <input />
        <button onClick={handleCheckAnswer2}>Show answer</button>
        {checkAnswer2 && <p className="method__answer">"Joey"</p>}
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

export default Find;
