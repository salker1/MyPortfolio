export default function Services() {
  return (
    <main>
      <h1>Services</h1>

      <div className="cards">
        <article className="card">
          <div className="thumb">
            <img src={`${import.meta.env.BASE_URL}images/webdev.png`} alt="Web development" />
          </div>
          <h3>Web Development</h3>
          <ul>
            <li>React page setup and routing</li>
            <li>Basic UI components and styling</li>
            <li>Simple multi-page sites</li>
          </ul>
        </article>

        <article className="card">
          <div className="thumb">
            <img src={`${import.meta.env.BASE_URL}images/mobile.png`} alt="Mobile apps" />
          </div>
          <h3>Mobile Apps</h3>
          <ul>
            <li>Intro React Native layouts</li>
            <li>Simple screens and navigation</li>
            <li>Basic prototypes</li>
          </ul>
        </article>

        <article className="card">
          <div className="thumb">
            <img src={`${import.meta.env.BASE_URL}images/programming.png`} alt="General programming" />
          </div>
          <h3>General Programming</h3>
          <ul>
            <li>JavaScript (ES6+) practice</li>
            <li>Basic Node.js scripts</li>
            <li>Debugging and refactoring</li>
          </ul>
        </article>
      </div>
    </main>
  );
}

