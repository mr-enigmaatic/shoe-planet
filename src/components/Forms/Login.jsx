// LoginForm.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import instance from '../../utils/axios';
import { useDispatch } from 'react-redux';
import { authUser } from '../../redux/slices/userAuthSlice';
import {useNavigate } from 'react-router-dom';

function LoginForm({ show, handleClose }) {

  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      // Perform login logic or API call
      console.log('Login form submitted:', formData);
      try {
        let res = await instance.post('/api/v1/login', formData);

        console.log("submitted form", res.data);

        if (res.data.success) {
          toast.success(res.data.message, {
            autoClose: 2000
          });
        }

        dispatch(authUser({
          user:res.data.user,
          isAuthenticated:true,
          token:123
        }));

        setFormData({ email: '', password: '' }); // Reset form data
        handleClose(); // Close the modal
        navigate('/')

      } catch (error) {
        toast.error(error.response.data.message, {
          autoClose: 2000
        });

      }

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
      <ToastContainer position='top-center' />
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
