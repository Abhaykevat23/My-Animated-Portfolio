import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import './SkillsCSS.css';
// import Html from '../assets/Skills/HTML5.png'
import react from '../assets/Skills/React.png'
// import CSS from '../assets/Skills/CSS3.png'
import Bootstrap from '../assets/Skills/Bootstrap.png'
import Angular from '../assets/Skills/Angular.png'
import Java from '../assets/Skills/Java.png'
import JavaScript from '../assets/Skills/JavaScript.png'
import MongoDB from '../assets/Skills/MongoDB.png'
import NodeJS from '../assets/Skills/NodeJS.png'
import Postman from '../assets/Skills/Postman.png'
import Git from '../assets/Skills/Git.png'
import SQL from '../assets/Skills/SQL.png'
import TailwindCSS from '../assets/Skills/TailwindCSS.png'
import PHP from '../assets/Skills/PHP.png'
// import TypeScript from '../assets/Skills/TypeScript.png'

const Skills = () => {

  // useGSAP(() => {
  //   gsap.fromTo(
  //     ".skill-item",
  //     { opacity: 0, y: 50 }, // Initial state
  //     {
  //       scrollTrigger: {
  //         trigger: ".skills-section",
  //         start: "top 60%",
  //       },
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       stagger: 0.3,
  //       ease: "power4.out",
  //     }
  //   );
  // }, []);

  const bgGradient = {
    backgroundImage: "linear-gradient(#020336, #111827)",
  }
  return (
    <section style={bgGradient} className="h-[100vh] w-[100vw]">
      <div className="skills-container ">
        <div className="skills-header">
          <h2>My Skills</h2>
        </div>
        <div className="skills-content">
          <div className="skills-item">
            <Link target="_blank" to="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <img src={JavaScript} alt="Javascript" />
            </Link>
            <p>JavaScript</p>
          </div>
          <div className="skills-item">
            <Link target="_blank" to="https://react.dev/">
              <img src={react} alt="ReactJS" />
            </Link>
            <p>React</p>
          </div>
          <div className="skills-item">
            <Link target="_blank" to="https://git-scm.com/">
              <img src={Git} alt="Git" />
            </Link>
            <p>Git</p>
          </div>
          <div className="skills-item">
            <Link target="_blank" to="https://www.php.net/">
              <img src={PHP} alt="PHP" />
            </Link>
            <p>PHP</p>
          </div>
          <div className="skills-item">
            <Link target="_blank" to="https://www.mongodb.com/">
              <img src={MongoDB} alt="MongoDB" />
            </Link>
            <p>MongoDB</p>
          </div>
          <div className="skills-item">
            <Link target="_blank" to="https://nodejs.org/en">
              <img src={NodeJS} alt="NodeJS" />
            </Link>
            <p>NodeJS</p>
          </div>
          <div className="skills-item">
            <Link target="_blank" to="https://tailwindcss.com/">
              <img src={TailwindCSS} alt="Tailwind CSS" />
            </Link>
            <p>Tailwind CSS</p>
          </div>
          <div className="skills-item">
            <Link target="_blank" to="https://www.postman.com/">
              <img src={Postman} alt="Postman" />
            </Link>
            <p>Postman</p>
          </div>
          <div className="skills-item">
            <Link target="_blank" to="https://tailwindcss.com/">
              <img src={Bootstrap} alt="Bootstrap" />
            </Link>
            <p>Bootstrap</p>
          </div>
          <div className="skills-item">
            <Link target="_blank" to="https://www.mysql.com/">
              <img src={SQL} alt="SQL" />
            </Link>
            <p>SQL</p>
          </div>
          <div className="skills-item">
            <Link target="_blank" to="https://angular.dev/">
              <img src={Angular} alt="Angular" />
            </Link>
            <p>Angular</p>
          </div>
          <div className="skills-item">
            <Link target="_blank" to="https://www.java.com/">
              <img src={Java} alt="Java" />
            </Link>
            <p>Java</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
