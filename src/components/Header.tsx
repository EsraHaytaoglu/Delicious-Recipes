
import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css"

function Header() {
  return (
    <React.Fragment>
    <header>
    <div className="overlay">
  <div className="baslik"></div>
  <div>
  <div className="quote"> "I was 32 when I started cooking; up until then, I just ate."</div>
  <span className="julia">Julia Child</span>
  </div>
      </div>

  </header>
        <nav className="navMenu">
        <a href="#">Fav List</a>
        <div className="dot"></div>
      </nav>
      </React.Fragment>
  );
}

export default Header;
