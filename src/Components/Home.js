import React, { useState, useEffect } from "react";
import "../Components/Home.css";
import { projectsList } from "../project-list";
import About from "./About";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Projects from "../Components/Projects";
import Contact from "./Contact";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsList);
  }, []);

  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
};

export default Home;
