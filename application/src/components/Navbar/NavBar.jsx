import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={(e) => {
              return e.isActive ? "true" : "";
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(e) => {
              return e.isActive ? "true" : "";
            }}
            to="/apply"
          >
            Apply
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(e) => {
              return e.isActive ? "true" : "";
            }}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(e) => {
              return e.isActive ? "true" : "";
            }}
            to="/help"
          >
            Help
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(e) => {
              return e.isActive ? "true" : "";
            }}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(e) => {
              return e.isActive ? "true" : "";
            }}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
      </ul>
      <div className="btn-container">
        <NavLink to="/login">
          <button className="btn">Log In</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
