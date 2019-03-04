import React, { Component } from 'react';
import {Jumbotron, Container, Row, Col, Button, Card} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab)

class Footer extends Component {
  render() {
    return (
      <footer style={{textAlign: "center"}}>
        <Container style={{padding: '20px'}}>
          <Row>
            <Col xs={12} sm={4} className="company-container">
              <p className="footer-title">Company</p>
              <p><a href="#">About Us</a></p>
              <p><a href="#">Terms of Service</a></p>
              <p><a href="#">Privacy Policy</a></p>
            </Col>
            <Col xs={12} sm={4}>
              <p className="footer-title">Social Media</p>
              <ul className="social-icons">
                  <li><a href="#"><FontAwesomeIcon icon={["fab", "facebook-square"]}/></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={["fab", "twitter-square"]}/></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={["fab", "instagram"]}/></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={["fab", "linkedin"]}/></a></li>
              </ul>
              
            </Col>
            <Col xs={12} sm={4}>
              <p className="footer-title">Contact</p>
              <p>
                Netizen IT Limited
                House# B-172, Road #23, Mohakhali DOHS, Dhaka-1206, Bangladesh.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="copyright">
              <p>Copyright: 2019 Netizen IT Limited. Powered by Netizen IT Limited</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
