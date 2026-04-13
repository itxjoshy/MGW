// ...existing code...
import React from "react";
import "./contactus.css";

function ContactUs() {
  return (
    <section className="contact-section">
      <div className="container contact-grid">
        <div className="contact-left">
          <div className="eyebrow">Plan your visit</div>
          <h2 className="contact-title">We'd Love to Meet You</h2>
          <p className="contact-lead">
            Whether you're evaluating a systems integration partner or ready to
            start a project, our offices in Abuja and Lagos are ready to help.
            Reach out or drop by — we'll save you a seat.
          </p>

          <ul className="contact-list">
            <li>
              <span className="icon" aria-hidden>
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1118 0z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <div className="contact-item">
                <div className="label">Abuja Office</div>
                <div className="value">
                  Premium Plaza, Suite C22
                  <br />
                  Plot 759, Kubwa Extension
                  <br />
                  Opposite Army Estate Road, Abuja
                </div>
              </div>

              <div className="contact-item">
                <div className="label">Lagos Office</div>
                <div className="value">122 Mushin Road, Isolo, Lagos</div>
              </div>
            </li>

            <li>
              <span className="icon" aria-hidden>
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92V21a1 1 0 01-1.11 1A19 19 0 013 4.11 1 1 0 014 3h4.09a1 1 0 01.94.66l1.2 3.6a1 1 0 01-.27 1.02L8.91 11.09a13 13 0 006 6l2.81-1.06a1 1 0 011.02-.27l3.6 1.19a1 1 0 01.66.94z" />
                </svg>
              </span>
              <div className="contact-item">
                <div className="label">Phone</div>
                <div className="value">
                  08060076250
                  <br />
                  07030881335
                  <br />
                  08084977466
                </div>
              </div>
            </li>

            <li>
              <span className="icon" aria-hidden>
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16v16H4z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </span>
              <div className="contact-item">
                <div className="label">Email</div>
                <div className="value">
                  <a href="mailto:info@smartsecure.com">info@smartsecure.com</a>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="contact-right" aria-label="Office locations map">
          <div className="map-wrap">
            <iframe
              title="SmartSecure Office Locations"
              src="https://www.google.com/maps?q=Premium+Plaza+Suite+C22+Plot+759+Kubwa+Extension+Abuja&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
