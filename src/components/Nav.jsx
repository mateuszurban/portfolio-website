export default function Nav({ scrollOnClick, darkModeSwitch }) {
  return (
    <nav>
      <li onClick={() => scrollOnClick("about")}>about</li>
      <li onClick={() => scrollOnClick("projects")}>projects</li>
      <li>
        <a
          target="_blank"
          href="https://linkedin.com/in/mateusz-urban-04b822298"
        >
          experience
        </a>
      </li>
      <li
        style={{ backgroundImage: "./moon_black.svg" }}
        onClick={() => darkModeSwitch()}
      ></li>
    </nav>
  );
}
