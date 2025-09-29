import React from "react";

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProcessSection from "../components/ProcessSection";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <Contact />
    </div>
  );
};

export default Home;
