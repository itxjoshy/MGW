import React from "react";
import "./contactus.css";
function ContactUs() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-section-content">
          <div className="contact-section-meta">
            <h2>Contact Us</h2>
            <p>If you have any questions, feel free to reach out!</p>
            <div className="contact-links">
              <div className="address">
                <p>
                  Abuja Office: Premium Plaza, Suite C22,
                  <br /> Plot 759, Kubwa Extension, <br />
                  Opposite Army Estate Road, Abuja <br />
                  Lagos Office: 122 Mushin Road, Isolo, Lagos
                </p>
              </div>
            </div>
          </div>
          <div className="contact-map">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509949!2d144.9537353153165!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f5b7%3A0x5045675218cd4e0!2s123%20Main%20St%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
