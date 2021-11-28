import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container pb-3">
            <div className="footer-text">
            <div>
                <h4>NEED HELP?</h4>
                <h5>+01870-621500</h5>
                <h5>help@citytours.com</h5>
            </div>
            <div>
                <h4>About</h4>
                <h6>About us</h6>
                <h6>FAQ</h6>
                <h6>Login</h6>
                <h6>Register</h6>
                <h6>Terms and condition</h6>
            </div>
            <div>
                <h4>DISCOVER</h4>
                <h6>community blog</h6>
                <h6>Tour guide</h6>
                <h6>Wishlist</h6>
                <h6>Gallery</h6>
            </div>
            </div>
            <hr />
            <div className="text-center">
            <i class="fab fa-facebook-f m-2"></i>
            <i class="fab fa-youtube m-2"></i>
            <i class="fab fa-twitter m-2"></i>
            <i class="fab fa-instagram m-2"></i>
            </div>
            <h6 className="text-center"><small>© Citytours 2021</small></h6>
            </div>
        </div>
    );
};

export default Footer;