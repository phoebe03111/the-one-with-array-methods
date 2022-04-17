import React from "react";
import { Link } from "react-router-dom";
import friendsImg from "../../assets/images/friends.png";
import "./Header.scss";

function Header() {
  return (
    <header>
      <Link to="/">
        <h1 className="site-logo">
          The One With The <span className="special-font">Array Methods</span>
        </h1>
      </Link>

      <span className="friends-statement">
        const{" "}
        <img
          src={friendsImg}
          alt="friends"
          className="friends-statement__img"
        />{" "}
        = ['Ross', 'Rachel', "Phoebe", "Joey", "Monica", "Chandler"]{" "}
      </span>
    </header>
  );
}

export default Header;
