import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="copyright-container">
        <p>Copyright Akashmik © 2024</p>
      </div>
      <div className="div-container">
        <div className="contact">
          <p>Contact Us</p>
          <ul>
            <li>+91 1234567890</li>
            <li>abc@gmail.com</li>
          </ul>
        </div>
        <div className="legal">
          <p>Legal</p>
          <ul>
            <li>Legal Notice</li>
            <li>Privacy Policy</li>
            <li>Terms ands Conditions</li>
          </ul>
        </div>
        <div className="follow">
          <p>Follow Us</p>
          <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
