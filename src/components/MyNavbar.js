import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './MyNavBar.css';
const MyNavbar = () => {
  return (
    <Navbar expand='lg'>
      <Container>
        <Navbar.Brand href='/'>
          <img
            height={40}
            src='https://media.travel.com.vn/logos/vtv-logo.jpg'
            alt=''
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='/' className='text-black navbar-text'>
              Home
            </Nav.Link>
            <Nav.Link href='/about' className='text-black navbar-text'>
              About
            </Nav.Link>
            <Nav.Link href='/contact' className='text-black navbar-text'>
              Contact
            </Nav.Link>
            <Nav.Link href='/login' className='text-black navbar-text'>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
