export default function Projects() {
  return (
    <main>
      <h1>Projects</h1>

      <div className="cards">
        <article className="card">
          <div className="thumb">
            <img
              src={`${import.meta.env.BASE_URL}images/reactproject.png`}
              alt="React portfolio preview"
            />
          </div>
          <h3>Portfolio (React)</h3>
          <p>A multi-page React portfolio built with Vite and React Router.</p>
        </article>

        <article className="card">
          <div className="thumb">
            <img
              src={`${import.meta.env.BASE_URL}images/nodeserver.png`}
              alt="Node.js mini server preview"
            />
          </div>
          <h3>Node.js Mini Server</h3>
          <p>A small HTTP server that responds with “Hello World”.</p>
        </article>

        <article className="card">
          <div className="thumb">
            <img
              src={`${import.meta.env.BASE_URL}images/es6practice.png`}
              alt="ES6 practice preview"
            />
          </div>
          <h3>ES6 Practice</h3>
          <p>Examples using let/const, arrow functions, classes, and destructuring.</p>
        </article>
      </div>
    </main>
  );
}
