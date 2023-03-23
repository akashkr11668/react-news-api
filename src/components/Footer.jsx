import React from 'react';
import FetchData from './FetchDataa.css';

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus eget justo aliquam interdum.</p>
          </div>
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>123 Main St, Jalandhar Punjab</p>
            <p>Email: info@company.com</p>
            <p>Phone: 888-888-8888</p>
          </div>
          <div className="footer-section social">
            <h2>Follow Us</h2>
            <p>Join our social media community and stay up-to-date with the latest news and updates:</p>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2023 Company
            | All rights reserved</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;