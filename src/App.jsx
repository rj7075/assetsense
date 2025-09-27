import { useState } from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Navigation from "./components/Navigation";

import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import Portfolio from "./Pages/PortFolio";
import VirtualOffice from "./Pages/VirtualOffice";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/virtual-office" element={<VirtualOffice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
