import React from "react";
import "./about.css";

function About() {
  return (
    <section className="about-section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-platform">
          <div className="section-label">About</div>
          <div className="about-content">
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

              <div className="about-card">
                <h4>Vision & Mission</h4>
                <p>
                  Vision: To be Africa’s leading system integrator delivering
                  reliable business solutions.
                </p>
                <p>
                  Mission: Deliver cutting-edge IT solutions through
                  partnerships, innovation and exceptional service.
                </p>
              </div>
            </div>

            <div className="feature-tabs" aria-hidden>
              <button className="feature-tab active">
                End-to-End Solutions
              </button>
              <button className="feature-tab">24/7 Support</button>
              <button className="feature-tab">Multi-Country Reach</button>
              <button className="feature-tab">Trusted Partners</button>
            </div>
          </div>

          <aside className="about-preview">
            <div
              style={{
                background: "var(--card-bg, #fff)",
                borderRadius: "var(--radius-xl)",
                padding: "2rem",
                minHeight: "360px",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "var(--card-shadow, 0 6px 18px rgba(0,0,0,0.06))",
              }}
            >
              <svg
                width="56"
                height="56"
                viewBox="0 0 48 48"
                fill="none"
                style={{ opacity: 0.18 }}
              >
                <rect
                  x="6"
                  y="14"
                  width="36"
                  height="22"
                  rx="3"
                  stroke="#0b5394"
                  strokeWidth="2"
                />
                <path
                  d="M16 36v4M32 36v4M10 40h28"
                  stroke="#0b5394"
                  strokeWidth="2"
                />
                <circle
                  cx="24"
                  cy="25"
                  r="5"
                  stroke="#0b5394"
                  strokeWidth="2"
                />
              </svg>

              <div style={{ color: "var(--text-muted)" }}>
                <strong>Enterprise IT & Infrastructure</strong>
                <p style={{ marginTop: "0.5rem", fontSize: "13px" }}>
                  Server, storage, networking, cloud migration and enterprise
                  security — delivered with local presence and global
                  partnerships.
                </p>
              </div>

              <a
                href="/contact"
                className="btn btn-primary"
                style={{ marginTop: "0.5rem" }}
              >
                Contact Us
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;
