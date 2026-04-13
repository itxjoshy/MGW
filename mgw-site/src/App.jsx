import React from "react";
import Header from "./components/Header";
import Main from "./components/main";
import About from "./components/About";
import Marquee from "./components/Marquee";
import VisionMission from "./components/VisionMission";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Banner from "./components/Banner";
import ProjDev from "./components/ProjDev";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <>
      <Header />
      <Main marquee={<Marquee />} />
      <About />
      <VisionMission />
      <Services />
      <WhyChooseUs />
      <Banner />
      <ProjDev />
      <ContactUs />
    </>
  );
}

export default App;
