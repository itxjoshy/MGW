import React from "react";
import logo from "../assets/logo.png";
import "./header.css";
function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navlinks">
          <nav>
            <a href="#home">home</a>
            <a href="#about">about us</a>
            <a href="#services">services</a>
            <a href="#industries">industries</a>
            <a href="#partners">partners</a>
            <a href="#contact">contact</a>
          </nav>
        </div>
        <div className="header-cta">
          <button>get started</button>
          <button>contact</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
