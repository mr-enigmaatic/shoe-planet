import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css'; // Import your CSS file for styling

function Hero() {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1>Your Awesome Brand</h1>
            <p>A brief description of your brand or a catchy slogan.</p>
            <Button variant="primary" size="lg">Shop Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
