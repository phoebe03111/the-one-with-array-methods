import React, { useState } from "react";
import ArraySection from "../../ArraySection/ArraySection";
import Notes from "../../Notes/Notes";
import QuestionSection from "../../QuestionSection/QuestionSection";
import ReturnValueSection from "../../ReturnValueSection/ReturnValueSection";
import "../Push/Push.scss";

function ForEach() {
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
    "Performs a callback function on each item",
    "Does NOT return anything (the only difference with map() method!)",
    "Will NOT alter the original array",
  ];

  const friends = ["Rachel", "Ross", "Phoebe", "Joey", "Monica", "Chandler"];

  return (
    <div className="method__container">
      <h2 className="method__title">forEach()</h2>
      <section className="method__section">
        <Notes notes={notes} />
      </section>

      <section className="method__section">
        {/* <h3 className="method__question">
          Who doesn't love to be a Geller? Let's add a lastname "Geller" to each
          person in the array.
        </h3>
        <input />
        <button onClick={handleCheckAnswer1}>Show answer</button>
        {checkAnswer1 && (
          <p className="method__answer">
            friends.forEach(person => person += ' Geller')
          </p>
        )} */}
        <QuestionSection
          question={`Who doesn't love to be a Geller? Let's add a lastname "Geller" to each
          person in the array.`}
          answer="friends.forEach(person => person += ' Geller')"
          handleEnter1={handleEnter1}
          handleCheckAnswer1={handleCheckAnswer1}
          checkAnswer1={checkAnswer1}
        />
      </section>

      <section className="method__section">
        <ReturnValueSection
          hint='friends.forEach("...")'
          answer={
            JSON.stringify(
              friends.forEach((person) => (person += " Geller"))
            ) || "undefined"
          }
          handleEnter2={handleEnter2}
          handleCheckAnswer2={handleCheckAnswer2}
          checkAnswer2={checkAnswer2}
        />
      </section>

      <section className="method__section">
        <ArraySection
          answer={JSON.stringify(friends)}
          handleEnter3={handleEnter3}
          handleCheckAnswer3={handleCheckAnswer3}
          checkAnswer3={checkAnswer3}
        />
      </section>
    </div>
  );
}

export default ForEach;
