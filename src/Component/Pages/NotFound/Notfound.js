import Button from '@restart/ui/esm/Button';
import React from 'react';
import {  ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className="container d-flex">
            <div className='img-fluid style w-100% g-2'>
                <img src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=829&q=80" alt="" />
                
            </div>
            <div className="ms-2">
                <h1>Page Not Found</h1>
                <Link to='/home'>  <Button variant="primary">GO to home</Button> </Link>
            </div>
            
        </div>
    );
};

export default Notfound;