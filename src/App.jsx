import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  function scrollOnClick(prop) {
    const location = document.getElementsByClassName(prop)[0];
    location.scrollIntoView({ behavior: "smooth" });
  }

  // No persistence of preferences is implemented, here. This is a decision, not an accidental omission.
  function darkModeSwitch() {
    document.body.classList.toggle("darkMode");
  }

  return (
    <>
      <div className="content">
        <Nav scrollOnClick={scrollOnClick} darkModeSwitch={darkModeSwitch} />
        <Hero />
        <About />
        <Projects />
        <Footer scrollOnClick={() => scrollOnClick("content")} />
      </div>
    </>
  );
}

export default App;
