/* eslint-disable react/jsx-no-undef */

import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function CustomNavbar() {
  
  const navigate = useNavigate();

  const handleLogout =  () => {
    try {
      // Perform logout actions, e.g., clearing local storage, redirecting to login page, etc.
      //localStorage.removeItem("token");
      console.log("logged out")
      navigate("/login");
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand as={Link} to="#home">
            Hero
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/aboutus">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contactus">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/service">
              Service
            </Nav.Link>
            <Nav.Link as={Link} to="/spare">
              Spare's
            </Nav.Link>
            <Nav.Link as={Link} to="/price">
              Service cost
            </Nav.Link>
          </Nav>
          
          <Nav>
            <Button
              className="ml-md-auto"
              variant="outline-primary"
              onClick={() => {handleLogout()}}
            >
              Log out
            </Button>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
