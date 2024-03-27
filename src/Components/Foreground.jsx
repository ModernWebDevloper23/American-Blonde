import React from "react";
import Home from "./Home";
import CanSection from "./CanSection";
import ContactSection from "./ContactSection";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
import LocomotiveScroll from "locomotive-scroll";

function Foreground({modelDecider}) {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="foreground h-[410vh] w-full relative">
      <Home modelDecider={modelDecider} />
      <CanSection modelDecider={modelDecider} />
      <ContactSection />
      <AboutSection />
      {/* <CanvasSection /> */}
      <Footer />
    </div>
  );
}

export default Foreground;
