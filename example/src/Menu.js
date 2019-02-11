import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

function Menu() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand href="/react-doc-title/">react-doc-title</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Link to="/react-doc-title/">Home</Link> -<Link to="/react-doc-title/about">About</Link> -
        <Link to="/react-doc-title/about/contact">Contact</Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
