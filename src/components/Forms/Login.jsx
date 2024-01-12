// LoginForm.js
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function LoginForm({ show, handleClose }) {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


//   const handleshowRegisterForm =()=>{
//     setShowRegister(true);
//     handleClose();
//   }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      // Perform login logic or API call
      console.log('Login form submitted:', formData);
      setFormData({ email: '', password: '' }); // Reset form data
      handleClose(); // Close the modal
    }
    setValidated(true); // Set validated to true after the form is submitted or attempted to submit
  };

  useEffect(() => {
    return () => {
      // Reset validated state when the component is unmounted (modal is closed)
      setValidated(false);
    };
  }, [formData]);

  return (
    <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter your password.
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
        <p>Already have an account?
            <Button onClick={() => handleshowRegisterForm} variant="outline-success">Login</Button>
            </p>
      </Modal.Footer> */}
    </Modal>
    </>
  );
}

export default LoginForm;
