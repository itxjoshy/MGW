// ...existing code...
import React, { useState, useRef } from "react";
import "./projdev.css";

const steps = [
  {
    number: "01",
    title: "Requirements gathering",
    subtitle:
      "Stakeholder interviews, site surveys, asset inventory and business process capture to define scope and constraints.",
  },
  {
    number: "02",
    title: "Solution design",
    subtitle:
      "Technical specifications, bill-of-materials, integration points and implementation roadmap.",
  },
  {
    number: "03",
    title: "Architecture planning",
    subtitle:
      "High-level topology, redundancy, scalability, security zones and capacity planning.",
  },
  {
    number: "04",
    title: "Implementation & deployment",
    subtitle:
      "Staging, configuration, deployment runbooks, cutover planning and controlled rollout.",
  },
  {
    number: "05",
    title: "Testing & quality assurance",
    subtitle:
      "Functional, performance, security and acceptance testing with defect tracking and sign-off.",
  },
  {
    number: "06",
    title: "Go-live & optimization",
    subtitle:
      "Production cutover, monitoring setup, initial tuning and early-life support.",
  },
  {
    number: "07",
    title: "Maintenance & continuous improvement",
    subtitle:
      "SLA-driven support, patching, capacity reviews, and iterative enhancements.",
  },
];

