export default function Footer({ scrollOnClick }) {
  return (
    <footer>
      <ul>
        <a href="https://github.com/mateuszurban">
          <li className="footerIconGithub"></li>{" "}
        </a>

        <a href="https://linkedin.com/in/mateusz-urban-04b822298">
          <li className="footerIconLinkedin"></li>{" "}
        </a>
        <li className="footerIconTop" onClick={() => scrollOnClick("content")}>
          {" "}
        </li>
      </ul>
    </footer>
  );
}
