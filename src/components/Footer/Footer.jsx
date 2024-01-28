import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Container className="bg-black text-center justify-content-center" fluid>
        <footer className="bg-black text-light  pt-2">
      <Container>
        <Row>
        <Col xs={12} md={4}>
            <h5>Company</h5>
            <ul className="list-unstyled">
            <li><Link to='#' className='list-items'>About Us</Link></li>
            <li><Link to='#' className='list-items'>Store Locator</Link></li>
            <li><Link to='#' className='list-items'>Investor Relations</Link></li>
            <li><Link to='#' className='list-items'>Careers</Link></li>
            <li><Link to='#' className='list-items'>Press Releases</Link></li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5>Shop</h5>
            <ul className="list-unstyled">
              <li><Link to='/men' className='list-items'>Men</Link></li>
              <li><Link to='/women' className='list-items'>Women</Link></li>
              <li><Link to='#' className='list-items'>Kids</Link></li>
              <li><Link to='#' className='list-items'>Sale</Link></li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><Link to='#' className='list-items'>Help Center</Link></li>
              <li><Link to='#' className='list-items'>Contact Us</Link></li>
              <li><Link to='#' className='list-items'>Order Status</Link></li>
              <li><Link to='#' className='list-items'>Shipping and Delivery</Link></li>
              <li><Link to='#' className='list-items'>Returns</Link></li>
              <li><Link to='#' className='list-items'>FAQs</Link></li>
            </ul>
          </Col>        
        </Row>
        <hr />
        <Row>
          <Col xs={12} md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
            <li><Link to ='#' className='list-items'>Facebook</Link></li>
            <li><Link to ='#' className='list-items'>Twitter</Link></li>
            <li><Link to ='#' className='list-items'>Instagram</Link></li>
            <li><Link to ='#' className='list-items'>YouTube</Link></li>
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