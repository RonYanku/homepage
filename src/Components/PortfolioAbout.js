import React from 'react';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

const FrontendBadges = ["Angular", "React", "CSS3/HTML5", "Bootstrap"];
const BackendBadges = ["Node", "Express", "Spring (Java)"];
const OtherBadges = ["Typescript","Javascript", "Java", "MongoDB",
                    "PostgreSQL", "Firebase", "CI/CD", "Git"];

const PortfolioAbout = () => {

  return (
    <div id="about-section" data-aos="fade-in">
      <Container id="about-content">

        <h1 className="display-4 text-center" id="about-headline"><strong>About Me</strong></h1>
        <hr id="about-hr"/>
        <p>
        A self-driven junior web developer with professional experience in building applications from the ground up -
information gathering, planning, design, development, testing and delivery and maintenance.
        </p>
        <br/>
        <h2 className="text-center"><strong>Skills</strong></h2>
        <br/>
            <p>
              <strong> Frontend: </strong> 
              {FrontendBadges.map((badge) => 
              <a>
              <Badge variant="dark"> {badge} </Badge> 
              &nbsp;
              </a>
              )}
            </p>
            <p>
              <strong> Backend: </strong> 
              {BackendBadges.map((badge) => 
                <a>
                <Badge variant="dark"> {badge} </Badge> 
                &nbsp;
                </a>
                )}
            </p>
            <p>
            <strong> Other </strong> 
               {OtherBadges.map((badge) => 
                <a>
                <Badge variant="dark"> {badge} </Badge> 
                &nbsp;
                </a>
                )}
            </p>
      </Container>
    </div>
  )
}


export default PortfolioAbout;