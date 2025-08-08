import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Resume />
      <Contact />
    </>
  );
}
