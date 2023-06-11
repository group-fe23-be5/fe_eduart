import React from 'react';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import './Navigation.css'
import { NavLink } from 'react-router-dom'

function NavigationIn() {
  return (
    <>
        <Navbar expand="lg">
          <Container className="nav-container">
              <Navbar.Brand href="#home">
                <img src="/src/assets/logo_eduart.png" alt="Logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="menu-tengah">
                  <NavLink  to="/" className="nav-link" id="nav-menu" >Home</NavLink>
                  <NavLink to="/course" className="nav-link" id="nav-menu" >Course</NavLink>
                  <NavLink to="/mentor" className="nav-link" id="nav-menu" >Mentor</NavLink>
                  <NavLink to="/article" className="nav-link"  id="nav-menu">Article</NavLink>
                </Nav>
                <Nav className="menu-kanan">
                  <NavDropdown title="Welcome reonaldisaputra" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
                  </NavDropdown>
                  <img src="/src/assets/icon-profile.png" alt="" />
                </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
}

export default NavigationIn;