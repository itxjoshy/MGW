import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(hash.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="SmartSecure Logo" />
        </div>
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
        <div className={`navlinks ${menuOpen ? "open" : ""}`}>
          <nav>
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")}>
              Home
            </a>
            <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>
              About us
            </a>
            <a href="#services" onClick={(e) => handleNavClick(e, "#services")}>
              Services
            </a>
            <a
              href="#project-devlivery"
              onClick={(e) => handleNavClick(e, "#project-delivery")}
            >
              Project development
            </a>
            <a href="#partners" onClick={(e) => handleNavClick(e, "#partners")}>
              Partners
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
              Contact
            </a>
          </nav>
        </div>

        <div className="header-cta">
          <button onClick={(e) => handleNavClick(e, "#contact-form")}>
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
