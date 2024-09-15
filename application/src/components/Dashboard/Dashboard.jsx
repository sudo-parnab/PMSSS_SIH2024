import React from "react";
import "./Dashboard.css";
import Profile from './Profile.png';

const Dashboard = () => {
  return (
    <div className="main-container">
      <div className="profile-container">
        <section className="profile-left">
          <div className="profile-left-upper">
            <h1>Student Dashboard</h1>
            <p>Details of Applications</p>
          </div>
          <div className="profile-left-middle">
            <img src={Profile} alt="Profile-Photo" />
          </div>
          <div className="profile-left-lower">
            <h1>Adam Sandberg</h1>
            <p className="id">Applicant ID</p>
            <hr className="line" />
            <p>122 344 567</p>
          </div>
        </section>
        <section className="profile-right">
          <div className="profile-right-upper">
            <div className="profile-style">
              <p>Application Details</p>
            </div>
            <hr />
            <div className="details">
              <ul>
                <li>
                  <h1>First Name</h1>
                  <span>:</span>
                  <p>Adam Sandberg</p>
                </li>
                <li>
                  <h1>Phone Number</h1>
                  <span>:</span>
                  <p>+91 1234567890</p>
                </li>
                <li>
                  <h1>Email</h1>
                  <span>:</span>
                  <p>abc@gmail.com</p>
                </li>
                <li>
                  <h1>Address</h1>
                  <span>:</span>
                  <p>123, XYZ Street, ABC City</p>
                </li>
                <li>
                  <h1>Application Number</h1>
                  <span>:</span>
                  <p>123456</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-right-lower">
            <div className="profile-style">
              <p>Application Status</p>
            </div>
            <hr className="line" />
            <div className="status"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
