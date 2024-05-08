export default function Projects() {
  return (
    <section className="projects">
      <h3 id="projects">Projects</h3>
      <ul>
        <li className="project">
          <img src="./apollo_prev_1.png" alt="project preview image" />
          <div className="projectDescription">
            <h4>
              <a href="https://nextjs-project-apollo.vercel.app/">
                Apollo Coffee{" "}
              </a>
            </h4>
            <p>
              Ecommerce website with a focus on showcasing a wide range of
              products. Uses lots of Next.js routing, React Components & CSS
              modules.
            </p>
            <ul className="projectsTech">
              <li>Next.js</li>
              <li>React</li>
              <li>JavaScript</li>
              <li>CSS</li>
            </ul>
          </div>
        </li>
        <li className="project">
          <img src="./portfolio_prev_0.png" alt="project preview image" />
          <div className="projectDescription">
            <h4>Personal website</h4>
            <p>
              Elegantly designed site featuring semantic HTML structures,
              stylish CSS, and React Router for fluid user experience.
            </p>
            <ul className="projectsTech">
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
}
