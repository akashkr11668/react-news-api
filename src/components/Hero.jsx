import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column" style={{ height: "50vh" }}>
      <h1 className="display-2" style={{ fontSize: "60px", color: "#ffcc33", textShadow: "2px 2px #333" }}>NEWS Nation</h1>
      <p className="lead mb-5" style={{ fontSize: "22px" }}>Get the Latest News from Around the World</p>
      <Link to="/general" className="btn btn-primary btn-lg" style={{ 
        borderRadius: '30px',
        boxShadow: '2px 2px 4px #999',
        transition: 'transform 0.2s, box-shadow 0.2s',
        textDecoration: 'none',
        color: 'white',
        backgroundColor: '  #4c0080        ',
        border: 'none',
        padding: '12px 30px',
        letterSpacing: '1px'
      }} onClick={() => window.location.href="#news"} onMouseOver={(e) => {
          e.target.style.transform = 'translateY(-3px)';
          e.target.style.boxShadow = '3px 3px 5px #999';
        }} onMouseOut={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '2px 2px 4px #999';
        }}>Explore News Now</Link>
    </div>
  );
}

export default Hero;
