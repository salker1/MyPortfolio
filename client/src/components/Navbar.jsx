import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="logo">SA</div>
      <nav style={{ display: "flex", gap: "12px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
