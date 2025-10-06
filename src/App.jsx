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
import { Toaster } from "react-hot-toast";
import Privacy from "./Pages/Privacy";
import TermsAndConditions from "./Pages/Termandcondition";
import RefundPolicy from "./Pages/Refund";
import ScrollToTop from "./components/ScrollTop";

function App() {
  return (
    <>
      <Navigation />
      <Toaster />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
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
