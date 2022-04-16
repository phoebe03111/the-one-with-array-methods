import React from "react";
import { Link } from "react-router-dom";
import friendsImg from "../../assets/images/friends.png";
import "./Header.scss";

function Header() {
  return (
    <header>
      <Link to="/">
        <h1 className="site-logo">
          The One With The <span className="friends-font">Array Methods</span>
        </h1>
      </Link>
      <div className="friends-statement">
        <p className="friends-statement__left">
          const{" "}
          <img
            src={friendsImg}
            alt="friends"
            className="friends-statement__img"
          />{" "}
          =
        </p>
        <p> ['Ross', 'Rachel', "Phoebe", "Joey", "Monica", "Chandler"] </p>
      </div>
    </header>
  );
}

export default Header;
