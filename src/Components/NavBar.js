import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


// A fixed NavBar at the top of the screen
const NavBar = () => {
    return (
        <div>
        <Navbar id="dark-navbar" fixed="top" bg="dark" variant="dark" data-aos="fade-in">
          <Nav className="ml-auto mr-auto">
            <Nav.Link className="text-white" href="#title-section"><span className="tab-space">Top</span></Nav.Link>
            <Nav.Link className="text-white" href="#about-section"><span className="tab-space">About</span></Nav.Link>
            <Nav.Link className="text-white" href="#experience-section"><span className="tab-space">Experience</span></Nav.Link>
            <Nav.Link className="text-white" href="#project-section"><span className="tab-space">Projects</span></Nav.Link>
            <Nav.Link className="text-white" href="#contact-section"><span className="tab-space">Contact</span></Nav.Link>
          </Nav>
        </Navbar>
        </div>
      )
    }

    export default NavBar