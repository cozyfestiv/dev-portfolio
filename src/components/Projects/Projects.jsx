import React from "react";
import "./projects.css";
import wlm from "../../assets/wlm.png";
import pTables from "../../assets/periodic-tables.png";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projects-title">My Portfolio</h2>
      <span className="projects-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, sint
        pariatur hic iusto veritatis fuga. Sint in atque necessitatibus ad.
      </span>
      <div className="projects-images">
        <img src={wlm} alt="we love movies app" className="project-image" />
        <img
          src={pTables}
          alt="periodic tables restaraunt reservation app"
          className="project-image"
        />
        <img src={wlm} alt="we love movies app" className="project-image" />
        <img
          src={pTables}
          alt="periodic tables restaraunt reservation app"
          className="project-image"
        />
        <img src={wlm} alt="we love movies app" className="project-image" />
        <img
          src={pTables}
          alt="periodic tables restaraunt reservation app"
          className="project-image"
        />
      </div>{" "}
      <button className="projects-btn"> See More</button>
    </section>
  );
};

export default Projects;
