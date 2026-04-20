import React from "react";
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
import "./partners.css";
function Partners() {
  const Images = [
    cisco,
    dell,
    fortinet,
    ibm,
    odoo,
    schneider,
    symantec,
    VmWare,
    dellEmc,
    eset,
    hp,
    microsoft,
    oracle,
    sophos,
    trendMicro,
  ];
  return (
    <section id="partners" className="partners-section">
      <div className="container">
        <h2>Our Partners</h2>
        <p>trusted by widely recognoised names in the industry</p>
        <div className="image-grid">
          {Images.map((image, _i) => (
            <div className="image-container">
              <img src={image} key={_i} alt="partner-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
