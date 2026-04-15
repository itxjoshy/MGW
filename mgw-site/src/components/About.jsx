import React from "react";
import aboutImage from "../assets/images/about-img.jpg";
import "./about.css";

function About() {
  return (
    <section id="about" className="about-section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-platform">
          <div className="about-content">
            <div className="section-label">About</div>

            <h2>SmartSecure Business Solutions Limited</h2>
            <p className="lead">
              A trusted system integrator delivering innovative, scalable and
              secure IT solutions across Africa. We design, implement and manage
              infrastructure that drives productivity and operational
              excellence.
            </p>

            <div className="about-grid">
              <div className="about-card">
                <h4>Who we are</h4>
                <p>
                  Experienced engineers and consultants delivering end-to-end IT
                  infrastructure, cloud, security and enterprise solutions
                  tailored to enterprise and government needs.
                </p>
              </div>

              <div className="about-card">
                <h4>Core capabilities</h4>
                <ul className="capabilities">
                  <li>Data Center & Network Infrastructure</li>
                  <li>Server & Storage (SAN/NAS)</li>
                  <li>Virtualization & Cloud (VMware, Hyper-V)</li>
                  <li>Cybersecurity & Identity Management</li>
                  <li>Backup & Disaster Recovery</li>
                </ul>
              </div>

              <div className="about-card">
                <h4>Presence</h4>
                <p>
                  Headquartered in Nigeria with operations across Africa —
                  Nigeria (Abuja, Lagos, Port Harcourt), Ghana, Sierra Leone,
                  Liberia, Benin, Cameroon and more.
                </p>
              </div>
            </div>
          </div>

          <div className="about-img">
            <img src={aboutImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
