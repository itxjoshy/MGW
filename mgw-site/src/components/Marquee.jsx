import React, { useState, useRef, useEffect } from "react";
import cisco from "../assets/carousel-logo/cisco-2-logo-svgrepo-com.svg";
import dell from "../assets/carousel-logo/dell-2-logo-svgrepo-com.svg";
import dellEmc from "../assets/carousel-logo/dell-emc-logo.svg";
import eset from "../assets/carousel-logo/eset-logo.svg";
import fortinet from "../assets/carousel-logo/fortinet-logo.svg";
import hp from "../assets/carousel-logo/hp-5.svg";
import ibm from "../assets/carousel-logo/ibm-logo-svgrepo-com.svg";
import microsoft from "../assets/carousel-logo/microsoft-5.svg";
import odoo from "../assets/carousel-logo/odoo.svg";
import oracle from "../assets/carousel-logo/oracle-logo.svg";
import schneider from "../assets/carousel-logo/schneider-electric-2007.svg";
import sophos from "../assets/carousel-logo/sophos-logo.svg";
import symantec from "../assets/carousel-logo/symantec-logo10.svg";
import trendMicro from "../assets/carousel-logo/trend-micro-logo-1.svg";
import VmWare from "../assets/carousel-logo/vmware-1.svg";
import "./marquee.css";
function Marquee() {
  const [repeatCount, setRepeatCount] = useState(12); // will grow if needed so the list covers the viewport

  const baseItems = [
    cisco,
    dell,
    dellEmc,
    eset,
    fortinet,
    hp,
    ibm,
    microsoft,
    odoo,
    oracle,
    schneider,
    sophos,
    symantec,
    trendMicro,
    VmWare,
  ]; // base item(s) to repeat
  const items = Array.from(
    { length: repeatCount },
    (_, i) => baseItems[i % baseItems.length],
  );
  // refs & measurements
  const marqueeRef = useRef(null);
  const firstListRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(12); // seconds

  useEffect(() => {
    const speedPxPerSec = 50; // px/sec - tune to change speed

    const updateMeasurements = () => {
      const listEl = firstListRef.current;
      const containerEl = marqueeRef.current;
      if (!listEl || !containerEl) return;

      const listW = listEl.offsetWidth;
      const containerW = containerEl.offsetWidth;

      // if list is narrower than the visible container, increase repeats so there's no gap
      if (listW < containerW) {
        // increase until listW >= containerW (use multiplier to avoid many re-renders)
        setRepeatCount((prev) => {
          let next = prev;
          // multiply until the produced list width will exceed container width.
          // We can't know exact width until re-render, but doubling is efficient.
          next = Math.max(prev * 2, prev + 4);
          return next;
        });
        return; // wait for next render to measure again
      }

      // set translate distance to exactly the list width to loop seamlessly
      setDistance(listW);
      setDuration(Math.max(4, Math.round(listW / speedPxPerSec)));
    };

    // measure on RAF to ensure layout is ready
    const rafHandle = () => requestAnimationFrame(updateMeasurements);
    rafHandle();

    const ro = new ResizeObserver(rafHandle);
    if (marqueeRef.current) ro.observe(marqueeRef.current);
    if (firstListRef.current) ro.observe(firstListRef.current);

    window.addEventListener("load", rafHandle);
    return () => {
      ro.disconnect();
      window.removeEventListener("load", rafHandle);
      cancelAnimationFrame(rafHandle);
    };
  }, [repeatCount]);
  return (
    <>
      <div className="marquee-container">
        <div
          className="marquee"
          ref={marqueeRef}
          style={{
            ["--marquee-distance"]: distance ? `${distance}px` : "0px",
            ["--marquee-duration"]: `${duration}s`,
          }}
        >
          <div
            className="marquee__track"
            style={{ animationPlayState: distance ? "running" : "paused" }}
          >
            <ul ref={firstListRef} className="marquee__list">
              {items.map((t, i) => (
                <li className="marquee__item" key={i}>
                  <img src={t} alt="" />
                </li>
              ))}
            </ul>

            <ul
              className="marquee__list"
              aria-hidden
              style={{ marginLeft: "4rem" }}
            >
              {items.map((t, i) => (
                <li className="marquee__item" key={`dup-${i}`}>
                  <img src={t} alt="" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Marquee;
