import React, { useState } from "react";
import "./Push.scss";

function Push() {
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
      <h2 className="method__title">push()</h2>
      <section className="method__section">
        <p>- Adds element(s) to the end of an array</p>
        <p>- Will alter the original array</p>
        <p>- Returns the length of the new array</p>
      </section>

      <section className="method__section">
        <h3 className="method__question">Janice wants to join the friends squad, add her to the array</h3>
        <input />
        <button onClick={handleCheckAnswer1}>Check answer</button>
        {checkAnswer1 && <p className="answer">friends.push("Janice")</p>}
      </section>

      <section className="method__section">
        <h3 className="method__question">What's the return value?</h3>
        <p>console.log(friends.push("Janice"))</p>
        <input />
        <button onClick={handleCheckAnswer2}>Check answer</button>
        {checkAnswer2 && <p className="answer">"Janice"</p>}
      </section>

      <section className="method__section">
        <h3 className="method__question">How does the array look like now?</h3>
        <p>console.log(friends)</p>
        <input />
        <button onClick={handleCheckAnswer3}>Check answer</button>
        {checkAnswer3 && (
          <p className="answer">
            ['Ross', 'Rachel', "Phoebe", "Joey", "Monica", "Chandler", "Janice"]
          </p>
        )}
      </section>
    </>
  );
}

export default Push;
