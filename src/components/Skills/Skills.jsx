import React from "react";
import "./skills.css";
import reactLogo from "../../assets/react.png";
import expressLogo from "../../assets/express.png";
import postgresLogo from "../../assets/postgres.png";
import jsLogo from "../../assets/javascript.png";

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="section-title">My Stack</h1>
      <span className="skill-text">
        I'm always trying to learn new Libraries, tools, and languages, but this
        is the spine of my education in software engineering.
      </span>
      <div className="skill-bars">
        <div className="skill-bar">
          <a
            href="https://www.flaticon.com/free-icons/javascript"
            title="Javascript icons created by Freepik - Flaticon"
          >
            <img src={jsLogo} alt="javascript logo" className="skill-bar-img" />
          </a>
          <div className="skill-bar-text">
            <h2>Javascript</h2>
            <p>
              Manipulate the DOM, handle asynchronous tasks, and implement
              modern ES6+ features. Utilizing libraries and frameworks like
              jest, mocha, and chai, to streamline code for cleaner application
              performance.
            </p>
          </div>
        </div>
        <div className="skill-bar">
          <img src={reactLogo} alt="react logo" className="skill-bar-img" />
          <div className="skill-bar-text">
            <h2>React</h2>
            <p>
              Working with React hooks like useState and useRef, implementing
              conditional rendering, ensuring one-way data flow, integrating
              form libraries for efficient data handling, and utilizing React
              Router for seamless navigation in web applications.
            </p>
          </div>
        </div>
        <div className="skill-bar">
          <img src={expressLogo} alt="express logo" className="skill-bar-img" />
          <div className="skill-bar-text">
            <h2>Express</h2>
            <p>
              Building robust and scalable server-side applications, creating
              RESTful APIs, handling middleware for routing and authentication,
              and leveraging features to ensure efficient and secure server
              operations.
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
              Managing and designing databases, data modeling, writing complex
              SQL queries, and ensuring seamless integration with server-side
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
