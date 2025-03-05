import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./MyNavBar.css";
const MyNavbar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            height={40}
            src="https://media.travel.com.vn/logos/vtv-logo.jpg"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-black navbar-text">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="text-black navbar-text">
              About
            </Nav.Link>
            <Nav.Link href="#link" className="text-black navbar-text">
              Destination
            </Nav.Link>
            <Nav.Link href="#link" className="text-black navbar-text">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
