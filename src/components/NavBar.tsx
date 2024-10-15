import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          BigXthaPlug
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ borderColor: "#f58341" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Me
            </Nav.Link>
            <NavDropdown title="Projects + Contact" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Projects</NavDropdown.Item>
              <NavDropdown.Item href="https://www.instagram.com/bigxthaplug/">
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item href="https://twitter.com/x/migrate?tok=7b2265223a222f42696758746861506c7567672f7374617475732f31363732363934303438363032333333313835222c2274223a313732383932383037397d40bcb630be7cca1196e26537203ac9cd">
                Twitter
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contact">Contact Me!</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
