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
      <p>will add element(s) to the end of an array</p>
      <p>will alter the original array</p>
      <p>and will return the length of the new array</p>

      <input />
      <button onClick={handleCheckAnswer1}>Check answer</button>
      {checkAnswer1 && <p>friends.push("Janice")</p>}
      <h3>What's the return value?</h3>
      <p>console.log(friends.push("Janice"))</p>
      <input />
      <button onClick={handleCheckAnswer2}>Check answer</button>
      {checkAnswer2 && <p>"Janice"</p>}

      <h3>How does the array look like now?</h3>
      <p>console.log(friends)</p>
      <input />
      <button onClick={handleCheckAnswer3}>Check answer</button>
      {checkAnswer3 && (
        <p>
          ['Ross', 'Rachel', "Phoebe", "Joey", "Monica", "Chandler", "Janice"]
        </p>
      )}
    </>
  );
}

export default Push;
