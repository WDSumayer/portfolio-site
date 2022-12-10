import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar style={{backgroundColor: '#000000'}} fixed='top' collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Link to='/' className='navbar-brand fw-bold fs-1'>SBK</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto main-menu">
            <Link to='/' className='nav-link fs-5 fw-light text-white'>Home</Link>
            <Link to='/about' className='nav-link fs-5 fw-light text-white'>About</Link>
            <Link to='/projects' className='nav-link fs-5 fw-light text-white'>Projects</Link>
            <Link to='/contact' className='nav-link fs-5 fw-light text-white'>Contact</Link>
            
            
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;