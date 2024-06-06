export default function Projects() {
  return (
    <section className="projects">
      <h3 id="projects">Projects</h3>
      <ul>
        <li className="project">
          <img src="./home_prev_0.png" alt="project preview image" />
          <div className="projectDescription">
            <h4>
              <a
                target="_blank"
                href="https://mateuszurban.github.io/ecommerce-react/"
              >
                @HOME - React e-commerce{" "}
              </a>
            </h4>
            <p>
              Mobile first e-commerce developed with React and React Router.
              Focused on RWD, with emphasis on images and clean design.
            </p>
            <ul className="projectsTech">
              <li>React</li>
              <li>React Router</li>
              <li>RWD</li>
            </ul>
          </div>
        </li>
        <li className="project">
          <img src="./apollo_prev_0.png" alt="project preview image" />

          <div className="projectDescription">
            <h4>
              <a
                target="_blank"
                href="https://nextjs-project-apollo.vercel.app/"
              >
                Apollo Coffee - Next.js e-commerce{" "}
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
              <li>CSS</li>
            </ul>
          </div>
        </li>
        <li className="project">
          <img src="./daily_prev_0.png" alt="project preview image" />
          <div className="projectDescription">
            <h4>
              <a
                target="_blank"
                href="https://mateuszurban.github.io/project-todo-react/"
              >
                Daily! - built with TypeScript
              </a>
            </h4>
            <p>
              Task management app, based on a personal need for a specific
              productivity tool functions. Developed with TypeScript and React,
              ensuring optimal resource consumption and creating intuitive
              interface qualities.
            </p>
            <ul className="projectsTech">
              <li>TypeScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </li>
        <li className="project">
          <img src="./portfolio_prev_0.png" alt="project preview image" />
          <div className="projectDescription">
            <h4>Personal website</h4>
            <p>
              Elegantly designed site featuring semantic HTML structures,
              stylish CSS, and React for fluid user experience.
            </p>
            <ul className="projectsTech">
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
}
