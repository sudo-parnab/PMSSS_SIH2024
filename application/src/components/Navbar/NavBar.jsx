import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            className={(e) => {
                                return e.isActive ? styles.true : "";
                            }}
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(e) => {
                                return e.isActive ? styles.true : "";
                            }}
                            to="/apply">
                            Apply
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(e) => {
                                return e.isActive ? styles.true : "";
                            }}
                            to="/login">
                            Student Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(e) => {
                                return e.isActive ? styles.true : "";
                            }}
                            to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(e) => {
                                return e.isActive ? styles.true : "";
                            }}
                            to="/help">
                            Help
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(e) => {
                                return e.isActive ? styles.true : "";
                            }}
                            to="/contact">
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(e) => {
                                return e.isActive ? styles.true : "";
                            }}
                            to="/profile">
                            Profile
                        </NavLink>
                    </li>
                </ul>
            </nav>
            {/* <section>
        <NavLink to="/login">
          <button className={styles.btn}>Log In</button>
        </NavLink>
      </section> */}
        </header>
    );
};

export default NavBar;
