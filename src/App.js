import React, { Component } from 'react';
import {Jumbotron, Container, Row, Col, Button, Card} from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from './components/NavigationBar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Services from './pages/Services.js';
import Contact from './pages/Contact.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
        <div>
          <NavBar/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/Contact" component={Contact} />
          <Footer/>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
