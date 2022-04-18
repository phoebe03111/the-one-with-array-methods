import React, { useState } from "react";
import Notes from "../../Notes/Notes";
import "../Push/Push.scss";
import ReturnValueSection from "../../ReturnValueSection/ReturnValueSection";

function Concat() {
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

  const handleEnter2 = (e) => {
    if (e.key === "Enter") {
      handleCheckAnswer2();
    }
  };

  const notes = [
    "Is used to merge two or more arrays",
    "Returns a new array containing the joined array",
    "Will NOT alter the original array",
  ];

  const friends = ["Rachel", "Ross", "Phoebe", "Joey", "Monica", "Chandler"];

  return (
    <div className="method__container">
      <h2 className="method__title">concat()</h2>
      <section className="method__section">
        <Notes notes={notes} />
      </section>

      <section className="method__section">
        <h3 className="method__question">
          The starwars group (const starwars = ["baby yoda"]) wants to hang out with friends cast. Let's have a
          big party!
        </h3>
        <p className="method__hint"></p>
        <input />
        <button onClick={handleCheckAnswer1}>Show answer</button>
        {checkAnswer1 && (
          <p className="method__answer">friends.concat(starwars)</p>
        )}
      </section>

      <section className="method__section">
        {/* <h3 className="method__question">What's the return value?</h3>
        <p className="method__hint">console.log(friends.concat(...))</p>
        <input />
        <button onClick={handleCheckAnswer2}>Show answer</button>
        {checkAnswer2 && (
          <p className="method__answer">
            {JSON.stringify(friends.concat(["baby yoda"]))}
          </p>
        )} */}
        <ReturnValueSection
          hint={'friends.concat("...")'}
          answer={JSON.stringify(friends.concat(["baby yoda"]))}
          handleEnter2={handleEnter2}
          handleCheckAnswer2={handleCheckAnswer2}
          checkAnswer2={checkAnswer2}
        />
      </section>

      <section className="method__section">
        <h3 className="method__question">
          How does the original array look like now?
        </h3>
        <p className="method__hint">console.log(friends)</p>
        <input />
        <button onClick={handleCheckAnswer3}>Show answer</button>
        {checkAnswer3 && (
          <p className="method__answer">{JSON.stringify(friends)}</p>
        )}
      </section>
    </div>
  );
}

export default Concat;
