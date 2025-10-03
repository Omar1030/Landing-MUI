import Hero from "./hero";
import Navbar from "../../layout/navbar";
import Process from "./process";
import About from "./about";
import Projects from "./projects";
import Hiring from "./hiring";
import Learn from "./learn";
import Trust from "./trust";
import Look from "./look";
import Sub from "./sub";
import Footer from "../../layout/footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Process />
      <About />
      <Projects />
      <Hiring />
      <Learn />
      <Trust />
      <Look />
      <Sub />
      <Footer />
    </>
  );
};

export default Landing;
