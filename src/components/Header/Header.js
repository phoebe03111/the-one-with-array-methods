import React from "react";
import { Link } from "react-router-dom";
import friendsImg from "../../assets/images/friends.png";
import "./Header.scss";

function Header() {
  return (
    <div>
      <Link to="/">
        <h1>The One With The Array Methods</h1>
      </Link>
      <p className="friends__statement">
        const <img src={friendsImg} alt="friends" className="friends__img" /> =
        ['Ross', 'Rachel', "Phoebe", "Joey", "Monica", "Chandler"]
      </p>
    </div>
  );
}

export default Header;
