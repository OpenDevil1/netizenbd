import React, { Component } from 'react';
import {Jumbotron, Container, Row, Col, Button, Card} from "react-bootstrap";

class Services extends Component {
    render() {
      return (
        <div className="home-container">
            <Container>
                <Row style={{padding: '20px 0'}}>
                    <Col xs={12} >
                        <p style={{fontSize: '30px', fontWeight: 'bolder'}}> <a href="http://www.edumanbd.com/">Eduman</a></p>
                    </Col>
                    <Col md={5} xs={12}>
                        <img src="https://netizenbd.com/_files/200000248-d50fed604e/Screenshot_2.png" alt="eduman" style={{width: '30vw'}}></img>
                    </Col>
                    <Col md={7} xs={12}>
                        <p style={{fontSize: '20px'}}>A complete school and college management software in Bangladesh. Eduman is serving 2600 institutes, 43000 teachers, 1535000 students & parents.</p>
                    </Col>
                </Row>

                <Row style={{padding: '20px 0'}}>
                    <Col xs={12} >
                        <p style={{fontSize: '30px', fontWeight: 'bolder'}}> <a href="#">Granding T8</a></p>
                    </Col>
                    <Col md={5} xs={12}>
                        <img src="https://netizenbd.com/_files/200000248-d50fed604e/Screenshot_2.png" alt="eduman" style={{width: '30vw'}}></img>
                    </Col>
                    <Col md={7} xs={12}>
                        <p style={{fontSize: '20px'}}>Digital attendance device, Granding T8 sends to the cloud-based Eduman software & Eduman generates report through to Dynamic Website.</p>
                    </Col>
                </Row>
   
   
                <Row style={{padding: '20px 0'}}>
                    <Col xs={12} >
                        <p style={{fontSize: '30px', fontWeight: 'bolder'}}> <a href="#">DWS</a></p>
                    </Col>
                    <Col md={5} xs={12}>
                        <img src="https://netizenbd.com/_files/200000248-d50fed604e/Screenshot_2.png" alt="eduman" style={{width: '30vw'}}></img>
                    </Col>
                    <Col md={7} xs={12}>
                        <p style={{fontSize: '20px'}}>Dynamic Web Solution (properly integrated with eduman) for school, college, and madrasah. Government's demand has been fulfilled now.</p>
                    </Col>
                </Row>
    
   
                <Row style={{padding: '20px 0'}}>
                    <Col xs={12} >
                        <p style={{fontSize: '30px', fontWeight: 'bolder'}}> <a href="http://www.netiworld.com/login">Netiworld</a></p>
                    </Col>
                    <Col md={5} xs={12}>
                        <img src="http://www.netiworld.com/assets/layout/images/NetiWorld-2-PNG.png" alt="eduman" style={{width: '30vw'}}></img>
                    </Col>
                    <Col md={7} xs={12}>
                        <p style={{fontSize: '20px'}}>Student, parent and teacher's collaboration platform for exchanging their information. Netiworld is the social community site for education.</p>
                    </Col>
                </Row>
    
   
            </Container>
           
        </div>
      );
    }
  }
  
  export default Services;
  