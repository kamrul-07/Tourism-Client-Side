import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    return (
        <div>
            <>
            
            <Navbar bg="dark" variant="dark">
              <Container>
                  
                 <h1> <i className="fas fa-cloud-meatball text-danger p-3 fw-bold"></i></h1>
                 <h4 className="write fs-2">City tours</h4>
                  
              
              <Nav className="me-auto ms-3">
                <Nav.Link as={HashLink} to ="/home#home">Home</Nav.Link>
                <Nav.Link as={HashLink} to ="/home#home">My orders</Nav.Link>
                <Nav.Link as={HashLink} to ="/home#home">Manage All Orders</Nav.Link>
                <Nav.Link as={HashLink} to ="/home#home">Add a new service</Nav.Link>
              </Nav>
              <Nav className="me-auto ms-3">
                <Nav.Link className="p-3" as={Link} to="/login">Login< i className="fas fa-sign-in-alt text-danger "></i></Nav.Link>
                
                
              </Nav>
              </Container>
            </Navbar>
           
          </>
        </div>
    );
};

export default Header;