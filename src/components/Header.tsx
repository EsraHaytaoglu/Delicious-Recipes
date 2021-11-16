
import React from "react";
import { BsSuitHeartFill, BsPlusSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

import "../css/header.css"

function Header() {
  return (
    <React.Fragment>
    <header>
    <div className="overlay d-none d-lg-block">
  <div className="baslik"></div>
  <div>
  <div className="quote"> "I was 32 when I started cooking; up until then, I just ate."</div>
  <span className="julia">Julia Child</span>
  </div>
      </div>

  </header>
        <nav className="navMenu mb-2 ">
        <Link to="/favs"><div className="mr-5"> <BsSuitHeartFill /> Fav List   </div></Link>
        <div className="dot"></div>
        <Link to="/add"><div> <BsPlusSquare /> Add a Recipe  </div></Link>
        <div className="dot"></div>
      </nav>
      </React.Fragment>
  );
}

export default Header;
