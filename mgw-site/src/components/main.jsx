import React from "react";
import bgVid from "/herobgvid.mp4";
import "./main.css";

function main({ marquee }) {
  return (
    <main className="main" id="home">
      <video
        src={bgVid}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: -1,
          pointerEvents: "none",
          filter: "brightness(0.6) saturate(0.95)", // tune contrast/brightness
          opacity: 1,
        }}
      ></video>
      <div className="hero-dots"></div>
      <div className="hero-glow"></div>
      <div className="main-content">
        <div class="hero-badge">
          <span class="hero-badge-dot"></span> Africa's trusted system
          integrator
        </div>
        <div className="main-text">
          <h1>
            Welcome to <br /> SmartSecure Business Solutions Limited
          </h1>
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
