import logo from "../assets/logo.png";
import "./footer.css";
export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft-main">
        <div>
          <div className="ft-brand-logo">
            <div className="logo">
              <img src={logo} alt="Footer logo" />
            </div>
          </div>
          <p className="ft-desc">
            Africa's leading system integrator — delivering scalable, secure
            technology solutions to enterprises and governments.
          </p>
        </div>

        <div className="ft-col">
          <h4>Navigate</h4>
          <ul>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#industries">Industries</a>
            </li>
            <li>
              <a href="#partners">Partners</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="ft-col">
          <h4>Contact</h4>
          <div className="ft-contact">
            <span>
              08060076250
              <br />
              07030881335
            </span>
            <a href="mailto:info@smartsecure.com">info@smartsecure.com</a>
            <span>Abuja · Lagos · Port Harcourt</span>
          </div>
        </div>
      </div>

      <div className="ft-bottom">
        <span className="ft-copy">
          © 2026 SmartSecure Business Solutions Limited. All Rights Reserved.
        </span>
        <div className="ft-socials">
          <a href="#" className="ft-social" aria-label="LinkedIn">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="#" className="ft-social" aria-label="Twitter">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
