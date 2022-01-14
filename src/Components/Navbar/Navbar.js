import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'; 

const navbar = () =>{
  return (
    <div>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">QA Plattform</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Sign Up</Nav.Link>
        <Nav.Link href="/createQuestion">Create Question</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
}
export default navbar;