import React from 'react';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

const FrontendBadges = ["React", "Angular", "CSS3/HTML5"];
const BackendBadges = ["Node", "Express", "Spring (Java)"];
const OtherBadges = ["Javascript(ES6+", "Java", "MongoDB", "Google Cloud",
                    "PostgreSQL", "Firebase", "Heroku", "CI/CD", "Git" ];

const PortfolioAbout = () => {

  return (
    <div id="about-section" data-aos="fade-in">
      <Container id="about-content">

        <h1 className="display-4 text-center" id="about-headline"><strong>About Me</strong></h1>
        <hr id="about-hr"/>
        <p>
          I build full stack web applications using effective, minimalist designs.
          I will finish my BSc in Computer Science at the Open University in Israel this semester
          And am available for a full time software development position.
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