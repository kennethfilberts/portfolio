import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./screen/Home";
import About from "./screen/About";
import Skills from "./screen/Skills";
import Works from "./screen/Works";
import GoTop from "./components/GoTop";
import Contact from "./screen/Contact";

function App() {
  return (
    <div className="bg-bgc text-content">
      <Navbar />
      <section id="Home">
        <Home />
      </section>
      <section id="About" className="bg-content/90">
        <About />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Works" className="bg-content/90">
        <Works />
      </section>
      <section id="Contact">
        <Contact/>
      </section>
      <GoTop/>
    </div>
  );
}

export default App;
