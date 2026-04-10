import React from "react";
import Header from "./components/Header";
import Main from "./components/main";
import About from "./components/About";
import Marquee from "./components/Marquee";
import VisionMission from "./components/VisionMission";
import Services from "./components/Services";
function App() {
  return (
    <>
      <Header />
      <Main marquee={<Marquee />} />
      <About />
      <VisionMission />
      <Services />
    </>
  );
}

export default App;
