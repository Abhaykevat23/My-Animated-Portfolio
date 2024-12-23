import React, { useEffect } from "react";
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
            <img src={JavaScript} alt="Vue.js" />
            <p>JavaScript</p>
          </div>
          <div className="skills-item">
            <img src={react} alt="Bootstrap" />
            <p>React</p>
          </div>
          <div className="skills-item">
            <img src={Git} alt="Laravel" />
            <p>Git</p>
          </div>
          <div className="skills-item">
            <img src={PHP} alt="TailwindCSS" />
            <p>PHP</p>
          </div>
          <div className="skills-item">
            <img src={MongoDB} alt="CSS3" />
            <p>MongoDB</p>
          </div>
          <div className="skills-item">
            <img src={NodeJS} alt="HTML5" />
            <p>NodeJS</p>
          </div>
          <div className="skills-item">
            <img src={TailwindCSS} alt="PHP" />
            <p>Tailwind CSS</p>
          </div>
          <div className="skills-item">
            <img src={Postman} alt="JavaScript" />
            <p>Postman</p>
          </div>
          <div className="skills-item">
            <img src={Bootstrap} alt="Figma" />
            <p>Bootstrap</p>
          </div>
          <div className="skills-item">
            <img src={SQL} alt="Figma" />
            <p>SQL</p>
          </div>
          <div className="skills-item">
            <img src={Angular} alt="Figma" />
            <p>Angular</p>
          </div>
          <div className="skills-item">
            <img src={Java} alt="Figma" />
            <p>Java</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
