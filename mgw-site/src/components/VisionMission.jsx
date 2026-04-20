import React from "react";
import "./vision-mission.css";
function VisionMission() {
  return (
    <section id="vision">
      <div className="container">
        <span className="section-label-vm">Vision &amp; Mission</span>
        <h2 className="section-title">What drives us</h2>
        <div className="vm-grid">
          <div className="vm-card">
            <h3>Vision</h3>
            <p>
              "To be Africa's leading system integrator delivering innovative
              and reliable business solutions."
            </p>
          </div>
          <div className="vm-card">
            <h3>Mission</h3>
            <p>
              "To provide cutting-edge IT solutions through strategic
              partnerships, innovation, and exceptional service delivery."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
