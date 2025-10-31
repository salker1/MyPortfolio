// app: provides the site layout and sets up client-side routing

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Education from "./Education";
import Services from "./Services";
import Contact from "./Contact";

export default function App() {
  return (
    // BrowserRouter to switch pages without a full reload
    <BrowserRouter>
      {/* persistent top navigation */}
      <Navbar />

      {/* route table: each path renders the matching page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
