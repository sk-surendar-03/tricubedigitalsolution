import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Portfolio from "./pages/Portfolio";
import Internship from "./pages/Internship";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
