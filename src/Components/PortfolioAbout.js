import React from 'react';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

const FrontendBadges = ["Angular", "CSS/HTML", "Bootstrap"];
const BackendBadges = ["C# .NET", ".NET CORE Web API", "EF Core"];
const OtherBadges = ["Typescript","Javascript", "C#", "SQL Server"];

const PortfolioAbout = () => {

  return (
    <div id="about-section" data-aos="fade-in">
      <Container id="about-content">

        <h1 className="display-4 text-center" id="about-headline"><strong>About Me</strong></h1>
        <hr id="about-hr"/>
        <p>
        Self-driven front-end developer with professional experience in building web applications from the
ground up. Well-versed in Angular.
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