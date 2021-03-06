import React from "react";
import "./Notes.scss";

function Notes({ notes }) {
  return (
    <ul className="method__intro">
      {notes.map((note, index) => (
        <li key={note + index}>{note}</li>
      ))}
    </ul>
  );
}

export default Notes;
