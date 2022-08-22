import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Container, Nav,  Navbar, NavDropdown} from 'react-bootstrap';

import {HomePage} from './client/Home.jsx'
import {Resume} from './client/Resume.jsx'
import {Projects} from './client/Projects.jsx'
import {Github} from './client/Github.jsx'
import {AboutMe} from './client/AboutMe.jsx'
import {Contact} from './client/Contact'
import {MainPage} from './client/MainPage'
import {Interests} from './client/Interests'

let url = 'http://localhost:5000' // backend is running on 8000

function App() {
  return (
    <>
    <p></p>
    <Router>
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">Rachael Jeon's Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {/* <Nav.Link href="/home">Home</Nav.Link> */}
            <Nav.Link href="/resume">Resume</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="https://github.com/Rachaelj99">Github</Nav.Link>
            <Nav.Link href="/interests">Interests</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="/aboutme">About Me</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Routes>
        <Route path="/" element={MainPage()}>
        </Route>
        {/* <Route path="/home" element={HomePage()}>
        </Route> */}
        <Route path="/resume" element={Resume()}>
        </Route>
        <Route path="/projects" element={Projects()}>
        </Route>
        <Route path="/github" element={Github()}>
        </Route>
        <Route path="/interests" element={Interests()}>
        </Route>
        <Route path="/aboutme" element={AboutMe()}>
        </Route>
        <Route path="/contact" element={<Contact url={url}/>}>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;