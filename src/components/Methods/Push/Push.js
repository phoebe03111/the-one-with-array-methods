import React, { useState } from "react";
import Notes from "../../Notes/Notes";
import "./Push.scss";

function Push() {
  const [checkAnswer1, setCheckAnswer1] = useState(false);
  const [checkAnswer2, setCheckAnswer2] = useState(false);
  const [checkAnswer3, setCheckAnswer3] = useState(false);

  // 1st way to show answer: click the button
  const handleCheckAnswer1 = () => {
    setCheckAnswer1((prev) => !prev);
  };

  const handleCheckAnswer2 = () => {
    setCheckAnswer2((prev) => !prev);
  };

  const handleCheckAnswer3 = () => {
    setCheckAnswer3((prev) => !prev);
  };

  // 2nd way to show answer: hit "Enter"
  const handleEnter1 = (e) => {
    if (e.key === "Enter") {
      handleCheckAnswer1();
    }
  };

  const handleEnter2 = (e) => {
    if (e.key === "Enter") {
      handleCheckAnswer2();
    }
  };

  const handleEnter3 = (e) => {
    if (e.key === "Enter") {
      handleCheckAnswer3();
    }
  };

  const notes = [
    "Adds element(s) to the end of an array",
    "Returns the length of the new array",
    "Will alter the original array",
  ];

  return (
    <div className="method__container">
      <h2 className="method__title">push()</h2>
      <section className="method__section">
        <Notes notes={notes} />
      </section>

      <section className="method__section">
        <h3 className="method__question">
          Janice wants to join the friends squad, add her to the end of the
          array!
        </h3>
        <input onKeyDown={handleEnter1} />
        <button onClick={handleCheckAnswer1}>Show answer</button>
        {checkAnswer1 && (
          <p className="method__answer">friends.push("Janice")</p>
        )}
      </section>

      <section className="method__section">
        <h3 className="method__question">What's the return value?</h3>
        <p className="method__hint">console.log(friends.push("Janice"))</p>
        <input onKeyDown={handleEnter2} />
        <button onClick={handleCheckAnswer2}>Show answer</button>
        {checkAnswer2 && <p className="method__answer">7</p>}
      </section>

      <section className="method__section">
        <h3 className="method__question">How does the array look like now?</h3>
        <p className="method__hint">console.log(friends)</p>
        <input onKeyDown={handleEnter3} />
        <button onClick={handleCheckAnswer3}>Show answer</button>
        {checkAnswer3 && (
          <p className="method__answer">
            ["Rachel", "Ross", "Phoebe", "Joey", "Monica", "Chandler", "Janice"]
          </p>
        )}
      </section>
    </div>
  );
}

export default Push;
