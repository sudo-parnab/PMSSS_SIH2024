import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Home/Home";
import Application from "./components/Application/Application";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Help from "./components/Help/Help";
import Login from "./components/LogIn/login";
import Sign from "./components/Signup/Sign";
import Forget from "./components/ForgetPassword/Password";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import UpperNav from "./components/Navbar/UpperNav/UpperNav";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <UpperNav />
              {/* <NavBar /> */}
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
