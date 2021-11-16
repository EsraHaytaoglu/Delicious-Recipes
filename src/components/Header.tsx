
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BsSuitHeartFill, BsPlusSquare } from "react-icons/bs";

import "../css/header.css"

function Header() {
  return (
    <Navbar className="menu" variant="dark">
    <Container>
    <Navbar.Brand href="/">Delicious Recipes</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/favs">Favorite List</Nav.Link>
      <Nav.Link href="/add">Add a Recipe</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}

export default Header;
