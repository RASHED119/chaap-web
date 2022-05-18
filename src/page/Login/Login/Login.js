import React from 'react';
import './Login.css';
import { Button, Container, Form } from 'react-bootstrap';
import imgfrom from '../../../images/Logo-1.png';

const Login = () => {
    return (
        <div>
           <Container id="main-container" className="d-grid h-100">
               <Form id="sing-in-form" className="text-center w-100">
                   <img className="mb-4 loginimg" src={imgfrom} alt="" />
                   <h5 className="mb-3 fs-3 fw-normal">Please Login In</h5>
                   <Form.Group controlId="sing-in-email" className="mb-3">
                   <Form.Control type="email" size="lg" placeholder="Your Email Address" autocomplete="username" />
                   </Form.Group>
                   <Form.Group controlId="sing-in-password" className="mb-3">
                   <Form.Control type="password" size="lg" placeholder="Your password" autocomplete="current password" />
                   </Form.Group>
                   <Form.Group controlId="remember-me" className="d-flex justify-content-center mb-4">
                   <Form.Check label="Remember me" />
                   </Form.Group>
                   <div className="d-grid">
                   <Button variant="primary" size="lg">Login</Button>
                   </div>
               </Form>

           </Container>
        </div>
    );
};

export default Login;