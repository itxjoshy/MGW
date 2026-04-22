import { useState } from "react";
import "./contactForm.css";

const SERVICES = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "System Integration",
  "Digital Strategy",
  "Cloud Solutions",
];

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="sp-section container">
      {/* LEFT COLUMN */}
      <div className="sp-left">
        <button className="sp-badge">
          <span className="sp-badge__icon">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 4.5h15a1 1 0 011 1v9a1 1 0 01-1 1h-15a1 1 0 01-1-1v-9a1 1 0 011-1z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M1.5 5.5l8.5 5.5 8.5-5.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          Start A Project
        </button>

        <h2 className="sp-heading">
          Let's Build Your
          <br />
          Digital Future
        </h2>

        <p className="sp-subtext">
          Ready to launch your next project? Fill out the form or reach out
          directly to start a conversation about your business needs and how we
          can help you grow.
        </p>

        <div className="sp-contacts">
          <div className="sp-contact-item">
            <span className="sp-contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>+1(555) 123-4567</span>
          </div>

          <div className="sp-contact-item">
            <span className="sp-contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>San Francisco, CA</span>
          </div>

          <div className="sp-contact-item">
            <span className="sp-contact-icon">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 4.5h15a1 1 0 011 1v9a1 1 0 01-1 1h-15a1 1 0 01-1-1v-9a1 1 0 011-1z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.5 5.5l8.5 5.5 8.5-5.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span>hello@digitalagency.com</span>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN — FORM */}
      <div className="sp-form-card">
        <form onSubmit={handleSubmit} noValidate>
          <div className="sp-field">
            <label className="sp-label" htmlFor="sp-name">
              Your name
            </label>
            <input
              id="sp-name"
              className="sp-input"
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="sp-field">
            <label className="sp-label" htmlFor="sp-phone">
              Your Phone
            </label>
            <input
              id="sp-phone"
              className="sp-input"
              type="text"
              name="phone"
              placeholder="Email"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="sp-field">
            <label className="sp-label" htmlFor="sp-service">
              Services
            </label>
            <div className="sp-select-wrap">
              <select
                id="sp-service"
                className="sp-input sp-select"
                name="service"
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <span className="sp-select-arrow">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>

          <button
            className={`sp-submit${submitted ? " sp-submit--done" : ""}`}
            type="submit"
          >
            <span className="sp-submit__icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 2L11 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 2L15 22l-4-9-9-4 20-7z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {submitted ? "Sent!" : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};
export default ContactForm;
