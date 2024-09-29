import React from "react";
import styles from "./Contact.module.css";
import phone from "../Contact/Assets/phone.png"
import mail from "../Contact/Assets/mail.png"
import location from "../Contact/Assets/location.png"
import instagram from "../Contact/Assets/instagram.png"
import facebook from "../Contact/Assets/facebook.png"
import twitter from "../Contact/Assets/twitter.png"
import message from "../Contact/Assets/message.png"

const Contact = () => {
  return (
    <div className={styles.body}>
      <section className={styles.left}>
        <div>
          <div className={styles.leftUpper}>
            <h1>Get In Touch</h1>
            <p>
              We would love to hear from you. Our friendly team is always here
              to chat
            </p>
          </div>
          <div className={styles.leftMiddle}>
            <ul>
              <li>
                <img src={phone} alt="phone-logo" />
                <div>
                  <h1>Phone</h1>
                  <p>+91 1234567890</p>
                </div>
              </li>
              <li>
                <img src={mail} alt="email-logo" />
                <div>
                  <h1>Email</h1>
                  <p>abc@gmail.com</p>
                </div>
              </li>
              <li>
                <img src={location} alt="HQ-logo" />
                <div>
                  <h1>Office HQ</h1>
                  <p>23 Achimota Road, Accra</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.leftLower}>
          <ul>
            <li>
              <img src={instagram} alt="instagram" />
            </li>
            <li>
              <img src={facebook} alt="facebook" />
            </li>
            <li>
              <img src={twitter} alt="twitter" />
            </li>
            <li>
              <img src={message} alt="chat" />
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.right}>
        <div className={styles.rightUpper}>
          <h1>Contact Us</h1>
          <p>Any Question or Remarks? Just message us</p>
        </div>
        <div className={styles.rightMiddle}>
          <ul>
            <li>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Adam Sandberg" />
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="abc@gmail.com" />
            </li>
            <li className={styles.rightLowerInput}>
              <label htmlFor="message">Message</label>
              <textarea type="text" name="message" placeholder="Any Query?" />
            </li>
          </ul>
        </div>
        <div className={styles.rightLower}>
          <button>Send</button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
