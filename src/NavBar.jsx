import React from "react"
import { Link } from "react-router-dom"
import {Container, Nav,  Navbar, NavDropdown} from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand href="/">Rachael Jeon's Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                <Nav.Link href="https://github.com/rachaeljeon">Github</Nav.Link>
                <Nav.Link as={Link} to="/interests">Interests</Nav.Link>
                <NavDropdown title="More" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/aboutme">About Me</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}