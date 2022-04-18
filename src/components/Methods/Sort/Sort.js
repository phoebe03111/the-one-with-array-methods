import React, { useState } from "react";
import ArraySection from "../../ArraySection/ArraySection";
import Notes from "../../Notes/Notes";
import QuestionSection from "../../QuestionSection/QuestionSection";
import ReturnValueSection from "../../ReturnValueSection/ReturnValueSection";
import "../Push/Push.scss";

function Sort() {
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
    "By default, the sort() function sorts values as strings and the order is ascending",
    "To sort numbers, we can provide a compare function((a,b) => a-b); we can also use it to sort an array descending",
    "Returns the sorted array",
    "Will alter the original array",
  ];

  const friends = ["Rachel", "Ross", "Phoebe", "Joey", "Monica", "Chandler"];

  return (
    <div className="method__container">
      <h2 className="method__title">sort()</h2>
      <section className="method__section">
        <Notes notes={notes} />
      </section>

      <section className="method__section">
        {/* <h3 className="method__question">
          Let's sort the array in a ascending order.
        </h3>
        <input />
        <button onClick={handleCheckAnswer1}>Show answer</button>
        {checkAnswer1 && <p className="method__answer">friends.sort()</p>} */}
        <QuestionSection
          question="Let's sort the array in a ascending order."
          answer="friends.sort()"
          handleEnter1={handleEnter1}
          handleCheckAnswer1={handleCheckAnswer1}
          checkAnswer1={checkAnswer1}
        />
      </section>

      <section className="method__section">
        {/* <h3 className="method__question">What's the return value?</h3>
        <p className="method__hint">console.log(friends.sort())</p>
        <input />
        <button onClick={handleCheckAnswer2}>Show answer</button>
        {checkAnswer2 && (
          <p className="method__answer">
            ['Chandler', 'Joey', 'Monica', 'Phoebe', 'Rachel', 'Ross']
          </p>
        )} */}
        <ReturnValueSection
          hint={"friends.sort()"}
          answer={JSON.stringify(friends.sort())}
          handleEnter2={handleEnter2}
          handleCheckAnswer2={handleCheckAnswer2}
          checkAnswer2={checkAnswer2}
        />
      </section>

      <section className="method__section">
        {/* <h3 className="method__question">How does the array look like now?</h3>
        <p className="method__hint">console.log(friends)</p>
        <input />
        <button onClick={handleCheckAnswer3}>Show answer</button>
        {checkAnswer3 && (
          <p className="method__answer">
            ['Chandler', 'Joey', 'Monica', 'Phoebe', 'Rachel', 'Ross']
          </p>
        )} */}
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

export default Sort;
