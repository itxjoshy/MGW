import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="SmartSecure Logo" />
        </div>

        <div className={`navlinks ${menuOpen ? "open" : ""}`}>
          <nav>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About us
            </a>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#industries" onClick={() => setMenuOpen(false)}>
              Industries
            </a>
            <a href="#partners" onClick={() => setMenuOpen(false)}>
              Partners
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>
        </div>

        <div className="header-cta">
          <button>Get started</button>
          <button>Contact</button>
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
            stroke="currentColor"
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
      </div>
    </header>
  );
}

export default Header;
