
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from "../../Firebase/useAuth"


import './Header.css'

const Header = () => {
  const {user,logOut}=useAuth();
    return (
        <div>
            <>
            
            <Navbar bg="dark" variant="dark">
              <Container>
                  
                 <h1> <i className="fas fa-cloud-meatball text-danger p-3 fw-bold"></i></h1>
                 <h4 className="write fs-2">City tours</h4>
                  
              
              <Nav className="me-auto ms-3">
                <Nav.Link as={Link} to ="/home">Home</Nav.Link>
              </Nav>
              
              <Nav className="me-auto ms-1">
            
                {user?.email ?
                <div className="d-flex">
                  <Nav.Link as={Link} to ="/myOrder">My orders</Nav.Link>
                <Nav.Link as={HashLink} to ="/">Manage All Orders</Nav.Link>
                <Nav.Link as={Link} to ="/addnewService">Addnew service</Nav.Link>
                  <button onClick={logOut} className="bg-dark text-white">LogOut</button>
                </div>
                :
                <Nav.Link className="p-3" as={Link} to="/login">Login< i className="fas fa-sign-in-alt text-danger "></i></Nav.Link>
                
              }
              <Navbar.Text>
              <a href="#login"> {user?.displayName}</a>
              </Navbar.Text>
                
              </Nav>
              </Container>
            </Navbar>
           
          </>
        </div>
    );
};

export default Header;