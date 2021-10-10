import React from "react";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import { Parallax } from 'react-parallax';

const FrontendBadges = ["Angular", "CSS3/HTML5", "React"];
const BackendBadges = ["Node", "Express", "Spring (Java)"];
const OtherBadges = [
  "Javascript",
  "Java",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "CI/CD",
  "Git",
];

const PortfolioExperience = () => {
  return (

    <div style={{backgroundColor: 'black'}}>
      <Parallax
        className="project-bg"
        bgImage={require('../img/projects-bg.jpg')}
        bgImageAlt={'laptop'}
        strength={900}
        bgImageStyle={{width: '1080px', height: 'auto', backgroundPosition: 'center center'}}
      >


    <div id="experience-section" data-aos="fade-in">
      <Container id="experience-content">
        <h1 className="display-4 text-center" id="experience-headline">
          <strong>Experience</strong>
        </h1>
        <hr id="experience-hr" />
        <br />
        <h2>
          <strong>Project Verte (2021 - present)</strong>
        </h2>
        <h2>Full Stack Developer</h2>
        <br />

        <ul  className="bullet-point">
          <li>Was the main front end developer for a web app tailor maid for a customer using Angular.</li>
          <li>Involved in adding new features to multiple web apps as a full-stack developer using technologies
such as:  RxJS, Bootstrap, CSS/HTML, LINQ, Entity Framework, and SQL Server. </li>
          <li>Responsible for maintenance of web applications with technologies such as Angular/Typescript/Bootstrap/HTML/CSS.</li>
        </ul>

        <br />
        <br />
        
        <h2>
          <strong>Your Fare, Inc. (2020 - 2021)</strong>
        </h2>
        <h2>Front End Developer</h2>
        <br />

        <ul  className="bullet-point">
          <li> In charge of planning, structuring and creating an Angular web app from scratch  that significantly reduced the time needed to get a client on board the main service.</li>
          <li> Developed new features for the main product. </li>
          <li> Responsible for maintenance of web applications with technologies such as Angular/Typescript/Bootstrap/HTML/CSS.</li>
        </ul>

      </Container>
    </div>
    </Parallax>
    </div>
  );
};

export default PortfolioExperience;
