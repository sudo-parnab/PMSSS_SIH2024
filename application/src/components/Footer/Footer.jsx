import React from "react";
import styles from "./Footer.module.css";
import aicte from "../Footer/Assets/AICTE.png";

const Footer = () => {
  return (
    <footer>
      <div className={styles.left}>
        <div className={styles.leftUpper}>
          <img src={aicte} alt="aicte-logo" />
        </div>
        <div className={styles.leftLower}>
          <p>Copyright Akashmik © 2024</p>
        </div>
      </div>
      <div className={styles.divContainer}>
        <div className={styles.contact}>
          <p>Contact Us</p>
          <ul>
            <li>+91 1234567890</li>
            <li>abc@gmail.com</li>
          </ul>
        </div>
        <div className={styles.legal}>
          <p>Legal</p>
          <ul>
            <li>Legal Notice</li>
            <li>Privacy Policy</li>
            <li>Terms ands Conditions</li>
          </ul>
        </div>
        <div className={styles.follow}>
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
