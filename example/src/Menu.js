import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Menu() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand href="/react-doc-title/">react-doc-title</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <LinkContainer to="/react-doc-title">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/react-doc-title/reactive">
          <Nav.Link>Reactive</Nav.Link>
        </LinkContainer>
        <NavDropdown title="About">
          <LinkContainer exact to="/react-doc-title/about">
            <NavDropdown.Item>About us</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer exact to="/react-doc-title/about/contact">
            <NavDropdown.Item>Contact</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu
