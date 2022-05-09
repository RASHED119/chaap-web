import React from 'react';
import { Container,  Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/Logo-1.png';
import './Header.css';

const Header = () => {
    return (
        <div>
           <Navbar className="shadow" collapseOnSelect expand="lg" bg="light">
  <Container>
  <Navbar.Brand as={Link} to="/"><img src={logo} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav bg-succss" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link} to={"/home"} className="link">Home</Nav.Link>
      <Nav.Link as={Link}  to={"/about"} className="link">About Us</Nav.Link>
      <Nav.Link as={Link}  to={"/service"} className="link">Servicr</Nav.Link>
      <Nav.Link as={Link}  to={"/production"} className="link">Production</Nav.Link>
      <Nav.Link as={Link}  to={"/contact"} className="link">Contact Us</Nav.Link>
      <Nav.Link as={Link}  to={"/login"} className="link">Login</Nav.Link>   
      {/* <Nav.Link as={Link}  to={"/registion"} className="link">Registion</Nav.Link>    */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;