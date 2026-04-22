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
    <section id="project-delivery" className="project-delivery-section">
      <div className="container">
        <div className="section-heading">
          <h2>Our Approach</h2>
          <p>
            From discovery to optimisation — practical, secure systems
            integration across Africa.
          </p>
        </div>

        <div className="proj-dev-content">
          <div className="proj-image">
            <svg
              viewBox="0 0 900 900"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              className="system-integration-wheel"
            >
              <defs>
                <marker
                  id="arr-green"
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
                    stroke="#059669"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </marker>

                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
                </radialGradient>

                <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background glow */}
              <circle cx="450" cy="450" r="380" fill="url(#centerGlow)" />

              {/* ── SEGMENTS ── */}
              <path
                d="M450,450 L450,105 A345,345 0 0,1 719.7,234.9 Z"
                fill="#059669"
              />
              <path
                d="M450,450 L719.7,234.9 A345,345 0 0,1 786.4,526.8 Z"
                fill="#047857"
              />
              <path
                d="M450,450 L786.4,526.8 A345,345 0 0,1 599.7,760.8 Z"
                fill="#064e3b"
              />
              <path
                d="M450,450 L599.7,760.8 A345,345 0 0,1 300.3,760.8 Z"
                fill="#022c22"
              />
              <path
                d="M450,450 L300.3,760.8 A345,345 0 0,1 113.6,526.8 Z"
                fill="#064e3b"
              />
              <path
                d="M450,450 L113.6,526.8 A345,345 0 0,1 180.3,234.9 Z"
                fill="#047857"
              />
              <path
                d="M450,450 L180.3,234.9 A345,345 0 0,1 450,105 Z"
                fill="#059669"
              />

              {/* ── DIVIDER LINES ── */}
              <line
                x1="450"
                y1="450"
                x2="450"
                y2="102"
                stroke="#0f172a"
                strokeWidth="3"
              />
              <line
                x1="450"
                y1="450"
                x2="721"
                y2="233"
                stroke="#0f172a"
                strokeWidth="3"
              />
              <line
                x1="450"
                y1="450"
                x2="788"
                y2="525"
                stroke="#0f172a"
                strokeWidth="3"
              />
              <line
                x1="450"
                y1="450"
                x2="601"
                y2="763"
                stroke="#0f172a"
                strokeWidth="3"
              />
              <line
                x1="450"
                y1="450"
                x2="299"
                y2="763"
                stroke="#0f172a"
                strokeWidth="3"
              />
              <line
                x1="450"
                y1="450"
                x2="112"
                y2="525"
                stroke="#0f172a"
                strokeWidth="3"
              />
              <line
                x1="450"
                y1="450"
                x2="179"
                y2="233"
                stroke="#0f172a"
                strokeWidth="3"
              />

              {/* Outer ring */}
              <circle
                cx="450"
                cy="450"
                r="346"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.5"
                opacity="0.35"
              />

              {/* ── SEGMENT LABELS ── */}

              {/* S1: Requirements Gathering */}
              <g transform="translate(541.1,260.8) rotate(25.714)">
                <text
                  textAnchor="middle"
                  fontFamily="'Syne',sans-serif"
                  fontSize="13"
                  fontWeight="700"
                  fill="white"
                  y="-17"
                >
                  Requirements
                </text>
                <text
                  textAnchor="middle"
                  fontFamily="'Syne',sans-serif"
                  fontSize="13"
                  fontWeight="700"
                  fill="white"
                  y="0"
                >
                  Gathering
                </text>
                <text
                  textAnchor="middle"
                  fontFamily="'DM Sans',sans-serif"
                  fontSize="10.5"
                  fontWeight="400"
                  fill="#a7f3d0"
                  y="15"
                >
                  (Data Mining)
                </text>
              </g>

              {/* S2: Solution Design */}
              <g transform="translate(654.7,403.3) rotate(77.143)">
                <text
                  textAnchor="middle"
                  fontFamily="'Syne',sans-serif"
                  fontSize="13"
                  fontWeight="700"
                  fill="white"
                  y="-16"
                >
                  Solution
                </text>
                <text
                  textAnchor="middle"
                  fontFamily="'Syne',sans-serif"
                  fontSize="13"
                  fontWeight="700"
                  fill="white"
                  y="0"
                >
                  Design
                </text>
                <text
                  textAnchor="middle"
                  fontFamily="'DM Sans',sans-serif"
                  fontSize="10.5"
                  fontWeight="400"
                  fill="#a7f3d0"
                  y="15"
                >
                  (Blueprint)
                </text>
              </g>

              {/* S3: Architecture Planning */}
              <g transform="translate(614.2,580.9) rotate(-51.429)">
                <text
                  textAnchor="middle"
                  fontFamily="'Syne',sans-serif"
                  fontSize="13"
                  fontWeight="700"
                  fill="white"
                  y="-8"
                >
                  Architecture
                </text>
                <text
                  textAnchor="middle"
                  fontFamily="'Syne',sans-serif"
                  fontSize="13"
                  fontWeight="700"
                  fill="white"
                  y="9"
                >
                  Planning
                </text>
              </g>

              {/* S4: Implementation & Deployment */}
              <g transform="translate(450,660) rotate(0)">
                <text
                  textAnchor="middle"
                  fontFamily="'Syne',sans-serif"
                  fontSize="13"
                  fontWeight="700"
                  fill="white"
                  y="-8"
                >
                  Implementation
                </text>
                <text
                  textAnchor="middle"
                  fontFamily="'Syne',sans-serif"
                  fontSize="13"
                  fontWeight="700"
                  fill="white"
                  y="9"
                >
                  &amp; Deployment
                </text>
              </g>

              {/* S5: Testing & Quality Assurance */}
              <g transform="translate(285.8,580.9) rotate(51.429)">
                <text
                  textAnchor="middle"
                  fontFamily="'Syne',sans-serif"
                  fontSize="13"
                  fontWeight="700"
                  fill="white"
                  y="-17"
                >
                  Testing &amp;
                </text>
                <text
                  textAnchor="middle"
                  fontFamily="'Syne',sans-serif"
                  fontSize="13"
                  fontWeight="700"
                  fill="white"
                  y="0"
                >
                  Quality
                </text>
                <text
                  textAnchor="middle"
                  fontFamily="'Syne',sans-serif"
                  fontSize="13"
                  fontWeight="700"
                  fill="white"
                  y="17"
                >
                  Assurance
                </text>
              </g>

              {/* S6: Go-Live & Optimization */}
              <g transform="translate(245.3,403.3) rotate(282.857)">
                <text
                  textAnchor="middle"
                  fontFamily="'Syne',sans-serif"
                  fontSize="13"
                  fontWeight="700"
                  fill="white"
                  y="-8"
                >
                  Go-Live &amp;
                </text>
                <text
                  textAnchor="middle"
                  fontFamily="'Syne',sans-serif"
                  fontSize="13"
                  fontWeight="700"
                  fill="white"
                  y="9"
                >
                  Optimization
                </text>
              </g>

              {/* S7: Maintenance & Continuous Improvement */}
              <g transform="translate(358.9,260.8) rotate(334.286)">
                <text
                  textAnchor="middle"
                  fontFamily="'Syne',sans-serif"
                  fontSize="13"
                  fontWeight="700"
                  fill="white"
                  y="-17"
                >
                  Maintenance &amp;
                </text>
                <text
                  textAnchor="middle"
                  fontFamily="'Syne',sans-serif"
                  fontSize="13"
                  fontWeight="700"
                  fill="white"
                  y="0"
                >
                  Continuous
                </text>
                <text
                  textAnchor="middle"
                  fontFamily="'Syne',sans-serif"
                  fontSize="13"
                  fontWeight="700"
                  fill="white"
                  y="17"
                >
                  Improvement
                </text>
              </g>

              {/* ── NUMBER BADGES ── */}
              <circle
                cx="586.7"
                cy="166.2"
                r="15"
                fill="rgba(255,255,255,0.2)"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.2"
              />
              <text
                x="586.7"
                y="171.5"
                textAnchor="middle"
                fontFamily="'Syne',sans-serif"
                fontSize="13"
                fontWeight="800"
                fill="white"
              >
                1
              </text>

              <circle
                cx="757.1"
                cy="379.9"
                r="15"
                fill="rgba(255,255,255,0.2)"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.2"
              />
              <text
                x="757.1"
                y="385.2"
                textAnchor="middle"
                fontFamily="'Syne',sans-serif"
                fontSize="13"
                fontWeight="800"
                fill="white"
              >
                2
              </text>

              <circle
                cx="696.3"
                cy="646.4"
                r="15"
                fill="rgba(255,255,255,0.2)"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.2"
              />
              <text
                x="696.3"
                y="651.7"
                textAnchor="middle"
                fontFamily="'Syne',sans-serif"
                fontSize="13"
                fontWeight="800"
                fill="white"
              >
                3
              </text>

              <circle
                cx="450"
                cy="765"
                r="15"
                fill="rgba(255,255,255,0.2)"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.2"
              />
              <text
                x="450"
                y="770.3"
                textAnchor="middle"
                fontFamily="'Syne',sans-serif"
                fontSize="13"
                fontWeight="800"
                fill="white"
              >
                4
              </text>

              <circle
                cx="203.7"
                cy="646.4"
                r="15"
                fill="rgba(255,255,255,0.2)"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.2"
              />
              <text
                x="203.7"
                y="651.7"
                textAnchor="middle"
                fontFamily="'Syne',sans-serif"
                fontSize="13"
                fontWeight="800"
                fill="white"
              >
                5
              </text>

              <circle
                cx="142.9"
                cy="379.9"
                r="15"
                fill="rgba(255,255,255,0.2)"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.2"
              />
              <text
                x="142.9"
                y="385.2"
                textAnchor="middle"
                fontFamily="'Syne',sans-serif"
                fontSize="13"
                fontWeight="800"
                fill="white"
              >
                6
              </text>

              <circle
                cx="313.3"
                cy="166.2"
                r="15"
                fill="rgba(255,255,255,0.2)"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.2"
              />
              <text
                x="313.3"
                y="171.5"
                textAnchor="middle"
                fontFamily="'Syne',sans-serif"
                fontSize="13"
                fontWeight="800"
                fill="white"
              >
                7
              </text>

              {/* ── CENTER CIRCLE ── */}
              <circle cx="450" cy="450" r="148" fill="#0f172a" />
              <circle
                cx="450"
                cy="450"
                r="148"
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                opacity="0.8"
              />
              <circle
                cx="450"
                cy="450"
                r="140"
                fill="none"
                stroke="#059669"
                strokeWidth="1"
                opacity="0.25"
              />

              <text
                x="450"
                y="436"
                textAnchor="middle"
                fontFamily="'Syne',sans-serif"
                fontSize="22"
                fontWeight="800"
                fill="#10b981"
              >
                System
              </text>
              <text
                x="450"
                y="464"
                textAnchor="middle"
                fontFamily="'Syne',sans-serif"
                fontSize="22"
                fontWeight="800"
                fill="#10b981"
              >
                Integration
              </text>

              {/* Circular arrow */}
              <path
                d="M375,450 A75,75 0 1,1 450,525"
                fill="none"
                stroke="#059669"
                strokeWidth="2"
                strokeLinecap="round"
                markerEnd="url(#arr-green)"
                opacity="0.6"
              />
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
