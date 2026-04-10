import React from "react";
import "./main.css";

function main({ marquee }) {
  return (
    <main className="main">
      <div className="hero-dots"></div>
      <div className="hero-glow"></div>
      <div className="main-content">
        <div class="hero-badge">
          <span class="hero-badge-dot"></span> Africa's trusted system
          integrator
        </div>
        <div className="main-text">
          <h1>Welcome to SmartSecure Business Solutions Limited</h1>
          <p>
            End-to-End IT Infrastructure Solutions - 24/7 Technical Support
            Services - Multi-Country Presence Across Africa - Trusted by
            Enterprise and Government Clients
          </p>
        </div>
        <div className="cta-buttons">
          <button>Contact Us</button>
          <button>View Services</button>
        </div>
      </div>
      {marquee}
    </main>
  );
}

export default main;
