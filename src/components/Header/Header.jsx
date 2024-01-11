import React from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import logo from '../../images/logo.png';
import { useMediaQuery } from 'react-responsive';

function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
      <Navbar collapseOnSelect expand="lg"  bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand href="#home" className="d-flex align-items-center">
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
            <Nav.Link href="#pricing">Men</Nav.Link>
            <Nav.Link href="#pricing">Women</Nav.Link>
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
            <Nav.Link href="#deets"><Button variant="outline-secondary">Register</Button></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="outline-success">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header