import { NavLink } from "react-router-dom";
import AICTE from "../assets/AICTE.png";
import PMSSS from "../assets/PMSSS.png";
import styles from "./UpperNav.module.css";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";

const upper = () => {
  return (
    <header>
      <nav className={styles.navUpper}>
        <img className={styles.pmsss} src={PMSSS} alt="pmsss-logo" />
        <img className={styles.aicte} src={AICTE} alt="aicte-logo" />
      </nav>
      <nav className={styles.navMiddle}>
        <div className={styles.left}>
          <ul>
            <li>
              <img src={phone} alt="phone" />
              <p>+91 1234567890</p>
            </li>
            <li>
              <img src={mail} alt="mail" />
              <p>pmsss.help@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <ul>
            <li>
              <p>Administation Login</p>
            </li>
            <li>
              <p>Institute Login</p>
            </li>
          </ul>
        </div>
      </nav>
      <nav className={styles.lowerNav}>
        <ul>
          <li>
            <NavLink
              className={(e) => {
                return e.isActive ? styles.true : "";
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => {
                return e.isActive ? styles.true : "";
              }}
              to="/apply"
            >
              Apply
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => {
                return e.isActive ? styles.true : "";
              }}
              to="/login"
            >
              Student Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => {
                return e.isActive ? styles.true : "";
              }}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => {
                return e.isActive ? styles.true : "";
              }}
              to="/help"
            >
              Help
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => {
                return e.isActive ? styles.true : "";
              }}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => {
                return e.isActive ? styles.true : "";
              }}
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default upper;
