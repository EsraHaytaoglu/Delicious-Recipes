import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BsMoon, BsSun } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";

import "../css/header.css";

function Header() {
  const [dark, setDark] = useState(true);
  const tema = () => {
    if(dark === true) {
      setDark(false)
    }else {
      setDark(true)
    }
    document.body.classList.toggle('light');
   
  }
  return (
    <Navbar collapseOnSelect className="menu"   expand="lg" variant={dark ? "dark" : "light" }>
      <Container fluid>
        <Navbar.Brand href="/" className="ml-5 text">
          Delicious Recipes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/favs">Favorite List</Nav.Link>
            <Nav.Link href="/add"><MdAddCircleOutline size={20}  /> Add a Recipe</Nav.Link>
          </Nav>
          <Nav className="d-flex mr-5">
            <div className="one-quarter " id="switch">
              <input type="checkbox" className="checkbox" id="chk" onChange={tema} />
              <label className="label" htmlFor="chk">
                <BsMoon />
                <BsSun />
                <div className="ball"></div>
              </label>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
