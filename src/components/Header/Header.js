import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">
        <h1>The One With Array Methods</h1>
      </Link>
      <p>
        const friends = ['Ross', 'Rachel', "Phoebe", "Joey", "Monica",
        "Chandler"]
      </p>
    </div>
  );
}

export default Header;
