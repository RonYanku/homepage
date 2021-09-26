import React from "react";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Project from "./Project";

import portfolio1 from "../img/projects/portfolio1.jpg";

import SauceEdgeMenu from "../img/projects/SauceEdgeMenu.jpg";
import SauceEdgeAuth from "../img/projects/SauceEdgeAuth.jpg";
import SauceEdgeOrderCon from "../img/projects/SauceEdgeOrderCon.jpg";
import SauceEdgePayment from "../img/projects/SauceEdgePayment.jpg";
import SauceEdgeSideDrawer from "../img/projects/SauceEdgeSideDrawer.jpg";

import eatseasy1 from "../img/projects/eatseasy1.jpg";
import eatseasy2 from "../img/projects/eatseasy2.jpg";
import eatseasy3 from "../img/projects/eatseasy3.jpg";
import eatseasy4 from "../img/projects/eatseasy4.jpg";
import eatseasy5 from "../img/projects/eatseasy5.jpg";

import vision1 from "../img/projects/vision1.jpg";
import vision2 from "../img/projects/vision2.jpg";

const portfolioBadges = ["Javascript", "React", "Bootstrap"];

const SauceEdgeBadges = [
  "Javascript",
  "React",
  "Hooks",
  "Redux",
  "Firebase",
  "Axios",
  "Stripe",
  "Bootstrap",
];

const EatsEasyBadges = [
  "Java",
  "Spring",
  "Hibernate",
  "PostgreSQL",
  "Javascript",
  "React Native",
  "CI/CD",
  "Heroku",
];

const Vision2020Badges = [
  "Javascript",
  "Typescript",
  "Angular",
  "NgRx",
  "Node",
  "Express",
  "MongoDB",
  "Mongoose",
];

const EatsEasyImages = [eatseasy1, eatseasy2, eatseasy3, eatseasy4, eatseasy5];

const Vision2020Images = [vision1, vision2];

const PortfolioImages = [portfolio1];

const SauceEdgeImages = [
  SauceEdgeMenu,
  SauceEdgeAuth,
  SauceEdgeOrderCon,
  SauceEdgePayment,
  SauceEdgeSideDrawer,
];

const PortfolioProjects = () => {
  // Show row of Project components
  return (
    <div style={{ backgroundColor: "black" }}>
      <Parallax
        className="project-bg"
        bgImage={require("../img/projects-bg.jpg")}
        bgImageAlt={"laptop"}
        strength={900}
        bgImageStyle={{
          width: "1080px",
          height: "auto",
          backgroundPosition: "center center",
        }}
      >
        <div id="project-section" data-aos="fade-in">
          <Container className="text-center" id="project-content">
            <h1 className="display-4" id="project-headline">
              Projects
            </h1>
            <hr className="pb-3" id="project-hr" />
            <Row>
              <Project
                images={Vision2020Images}
                title="Vision 2020"
                description="An Angular app that lets you create posts in lists for future reference."
                github="https://github.com/Visi0n2020"
                modal="This app helps you save notes sorted by lists of subjects. Built with Angular and Node."
                badges={Vision2020Badges}
              />
              <Project
                images={EatsEasyImages}
                title="Eats Easy"
                description="EatsEasy is a system that connects clients and restaurants, and makes life easier for both. Built with Spring (Java) and React Native"
                github="https://github.com/orgs/eats-easy/dashboard"
                modal="EatsEasy is a system that connects clients and restaurants. It helps clients to find the place to eat in, and place an order,track it from anywhere, and pay instantly. It helps restaurant’s staff manage order queues, keeping the menu updated and serving clients the best way they can. Built with Spring (Java) and React Native"
                badges={EatsEasyBadges}
              />
              <Project
                images={PortfolioImages}
                title="Developer Portfolio"
                description="This online portfolio is a place to display my projects and allow anyone to easily send me a message. Built with React"
                github="https://github.com/RonYanku/homepage"
                modal="This online portfolio is a place to display my projects and allow anyone to easily send me a message. It is built using React"
                badges={portfolioBadges}
              />
              <Project
                images={SauceEdgeImages}
                title="Sauce Edge"
                description="A sausage restaurant app. you can authenticate, browse the menu, then order. built with React."
                github="https://github.com/RonYanku/SauceEdge"
                modal="A sausage restaurant app. you can authenticate, browse the menu, then order. built with React."
                badges={SauceEdgeBadges}
              />
            </Row>
          </Container>
        </div>
      </Parallax>
    </div>
  );
};

export default PortfolioProjects;
