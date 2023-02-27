import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link to='/'  className="link link-hover">Home</Link>
    <Link to ='/project' className="link link-hover">Project</Link>
    <Link to ='/dashboard' className="link link-hover">Dashboard</Link>
    <Link to ='/contact' className="link link-hover">Contact Us</Link>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
        </div>
    );
};

export default Footer;