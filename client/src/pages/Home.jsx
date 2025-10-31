import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <h1>Sedra Alkero — Portfolio</h1>
      <p style={{ maxWidth: 760 }}>
        React portfolio for my Web Application Development course. This site includes a short profile,
        projects, education, services, and a contact form.
      </p>
      <Link to="/about" className="btn">About Me</Link>
    </main>
  );
}
