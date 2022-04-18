import React, { useState } from "react";
import ArraySection from "../../ArraySection/ArraySection";
import Notes from "../../Notes/Notes";
import QuestionSection from "../../QuestionSection/QuestionSection";
import ReturnValueSection from "../../ReturnValueSection/ReturnValueSection";
import "../Push/Push.scss";

function Split() {
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
    "It's a string method that splits a string into an array of substrings",
    "Returns a new array",
    "Will NOT alter the original array",
  ];

  const friends = ["Rachel", "Ross", "Phoebe", "Joey", "Monica", "Chandler"];
  const show = "Days-Of-Our-Lives";

  return (
    <div className="method__container">
      <h2 className="method__title">split()</h2>
      <section className="method__section">
        <Notes notes={notes} />
      </section>

      <section className="method__section">
        <QuestionSection
          question={`const show = "Days-Of-Our-Lives". Can you split this string to an
          array?`}
          answer="show.split('-')"
          handleEnter1={handleEnter1}
          handleCheckAnswer1={handleCheckAnswer1}
          checkAnswer1={checkAnswer1}
        />
      </section>

      <section className="method__section">
        <ReturnValueSection
          hint="friends.split(...)"
          answer={JSON.stringify(show.split("-"))}
          handleEnter2={handleEnter2}
          handleCheckAnswer2={handleCheckAnswer2}
          checkAnswer2={checkAnswer2}
        />
      </section>

      <section className="method__section">
        <ArraySection
          answer={JSON.stringify(show)}
          handleEnter3={handleEnter3}
          handleCheckAnswer3={handleCheckAnswer3}
          checkAnswer3={checkAnswer3}
        />
      </section>
    </div>
  );
}

export default Split;
