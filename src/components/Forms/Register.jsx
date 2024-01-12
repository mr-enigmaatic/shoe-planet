// RegisterForm.js
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

function RegisterForm({ show, handleClose }) {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

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
      setErrors({});
      // Perform form submission or API call
      console.log('Form submitted:', formData);
      

      // Reset form data
      setFormData({ name: '', email: '', password: '' });
      // Close the modal
      handleClose();
    }

    setValidated(true);
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
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter your name.
            </Form.Control.Feedback>
          </Form.Group>
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
              minLength={6}
              required
            />
            <Form.Control.Feedback type="invalid">
              Password must be at least 6 characters.
            </Form.Control.Feedback>
          </Form.Group>
          {Object.keys(errors).length > 0 && (
            <Alert variant="danger">
              {Object.values(errors).map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </Alert>
          )}
          <Button variant="primary" type="submit" className='mt-2'>
            Register
          </Button>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
        <p>Already have an account?
            <Button onClick={() => handleshowLoginForm()} variant="outline-success">Login</Button>
            </p>
      </Modal.Footer> */}
    </Modal>
    </>
  );
}

export default RegisterForm;
