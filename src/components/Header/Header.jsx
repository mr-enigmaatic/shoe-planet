import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import logo from '../../images/logo.png';
import { useMediaQuery } from 'react-responsive';
import RegisterForm from '../Forms/Register';
import LoginForm from '../Forms/Login';
import { Link } from 'react-router-dom';


function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleRegisterClose = () => setShowRegister(false);
  const handleRegisterShow = () => setShowRegister(true);
  const handleLoginShow = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);
  
  return (
      <Navbar collapseOnSelect expand="lg"  bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand as = {Link} to ={'/'} className="d-flex align-items-center">
        <img
          src={logo}
          height="auto"
          width={isMobile ? 50 : 100}
          className="mr-2"
          alt="Your Shoe Brand Logo"
        />
        <h1 className='text-white'>Shoe Planet</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Latest Drops</Nav.Link>
            <Nav.Link as = {Link} to ={'/men'}>Men</Nav.Link>
            <Nav.Link as = {Link} to ={'/women'}>Women</Nav.Link>
            <Nav.Link href="#pricing">Kids</Nav.Link>
            <NavDropdown title="Brands" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Nike</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Puma
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">adidas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                offer sale
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
        <Nav.Link onClick={handleRegisterShow}><Button variant="outline-secondary">Register</Button></Nav.Link>
        <Nav.Link onClick={handleLoginShow}><Button variant="outline-primary">Login</Button></Nav.Link>
      </Nav>
      <RegisterForm show={showRegister} handleClose={handleRegisterClose} />
      <LoginForm show={showLogin} handleClose={handleLoginClose} />

          {/* <Nav>
            <Nav.Link><Button variant="outline-secondary" onClick={setShowRegister(true)}>Register</Button></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="outline-success">Login</Button>
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header