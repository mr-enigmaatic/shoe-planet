import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <Container className="bg-black text-center justify-content-center" fluid>
        <footer className="bg-black text-light  pt-2">
      <Container>
        <Row>
        <Col xs={12} md={4}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Store Locator</li>
              <li>Investor Relations</li>
              <li>Careers</li>
              <li>Press Releases</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5>Shop</h5>
            <ul className="list-unstyled">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Sale</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Order Status</li>
              <li>Shipping and Delivery</li>
              <li>Returns</li>
              <li>FAQs</li>
            </ul>
          </Col>        
        </Row>
        <hr />
        <Row>
          <Col xs={12} md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </Col>
          <Col xs={12} md={8}>
            <h5>Subscribe to Our Newsletter</h5>
            <p>Stay up to date with the latest news and offers from Bata</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Enter your email" aria-label="Enter your email" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <Button variant="outline-success">Subscribe</Button>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12}>
            <p>&copy; 2024 Shoe Planet. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </Container>
  )
}

export default Footer