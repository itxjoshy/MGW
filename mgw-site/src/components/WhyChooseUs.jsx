import React from "react";
import "./whychooseus.css";
const data = [
  {
    title: "Experienced & Certified Engineers",
  },
  {
    title: "Proven Track Record Across Africa",
  },
  {
    title: "Competitive Pricing Models",
  },
  {
    title: "Strong Vendor Partnerships",
  },
  {
    title: "Unmatched Support & Maintenance",
  },
];
function WhyChooseUs() {
  return (
    <section className="why-choose-us-section">
      <div className="container">
        <div className="section-header">
          <h2>why choose us?</h2>
          <p>
            We are committed to delivering the best services to our clients.
          </p>
        </div>
        <div className="section-grid">
          {data.map((item, index) => (
            <div className="grid-item" key={index}>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
