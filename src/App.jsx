import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Container, Nav,  Navbar, NavDropdown} from 'react-bootstrap';

import {HomePage} from './pages/Home.jsx'
import Resume from "./images/resume.png"
import Projects from './pages/Projects.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Interests from './pages/Interests.jsx'

export default function App() {

  return (
    <>
      <Router>
        <Navbar bg="light" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand href="/">Rachael Jeon's Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#resume">Resume</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="https://github.com/rachaeljeon">Github</Nav.Link>
                <Nav.Link href="#interests">Interests</Nav.Link>
                <NavDropdown title="More" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#aboutme">About Me</NavDropdown.Item>
                  <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="#resume" element={<Resume />}>
          </Route>
          <Route path="#projects" element={<Projects />}>
          </Route>
          <Route path="#interests" element={<Interests />}>
          </Route>
          <Route path="#aboutme" element={<AboutMe />}>
          </Route>
          <Route path="#contact" element={<Contact/>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}