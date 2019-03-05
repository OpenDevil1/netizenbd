import { Button, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import Logo from "../assets/netizen-logo.png";
import "./navigationbar.css"

class App extends Component {
    render() {
      return (
        <Navbar expand="lg">
        <Navbar.Brand href="/"><img src={Logo} alt="Netizen Logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#/about">About Us</Nav.Link>
            <Nav.Link href="#/services">Our Services</Nav.Link>
            <Nav.Link href="#/contact">Contact Us</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
      );
    }
  }
  
  export default App;
  