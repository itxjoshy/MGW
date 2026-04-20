import React from "react";
import "./services.css";
const services = [
  {
    title: "IT Infrastructure Solutions",
    description:
      "We provide end-to-end IT infrastructure solutions to help you build and manage your IT environment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="2"
          y="3"
          width="20"
          height="14"
          rx="2"
          stroke="#10b981"
          stroke-width="1.5"
          fill="none"
        />
        <path
          d="M8 21h8M12 17v4"
          stroke="#10b981"
          stroke-width="1.5"
          stroke-linecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Network & Communication",
    description:
      "We offer a range of network and communication services to ensure seamless connectivity and collaboration.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L2 7l10 5 10-5-10-5z"
          stroke="#10b981"
          stroke-width="1.5"
          stroke-linejoin="round"
          fill="none"
        />
        <path
          d="M2 17l10 5 10-5"
          stroke="#10b981"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
        <path
          d="M2 12l10 5 10-5"
          stroke="#10b981"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    description:
      "Our cloud solutions help you leverage the power of cloud computing for your business needs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"
          stroke="#10b981"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Data Protection",
    description:
      "We provide comprehensive data protection solutions to safeguard your critical information.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          stroke="#10b981"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Security Solutions",
    description:
      "We offer a range of security solutions to protect your business from cyber threats.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="3"
          y="11"
          width="18"
          height="11"
          rx="2"
          stroke="#10b981"
          stroke-width="1.5"
          fill="none"
        />
        <path
          d="M7 11V7a5 5 0 0110 0v4"
          stroke="#10b981"
          stroke-width="1.5"
          stroke-linecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Managed Services",
    description:
      "Our managed services provide you with the support you need to keep your IT environment running smoothly.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="12"
          cy="12"
          r="3"
          stroke="#10b981"
          stroke-width="1.5"
          fill="none"
        />
        <path
          d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"
          stroke="#10b981"
          stroke-width="1.5"
          stroke-linecap="round"
          fill="none"
        />
      </svg>
    ),
  },
];

function Services() {
  return (
    <>
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">what can we do for you?</h2>
          <p className="section-subtitle">
            We offer a variety of services to help you achieve your goals.
          </p>
          <div className="section-content">
            <ul>
              {services.map((service, index) => (
                <li key={index} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <div className="list-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
