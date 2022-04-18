import React, { useState } from "react";
import ArraySection from "../../ArraySection/ArraySection";
import Notes from "../../Notes/Notes";
import QuestionSection from "../../QuestionSection/QuestionSection";
import ReturnValueSection from "../../ReturnValueSection/ReturnValueSection";
import "../Push/Push.scss";

function FindIndex() {
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
    "Returns the index of the FIRST element in the array that satisfies the provided testing function",
    "Returns -1 if no values satisfy the testing function",
    "Will NOT alter the original array",
  ];

  const friends = ["Rachel", "Ross", "Phoebe", "Joey", "Monica", "Chandler"];

  return (
    <div className="method__container">
      <h2 className="method__title">findIndex()</h2>
      <section className="method__section">
        <Notes notes={notes} />
      </section>

      <section className="method__section">
        {/* <h3 className="method__question">
          Let's look for the index of a person who has an 'z' in their names!
        </h3>
        <input />
        <button onClick={handleCheckAnswer1}>Show answer</button>
        {checkAnswer1 && (
          <p className="method__answer">
            friends.findIndex(person => person.includes('z'))
          </p>
        )} */}
        <QuestionSection
          question={`Let's look for the index of a person who has an 'z' in their names!`}
          answer="friends.findIndex(person => person.includes('z'))"
          handleEnter1={handleEnter1}
          handleCheckAnswer1={handleCheckAnswer1}
          checkAnswer1={checkAnswer1}
        />
      </section>

      <section className="method__section">
        <ReturnValueSection
          hint='friends.findIndex("...")'
          answer={JSON.stringify(
            friends.findIndex((person) => person.includes("z"))
          )}
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

export default FindIndex;
