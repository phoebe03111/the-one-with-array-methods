import React from "react";
import { AiFillGithub } from "react-icons/ai";
import Notes from "../Notes/Notes";
import "./Instructions.scss";

const notes = [
  "1. Select an array method from the list",
  "2. Use the provided array above (friends) to complete each exercise",
  "3. Write your code in the input field (can copy the array by clicking the copy icon)",
  '4. Hit "Enter" or press "Show Answer" button to check your answer',
];

function Instruction() {
  return (
    <div className="instructions">
      <h3 className="instructions__title">Instructions</h3>

      <Notes notes={notes} />

      <p className="instructions__footer">
        Made with 💛 by {""}
        <a
          href="https://github.com/phoebe03111/the-one-with-array-methods"
          target="_blank"
          rel="noreferrer"
          className="instructions__github"
        >
          <span>Phoebe</span> <AiFillGithub />
        </a>
        {""} (not Buffay)
      </p>
    </div>
  );
}

export default Instruction;
