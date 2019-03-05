import React, { Component } from 'react';
import Carousel from "../components/Carousel.js"
import {Jumbotron, Container, Row, Col, Button, Card} from "react-bootstrap";
import "./home.css"
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
class App extends Component {
    render() {
      return (
        <div className="home-container">
            <Container>
                <Row>
                    <Col className="heading-container">
                        <h2 className="heading">We are the leading company on digital <br/> education in Bangladesh</h2>
                        <br></br>
                        <Button variant="outline-info">Read More</Button>
                    </Col>
                </Row>

                <Row>
                    <Col style={{textAlign: 'center', padding: '40px'}}>
                    <Card style={{ width: '18rem', height: '220px'}}>
                        <Card.Body>
                            <Card.Title>Commitment</Card.Title>
                            <Card.Text>
                                We make commitments with care and live up to them. We take personal responsibility for all our actions.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col style={{textAlign: 'center', padding: '40px'}}>
                    <Card style={{ width: '18rem', height: '220px'}}>
                        <Card.Body>
                            <Card.Title>Work Life Balance</Card.Title>
                            <Card.Text>
                            We believe that work is an integral part of life and should therefore be enjoyable. We are passionate about the work we do while simultaneously striving to make it interesting and fun.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col style={{textAlign: 'center', padding: '40px'}}>
                    <Card style={{ width: '18rem', height: '220px'}}>
                        <Card.Body>
                            <Card.Title>Passion Of Excellence</Card.Title>
                            <Card.Text>
                            A passion for excellence is the key driver to our success. We strive to exceed the expectations of our clients. Our mission is to assist our client and their organizations succeed at all level.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
           
                <Row>
                  
                    <Col xs={12} style={{textAlign: 'center'}}>
                        <p style={{fontSize: '40px', fontWeight: 'bolder', padding: '20px 0', color: '#001f3f'}}>We are trusted by people around the nation</p>
                    </Col>
                    <Col sm={1}></Col>
                    <Col xs={4} sm={2} style={{textAlign: 'center'}}>
                        <p style={{fontWeight: 'bold', color: '#F012BE'}}>61</p><p style={{color: '#B10DC9'}}>Disctricts</p>
                    </Col>
                    <Col xs={4} sm={2} style={{textAlign: 'center'}}>
                       <p style={{fontWeight: 'bold', color: '#F012BE'}}>450</p><p style={{color: '#B10DC9'}}>Upazilla</p>
                    </Col>
                    <Col xs={4} sm={2} style={{textAlign: 'center'}}>
                     <p style={{fontWeight: 'bold', color: '#F012BE'}}>700</p><p style={{color: '#B10DC9'}}>Partners</p>
                    
                    </Col>
                    <Col xs={4} sm={2} style={{textAlign: 'center'}}>
                      <p style={{fontWeight: 'bold', color: '#F012BE'}}>2600+</p><p style={{color: '#B10DC9'}}>Schools And Colleges</p>
                     
                    </Col>
                    <Col xs={4} sm={2} style={{textAlign: 'center'}}>
                     <p style={{fontWeight: 'bold', color: '#F012BE'}}>1.5 million+</p><p style={{color: '#B10DC9'}}>Students And Teachers</p>
                   
                    </Col>
                    <Col xs={12} >
                    <div style={{ width: '100%', height: 'auto' }}>
                    <ResponsiveEmbed aspect="a16by9"  style={{textAlign: 'center'}}>
                        <iframe  src="https://www.youtube.com/embed/ly2KDzx9M0I" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </ResponsiveEmbed>
                    </div>;
                        </Col>
                </Row>
            
                <Row>
                    <Col xs={12} style={{textAlign: 'center'}}>
                        <p style={{fontSize: '40px', fontWeight: 'bolder', padding: '20px 0', color: '#001f3f'}}>Featured In</p>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={2}>
                    <img style={{width: '20vw'}} src="https://netizenbd.com/_files/200000149-db82cdc7af/200/Slide5.PNG" alt="dbc news"></img>
                    
                    </Col>
                    <Col xs={2}>
                  <img style={{width: '20vw'}} src="https://netizenbd.com/_files/200000150-4b9fe4c9c8/200/Slide4.PNG" alt="desh tv"></img>
                     
                    </Col>
                    <Col xs={2}>
                     <img style={{width: '20vw'}} src="https://netizenbd.com/_files/200000151-4c7254d6be/200/Slide6.PNG" alt="independent tv"></img>
                   
                    </Col>
                    <Col xs={2}>
                        <img style={{width: '20vw'}} src="https://netizenbd.com/_files/200000152-3ba8a3ca39/200/Slide7.PNG" alt="jamuna tv"></img>
                    </Col>
                    <Col xs={2}>
                     <img style={{width: '20vw'}} src="https://netizenbd.com/_files/200000153-c32c0c4267/200/Slide8.PNG" alt="masranga tv"></img>
                    </Col>
                </Row>
            </Container>
           
        </div>
      );
    }
  }
  
  export default App;
  