import React from "react";
import "./projects.css";
import wlm from "../../assets/wlm.png";
import pTables from "../../assets/periodic-tables.png";
import recipe from "../../assets/portfolio-recipe.png";
import sai from "../../assets/portfolio-sai.png";
import flash from "../../assets/portfolio-flash.png";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projects-title">Projects</h2>
      <span className="projects-text">
        Some projects will look empty, but give it a minute to load the backend.
      </span>
      <div className="projects-images">
        <div className="project-image sai">
          <a href="https://client-website.onrender.com/" target="_blank">
            <img
              src={sai}
              alt="sai vang website"
              className="project-image proj-sai"
            />
          </a>
          <div className="project-text-overlay">
            <h3 className="project-title">Sai Vang Portfolio</h3>
            <p className="project-text">
              A client app for making appointments for a car salesman. Developed
              with Kia Moung{" "}
            </p>
            <p className="project-lang">
              {" "}
              react | html | css | javascript | googlemaps api{" "}
            </p>
          </div>
        </div>
        <div className="project-image proj-rest">
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
          <div className="project-text-overlay">
            <h3 className="project-title">Restaurant Reservation App</h3>
            <p className="project-text">
              An app to manage reservations by creating, editing, seating, and
              canceling reservations.
            </p>
            <p className="project-lang">
              {" "}
              node | express | knex | jest | puppeteer | postgresql | react |
              html | css | javascript | mobile responsive{" "}
            </p>
          </div>
        </div>
        <div className="project-image proj-wlm">
          <a
            href="https://starter-movie-front-19jdwo4to-cozyfestiv.vercel.app/"
            target="_blank"
          >
            <img src={wlm} alt="we love movies app" className="project-image" />
          </a>
          <div className="project-text-overlay">
            <h3 className="project-title">We Love Movies App</h3>
            <p className="project-text">
              An app to find movies and see which theaters are showing them.
            </p>
            <p className="project-lang">
              {" "}
              node | express | knex | postgresql | react | html | css |
              javascript{" "}
            </p>
          </div>
        </div>
        <div className="project-image proj-flash">
          <a href="https://flashcard-app-3n73.onrender.com/" target="_blank">
            <img src={flash} alt="flashcard app" className="project-image" />
          </a>
          <div className="project-text-overlay">
            <h3 className="project-title">Flashcard App</h3>
            <p className="project-text">
              An app to collect, make, edit, delete, and study flashcards.{" "}
            </p>
            <p className="project-lang"> react | html | css | javascript </p>
          </div>
        </div>
        <div className="project-image proj-recipe">
          <a href="https://recipe-app-pgkd.onrender.com/" target="_blank">
            <img
              src={recipe}
              alt="restaurant roundup app"
              className="project-image recipe"
            />
          </a>
          <div className="project-text-overlay">
            <h3 className="project-title">Recipe App</h3>
            <p className="project-text">
              An app to create, store, and manage recipes.{" "}
            </p>
            <p className="project-lang"> react | html | css | javascript </p>
          </div>
        </div>

        {/* <a
          href="https://starter-movie-front-19jdwo4to-cozyfestiv.vercel.app/"
          target="_blank"
        >
          <img src={wlm} alt="we love movies app" className="project-image" />
        </a> */}
      </div>{" "}
      <button className="projects-btn"> See More</button>
    </section>
  );
};

export default Projects;
