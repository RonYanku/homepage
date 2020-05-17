import React from 'react';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';


const PortfolioAbout = () => {

  const FrontendSkills = [ 
    'React',
    'Angular',
    'CSS3/HTML5'
  ]

  const BackendSkills = [ 
    'Node',
    'Express',
    'MongoDB',
    'MongoDB',
    'PostgreSQL'
  ]

  const Other  = [ 
    'Java',
    'Spring',
    'Git',
    'Firebase',
    'CI/CD'
  ]

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
              <Badge variant="dark">React</Badge> &nbsp;
              <Badge variant="dark">Angualr</Badge> &nbsp;
              <Badge variant="dark">CSS3/HTML5</Badge>
            </p>
            <p>
              <strong> Backend: </strong> 
              <Badge variant="dark">Node</Badge> &nbsp;
              <Badge variant="dark">Express</Badge> &nbsp;
              <Badge variant="dark">Spring (Java)</Badge>
            </p>
            <p>
            <strong> Other </strong> 
              <Badge variant="dark"> Javascript (ES6+)</Badge> &nbsp;
              <Badge variant="dark">Java</Badge> &nbsp;
              <Badge variant="dark">MongoDB</Badge> &nbsp;
              <Badge variant="dark">Google Cloud</Badge> &nbsp;
              <Badge variant="dark">PostgreSQL</Badge> &nbsp;
              <Badge variant="dark">Firebase</Badge> &nbsp;
              <Badge variant="dark">Heroku</Badge> &nbsp;
              <Badge variant="dark">CI/CD</Badge> &nbsp;
              <Badge variant="dark">Git</Badge> &nbsp;

            </p>
      </Container>
    </div>
  )
}


export default PortfolioAbout;