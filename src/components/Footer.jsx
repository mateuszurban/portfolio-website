export default function Footer({ scrollOnClick }) {
  return (
    <footer>
      <ul>
        <a
          href="https://github.com/mateuszurban"
          aria-label="Visit my Github profile"
        >
          <li className="footerIconGithub"></li>{" "}
        </a>

        <a
          href="https://linkedin.com/in/mateusz-urban-04b822298"
          aria-label="Visit my LinkedIn profile"
        >
          <li className="footerIconLinkedin"></li>{" "}
        </a>
        <li
          className="footerIconTop"
          aria-label="Back to top"
          onClick={() => scrollOnClick("content")}
        >
          {" "}
        </li>
      </ul>
    </footer>
  );
}
