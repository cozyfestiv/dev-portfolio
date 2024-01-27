import React from "react";
import "./skills.css";
import reactLogo from "../../assets/react.png";
import expressLogo from "../../assets/express.png";
import postgresLogo from "../../assets/postgres.png";

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="skill-title">What I do</h1>
      <span className="skill-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
        sapiente earum perferendis sit illum, totam eos voluptatum, nesciunt
        libero culpa autem delectus dolore excepturi voluptate quidem alias.
        Veritatis a impedit sed veniam natus consequatur voluptatibus voluptate
        ducimus dolorum corporis ut molestiae, quam quaerat autem, soluta,
        voluptatem odit deserunt hic eveniet!
      </span>
      <div className="skill-bars">
        <div className="skill-bar">
          <img src={reactLogo} alt="react logo" className="skill-bar-img" />
          <div className="skill-bar-text">
            <h2>React</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              voluptates!
            </p>
          </div>
        </div>
        <div className="skill-bar">
          <img src={expressLogo} alt="express logo" className="skill-bar-img" />
          <div className="skill-bar-text">
            <h2>Express</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Mollitia, expedita!
            </p>
          </div>
        </div>
        <div className="skill-bar">
          <img
            src={postgresLogo}
            alt="postgresql logo"
            className="skill-bar-img"
          />
          <div className="skill-bar-text">
            <h2>PostgreSQL</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, recusandae.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
