import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import React from 'react';
import useAuth from '../Pages/Firebase/useAuth';

const Login = () => {
  const {signInUsingGoogle }= useAuth();
    

   
    return (
        <div>
            <h2 className="text-danger text-center">Log In</h2>
            <h2 onClick={signInUsingGoogle} className="text-center"><button className="bg-primary text-white ">Sign in with google</button></h2>
        </div>
    );
};

export default Login;