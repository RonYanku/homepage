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
        <h2>Front-End Developer</h2>
        <br />

        <ul  className="bullet-point">
          <li>Was the main front end developer for an Angular web app tailor maid for a customer.</li>
          <li>Responsible for front-end maintenance of multiple web apps. </li>
          <li>Involved in adding new features to multiple web apps as a  Full-Stack developer using technologies such as: Angular, RxJS, Bootstrap, CSS/HTML on the front end, and .NET, LINQ, Entity Framework, and SQL Server on the back-end.</li>
        </ul>

        <br />
        <br />
        
        <h2>
          <strong>Your Fare, Inc. (2020 - 2021)</strong>
        </h2>
        <h2>Junior Front End Developer</h2>
        <br />

        <ul  className="bullet-point">
          <li> In charge of creating an Angular web app that significantly reduced the time needed to get a client on board the main service.</li>
          <li> Assisted in the design and implementation process for new models/projects, informing the CTO and product manager of alternatives. </li>
          <li>  Responsible for maintenance of web applications with technologies such as Angular/Typescript/Bootstrap/HTML/CSS.</li>
        </ul>

      </Container>
    </div>
    </Parallax>
    </div>
  );
};

export default PortfolioExperience;
