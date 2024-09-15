import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Navbar/Pages/Home";
import Application from "./components/Navbar/Pages/Application";
import Contact from "./components/Navbar/Pages/Contact";
import About from "./components/Navbar/Pages/About";
import Help from "./components/Navbar/Pages/Help";
import Login from "./components/LogIn/login";
import Sign from "./components/Signup/Sign";
import Forget from "./components/ForgetPassword/Password";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";


const App = () => {
    return (
      <>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/apply"
            element={
              <>
                <NavBar />
                <Application />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <NavBar />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/help"
            element={
              <>
                <NavBar />
                <Help />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <NavBar />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <NavBar />
                <Login />
                <Footer />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <NavBar />
                <Sign />
                <Footer />
              </>
            }
          />
          <Route
            path="/forget"
            element={
              <>
                <Forget />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <NavBar />
                <Dashboard />
                <Footer />
              </>
            }
          />
        </Routes>
      </>
    );
};

export default App;
