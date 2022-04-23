import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="fixed-top">
      <Container>
        <Navbar.Brand  >
          <NavLink  className="text-danger fw-bold text-decoration-none" to={'/'}>Red Onion</NavLink> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavLink to="/additems" className='text-secondary mx-3 text-decoration-none fw-bold mt-1'>Add Item</NavLink>
            <NavLink to="/cart" className='text-secondary mx-3 text-decoration-none fw-bold mt-1'>Cart</NavLink>
            <NavLink to="/login"  className='text-secondary mx-3 text-decoration-none fw-bold mt-1'>Login</NavLink>
          
              <NavLink to={'/signup'}><Button variant="danger rounded-pill">Signup</Button></NavLink>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
