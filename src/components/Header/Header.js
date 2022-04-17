import React, { useState } from "react";
import { Link } from "react-router-dom";
import friendsImg from "../../assets/images/friends.png";
import { MdContentCopy } from "react-icons/md";
import "./Header.scss";

const friends = `["Rachel", "Ross", "Phoebe", "Joey", "Monica", "Chandler"]`;

function Header() {
  const [copySuccess, setCopySuccess] = useState("");

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    setCopySuccess("Copied!");

    setTimeout(() => {
      setCopySuccess("");
    }, 1000);
  };

  return (
    <header>
      <Link to="/">
        <h1 className="site-logo">
          The One With The <span className="special-font">Array Methods</span>
        </h1>
      </Link>

      <div className="friends-code">
        <span className="friends-code__text">
          const{" "}
          <img
            src={friendsImg}
            alt="friends"
            className="friends-code__img"
          />{" "}
          = ["Rachel", "Ross", "Phoebe", "Joey", "Monica", "Chandler"]
        </span>
        <span className="copy__icon" onClick={() => copyText(friends)}>
          <MdContentCopy /> {copySuccess}
        </span>
      </div>
    </header>
  );
}

export default Header;