function ProjDev() {
  const [openIndex, setOpenIndex] = useState(null);
  const cardRefs = useRef([]);
  const panelRefs = useRef([]);

  const getCollapsedValue = () => {
    const v = getComputedStyle(document.documentElement).getPropertyValue(
      "--step-collapsed-height",
    );
    return v ? v.trim() : "140px";
  };

  const toggle = (i) => {
    const card = cardRefs.current[i];
    // close currently open card (if different)
    if (openIndex !== null && openIndex !== i) {
      const prevCard = cardRefs.current[openIndex];
      if (prevCard) {
        prevCard.style.maxHeight = `${prevCard.scrollHeight}px`;
        requestAnimationFrame(() => {
          prevCard.style.transition = "max-height 320ms ease";
          prevCard.style.maxHeight = getCollapsedValue();
          prevCard.classList.remove("open");
        });
      }
    }

    if (!card) return;
    const isOpen = openIndex === i;
    const collapsed = getCollapsedValue();

    if (isOpen) {
      // collapse active card
      card.style.maxHeight = `${card.scrollHeight}px`;
      requestAnimationFrame(() => {
        card.style.transition = "max-height 320ms ease";
        card.style.maxHeight = collapsed;
        card.classList.remove("open");
      });
      setOpenIndex(null);
      return;
    }

    // open target card: animate from collapsed -> full scrollHeight, then clear maxHeight
    card.style.transition = "none";
    card.style.maxHeight = collapsed;
    requestAnimationFrame(() => {
      const targetHeight = `${card.scrollHeight}px`;
      card.style.transition = "max-height 360ms cubic-bezier(.2,.9,.2,1)";
      card.style.maxHeight = targetHeight;
      card.classList.add("open");

      const onEnd = (e) => {
        if (e.propertyName === "max-height") {
          // clear inline max-height so card can grow naturally if content changes
          if (cardRefs.current[i] === card) card.style.maxHeight = "none";
          card.removeEventListener("transitionend", onEnd);
        }
      };
      card.addEventListener("transitionend", onEnd);
    });

    setOpenIndex(i);
  };

  return (
    <section className="project-delivery-section">
      <div className="container">
        <div className="proj-dev-content">
          <div className="proj-image">
            <svg
              width="100%"
              viewBox="0 0 680 680"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <marker
                  id="arr-orange"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                  orient="auto-start-reverse"
                >
                  <path
                    d="M2 1L8 5L2 9"
                    fill="none"
                    stroke="#E8541A"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </marker>
              </defs>
              <path
                d="M340,340 L340,52 A288,288 0 0,1 596,196 Z"
                fill="#E8541A"
              />
              <path
                d="M340,340 L596,196 A288,288 0 0,1 596,484 Z"
                fill="#C4440E"
              />
              <path
                d="M340,340 L596,484 A288,288 0 0,1 84,484 Z"
                fill="#9E3509"
              />
              <path
                d="M340,340 L84,484 A288,288 0 0,1 84,196 Z"
                fill="#C4440E"
              />
              <path
                d="M340,340 L84,196 A288,288 0 0,1 340,52 Z"
                fill="#1a1a1a"
              />
              <line
                x1="340"
                y1="340"
                x2="340"
                y2="38"
                stroke="white"
                strokeWidth="4"
              />
              <line
                x1="340"
                y1="340"
                x2="598"
                y2="193"
                stroke="white"
                strokeWidth="4"
              />
              <line
                x1="340"
                y1="340"
                x2="598"
                y2="487"
                stroke="white"
                strokeWidth="4"
              />
              <line
                x1="340"
                y1="340"
                x2="82"
                y2="487"
                stroke="white"
                strokeWidth="4"
              />
              <line
                x1="340"
                y1="340"
                x2="82"
                y2="193"
                stroke="white"
                strokeWidth="4"
              />
              <circle
                cx="340"
                cy="340"
                r="290"
                fill="none"
                stroke="white"
                strokeWidth="2"
                opacity="0.3"
              />
              <circle cx="340" cy="340" r="130" fill="white" />
              <circle
                cx="340"
                cy="340"
                r="130"
                fill="none"
                stroke="#E8541A"
                strokeWidth="2"
              />
              <text
                x="340"
                y="326"
                textAnchor="middle"
                fontFamily="'Syne', sans-serif"
                fontSize="22"
                fontWeight="700"
                fill="#0F0E0D"
              >
                System
              </text>
              <text
                x="340"
                y="354"
                textAnchor="middle"
                fontFamily="'Syne', sans-serif"
                fontSize="22"
                fontWeight="700"
                fill="#0F0E0D"
              >
                Integration
              </text>
              <path
                d="M270,340 A70,70 0 1,1 340,410"
                fill="none"
                stroke="#E8541A"
                strokeWidth="2"
                strokeLinecap="round"
                markerEnd="url(#arr-orange)"
              />
              <text
                textAnchor="middle"
                fontFamily="'Syne', sans-serif"
                fontSize="15"
                fontWeight="600"
                fill="white"
              >
                <tspan x="463" y="148">
                  Consultancy &amp;
                </tspan>
                <tspan x="463" dy="20">
                  Capture
                </tspan>
                <tspan x="463" dy="20">
                  Requirements
                </tspan>
              </text>
              <text
                textAnchor="middle"
                fontFamily="'Syne', sans-serif"
                fontSize="15"
                fontWeight="600"
                fill="white"
              >
                <tspan x="573" y="328">
                  Plan and
                </tspan>
                <tspan x="573" dy="20">
                  Design
                </tspan>
              </text>
              <text
                textAnchor="middle"
                fontFamily="'Syne', sans-serif"
                fontSize="15"
                fontWeight="600"
                fill="white"
              >
                <tspan x="340" y="560">
                  Implementation
                </tspan>
              </text>
              <text
                textAnchor="middle"
                fontFamily="'Syne', sans-serif"
                fontSize="15"
                fontWeight="600"
                fill="white"
              >
                <tspan x="107" y="328">
                  Validate
                </tspan>
                <tspan x="107" dy="20">
                  Performance
                </tspan>
              </text>
              <text
                textAnchor="middle"
                fontFamily="'Syne', sans-serif"
                fontSize="15"
                fontWeight="600"
                fill="white"
              >
                <tspan x="217" y="148">
                  Support
                </tspan>
              </text>
              <circle cx="434" cy="108" r="10" fill="rgba(255,255,255,0.2)" />
              <text
                x="434"
                y="113"
                textAnchor="middle"
                fontFamily="'Syne', sans-serif"
                fontSize="11"
                fontWeight="700"
                fill="white"
              >
                1
              </text>
              <circle cx="590" cy="290" r="10" fill="rgba(255,255,255,0.2)" />
              <text
                x="590"
                y="295"
                textAnchor="middle"
                fontFamily="'Syne', sans-serif"
                fontSize="11"
                fontWeight="700"
                fill="white"
              >
                2
              </text>
              <circle cx="440" cy="590" r="10" fill="rgba(255,255,255,0.2)" />
              <text
                x="440"
                y="595"
                textAnchor="middle"
                fontFamily="'Syne', sans-serif"
                fontSize="11"
                fontWeight="700"
                fill="white"
              >
                3
              </text>
              <circle cx="90" cy="290" r="10" fill="rgba(255,255,255,0.2)" />
              <text
                x="90"
                y="295"
                textAnchor="middle"
                fontFamily="'Syne', sans-serif"
                fontSize="11"
                fontWeight="700"
                fill="white"
              >
                4
              </text>
              <circle cx="187" cy="108" r="10" fill="rgba(255,255,255,0.2)" />
              <text
                x="187"
                y="113"
                textAnchor="middle"
                fontFamily="'Syne', sans-serif"
                fontSize="11"
                fontWeight="700"
                fill="white"
              >
                5
              </text>
            </svg>
          </div>

          <div
            className="steps-grid"
            role="list"
            aria-label="Project delivery steps"
          >
            {steps.map((step, i) => (
              <div
                className={`step-card ${openIndex === i ? "open" : ""}`}
                key={step.number}
                style={{
                  borderBottom:
                    steps.length === i + 1
                      ? "none"
                      : "1px solid rgba(255, 255, 255, 0.45)",
                }}
                ref={(el) => (cardRefs.current[i] = el)}
              >
                <div className="step-head">
                  <div className="step-meta">
                    <div className="step-num">{step.number}</div>
                    <h4 className="step-title">{step.title}</h4>
                  </div>

                  <button
                    className={`step-toggle ${openIndex === i ? "open" : ""}`}
                    onClick={() => toggle(i)}
                    aria-expanded={openIndex === i}
                    aria-controls={`panel-${i}`}
                    aria-label={`${openIndex === i ? "Collapse" : "Expand"} ${step.title}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  id={`panel-${i}`}
                  className="step-panel"
                  ref={(el) => (panelRefs.current[i] = el)}
                  aria-hidden={openIndex === i ? "false" : "true"}
                >
                  <div className="step-subtitle">{step.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjDev;
