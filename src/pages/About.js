import React, { Component } from 'react';
import {Jumbotron, Container, Row, Col, Button, Card} from "react-bootstrap";

class About extends Component {
    render() {
      return (
        <div className="home-container">
            <Container>
                <Row style={{padding: '20px 0'}}>
                    <Col xs={12} style={{textAlign: 'center', fontSize: '30px', fontWeight: 'bold', padding: '10px 0'}}>
                        <p>About our human resources</p>
                    </Col>
                    <Col xs={6}>
                        <p style={{fontSize: '20px', fontWeight: 'bold'}}>At Head Office</p>
                        <p>12 Programmers, 15 Customer support executives & 9 people are working in general administration. 
                            The total number of resource 36 in head office, all are full time & 7 consultants are working with us.</p>
                    </Col>
                    <Col xs={6}>
                        <p style={{fontSize: '20px', fontWeight: 'bold'}}>Around the country</p>
                        <p>700 people are full time working as sales & local support team member. 
                            They are communicating with local prospects, clients, administrative personnel & any other stockholders.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{textAlign: 'center'}}>
                        <p style={{fontSize: '40px', fontWeight: 'bolder', padding: '20px 0', color: '#001f3f'}}>Members Of</p>
                    </Col>
                    <Col xs={12}>
                    <ul className="trusted-by">
                        <li><img src="https://netizenbd.com/_files/200000296-0cf4b0de50/450/Basis.png" style={{width: '20vw'}} alt="basis"></img></li>
                        <li><img src="https://netizenbd.com/_files/200000297-d407fd4ff2/450/BCS%20(2).png" style={{width: '20vw'}} alt="bcs"></img></li>
                        <li><img src="https://netizenbd.com/_files/200000298-9b30b9c221/450/e-Cab.png" style={{width: '20vw'}} alt="e-commerce association of bangladesh"></img></li>
                    </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{textAlign: 'center'}}>
                        <p style={{fontSize: '40px', fontWeight: 'bolder', padding: '20px 0', color: '#001f3f'}}>Our Expertise on</p>
                    </Col>
                    <Col xs={3}>
                        <img src="https://netizenbd.com/_files/200000170-3fc0540b8e/450/Slide1-5.PNG" style={{width: '20vw'}} alt="java"></img>
                    </Col>
                    <Col xs={3}>
                        <img src="https://netizenbd.com/_files/200000171-a90aaa9fff/450/Slide2-0.PNG" style={{width: '20vw'}} alt="spring"></img>
                    </Col>
                    <Col xs={3}>
                        <img src="https://netizenbd.com/_files/200000172-eb5d8ec595/450/Slide3-1.PNG" style={{width: '20vw'}} alt="hibernate"></img>
                    </Col>
                    <Col xs={3}>
                        <img src="https://netizenbd.com/_files/200000173-899828a8d3/450/Slide4-8.PNG" style={{width: '20vw'}} alt="oracle"></img>
                    </Col>
                    <Col xs={3}>
                        <img src="https://netizenbd.com/_files/200000174-626f0636e4/450/Slide5-2.PNG" style={{width: '20vw'}} alt="mysql"></img>
                    </Col>
                    <Col xs={3}>
                        <img src="https://netizenbd.com/_files/200000176-bc16cbcc04/450/Slide7-9.PNG" style={{width: '20vw'}} alt="java server faces"></img>
                    </Col>
                    <Col xs={3}>
                        <img src="https://netizenbd.com/_files/200000177-7f1be801e7/450/Slide8-8.PNG" style={{width: '20vw'}} alt="prime faces"></img>
                    </Col>
                    <Col xs={3}>
                        <img src="https://netizenbd.com/_files/200000179-8fb7190c1a/450/Slide10.PNG" style={{width: '20vw'}} alt="react js"></img>
                    </Col>
                    <Col xs={3}>
                        <img src="https://netizenbd.com/_files/200000183-0779f0874a/450/Slide14.PNG" style={{width: '20vw'}} alt="amazon web services"></img>
                    </Col>
                    <Col xs={3}>
                        <img src="https://netizenbd.com/_files/200000185-db19edc16e/450/Slide16.PNG" style={{width: '20vw'}} alt="redis"></img>
                    </Col>
                    <Col xs={3}>
                        <img src="https://netizenbd.com/_files/200000186-8dd468ecfe/450/Slide17.PNG" style={{width: '20vw'}} alt="docker"></img>
                    </Col>
                    <Col xs={3}>
                        <img src="https://netizenbd.com/_files/200000187-5ddbd5ed91/450/Slide18.PNG" style={{width: '20vw'}} alt="jenkins"></img>
                    </Col>
                </Row>
            </Container>
           
        </div>
      );
    }
  }
  
  export default About;
  