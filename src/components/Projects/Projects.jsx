import React from "react";
import "./projects.css";
import wlm from "../../assets/wlm.png";
import pTables from "../../assets/periodic-tables.png";
import recipe from "../../assets/portfolio-recipe.png";
import sai from "../../assets/portfolio-sai.png";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projects-title">My Portfolio</h2>
      <span className="projects-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, sint
        pariatur hic iusto veritatis fuga. Sint in atque necessitatibus ad.
      </span>
      <div className="projects-images">
        <a href="https://client-website.onrender.com/" target="_blank">
          <img src={sai} alt="sai vang website" className="project-image sai" />
        </a>
        <a
          href="https://periodic-tables-restaurant-reservation-fo68.onrender.com/"
          target="_blank"
        >
          <img
            src={pTables}
            alt="periodic tables restaraunt reservation app"
            className="project-image"
          />
        </a>
        <a
          href="https://starter-movie-front-19jdwo4to-cozyfestiv.vercel.app/"
          target="_blank"
        >
          <img src={wlm} alt="we love movies app" className="project-image" />
        </a>
        <a href="https://recipe-app-pgkd.onrender.com/" target="_blank">
          <img
            src={recipe}
            alt="restaurant roundup app"
            className="project-image recipe"
          />
        </a>
        <a
          href="https://periodic-tables-restaurant-reservation-fo68.onrender.com/"
          target="_blank"
        >
          <img
            src={pTables}
            alt="periodic tables restaraunt reservation app"
            className="project-image"
          />
        </a>
        <a
          href="https://starter-movie-front-19jdwo4to-cozyfestiv.vercel.app/"
          target="_blank"
        >
          <img src={wlm} alt="we love movies app" className="project-image" />
        </a>
      </div>{" "}
      <button className="projects-btn"> See More</button>
    </section>
  );
};

export default Projects;
