import React, { Component } from 'react';
import {Jumbotron, Container, Row, Col, Button, Form} from "react-bootstrap";

class Contact extends Component {
    render() {
      return (
        <div>
           <Container>
                <Row>
                    <Col xs={12} style={{textAlign: 'center', fontSize: '30px', fontWeight: 'bold', padding: '10px 0'}}>
                        <p>Contact Us Through</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 6, offset: 3 }}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicPassword">
                            <Form.Text>Message For</Form.Text>
                            <Form.Check type="checkbox" label="Live Demo"/>
                            <Form.Check type="checkbox" label="Bijoy Point"/>
                            <Form.Check type="checkbox" label="Community Partnership"/>
                            <Form.Check type="checkbox" label="B2B Match Making"/>
                            <Form.Check type="checkbox" label="Genera; Query"/>
                            <Form.Check type="checkbox" label="Other"/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="3" placeholder="Your Message"/>
                        </Form.Group>
                        <div style={{textAlign: 'right'}}>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                            
                    
                        </Form>;
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{textAlign: 'center', fontSize: '30px', fontWeight: 'bold', padding: '10px 0'}}>
                        <p>Find Us At</p>
                    </Col>
                    <Col style={{height: '50vh'}}>
                        <iframe style={{border: 'none', width: '100%', height: "100%"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976!2d90.3950062!3d23.7818097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s23.7818097%2C90.3950062!5e0!3m2!1sen-us!2sBD!4v1551681164000"></iframe>
                    </Col>
                    <Col xs={12} style={{textAlign: 'center', padding: '20px 0'}}>
                        <p><span style={{fontSize:'18px', fontWeight: 'bold'}}>Customer Support:</span> cs@netizenbd.com</p>
                        <p><span style={{fontSize:'18px', fontWeight: 'bold'}}>CRM Support:</span> crm@netizenbd.com</p>
                        <p><span style={{fontSize:'18px', fontWeight: 'bold'}}>Billing Support:</span> billing@netizenbd.com</p>
                        <p><span style={{fontSize:'18px', fontWeight: 'bold'}}>Information Support:</span> info@netizenbd.com</p>
                    </Col>
                </Row>
          
           </Container>
        </div>
      );
    }
  }
  
  export default Contact;
  