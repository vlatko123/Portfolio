import React from "react";
import "../Components/Projects.css";
import Card from "./Card";

const Projects = ({ projects }) => {
  return (
    <div className="project-list" style={{backgroundImage: "url(background.jpg)"}}>
      <a className="anchor" id="projects"></a>
      <h1>Portfolio projects</h1>
      <div className="card-wrapper">
        {projects.map((item, index) => {
          return (
            <Card
              key={index}
              picture={item.img}
              name={item.name}
              link={item.link}
              code={item.code}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
