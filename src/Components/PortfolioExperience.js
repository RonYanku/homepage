import React from 'react';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

const FrontendBadges = ["Angular", "CSS3/HTML5", "React"];
const BackendBadges = ["Node", "Express", "Spring (Java)"];
const OtherBadges = ["Javascript", "Java", "MongoDB",
                    "PostgreSQL", "Firebase", "CI/CD", "Git" ];

const PortfolioExperience = () => {

  return (
    <div id="experience-section" data-aos="fade-in">
      <Container id="experience-content">

        <h1 className="display-4 text-center" id="experience-headline"><strong>Experience</strong></h1>
        <hr id="experience-hr"/>
        <br/>
        <h2><strong>Your Fare, Inc. (June 2020 - Present)</strong></h2>
        <h2>Junior Front End Developer</h2>
        <br/>
            <p>
            Responsible for design, implementation and maintenance of applications with technologies 
            such as Angular, Typescript, Bootstrap, HTML, CSS        
            </p>
      </Container>
    </div>
  )
}


export default PortfolioExperience;