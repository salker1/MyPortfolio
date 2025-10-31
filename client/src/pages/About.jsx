export default function About() {
  return (
    <main>
      <h1>About Me</h1>

      <section style={{ maxWidth: 900, margin: "auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "140px 1fr",
            gap: "1.25rem",
            alignItems: "start",
            background: "#fff",
            padding: "1rem 1.5rem",
            borderRadius: "12px",
            boxShadow: "0 6px 22px rgba(0,0,0,0.08)",
          }}
        >
          <img
            src="/images/profile.jpg"
            alt="Sedra Alkero"
            style={{ width: 120, height: 120, objectFit: "cover", borderRadius: "12px" }}
          />

          <div>
            <p>
              I’m Sedra Alkero, a second-year student in the Artificial
              Intelligence Software Engineering Technology program at{" "}
             Centennial College.
            </p>

            <p>
              This site presents a simple React portfolio project and a brief overview of my
              studies.
            </p>
          </div>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            padding: "0.7rem 1.1rem",
            borderRadius: "10px",
            background: "linear-gradient(90deg,#F67280,#355C7D)",
            color: "#fff",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          View Resume (PDF)
        </a>
      </section>
    </main>
  );
}
