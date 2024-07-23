import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Barkmate from "../../Assets/Projects/barkmate.png";
import QR from "../../Assets/Projects/qr.jpeg";
import LazarevRecoded from "../../Assets/Projects/lazarev.png";
import Guideme from "../../Assets/Projects/Guideme.png";
import DrumKit from "../../Assets/Projects/drumkit.png";
import StyleQuest from "../../Assets/Projects/styleQuest.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
         i have worked on various <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
         Some of them , I have mentioned below
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Guideme}
              isBlog={false}
              title="Guideme"
              description="GuideMe is designed to provide college students with a platform to access valuable resources such as internships, placements, learning materials, hackathons,  and interview preparation notes. The goal is to the process of finding relevant opportunities and resources that support students' academic and career growth.."
              ghLink="https://github.com/gudia18/GuideMe"
              demoLink="https://guideme-plum.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StyleQuest}
              isBlog={false}
              title="Style Quest"
              description="Discover and explore fashion with StyleQuest! Using AI and AR technology, it offers personalized trend recommendations, virtual try-ons, and the latest style insights by gamification. Transform your fashion experience and stay on top of trends!.Join StyleQuest today and elevate your fashion journey."
              ghLink="https://github.com/gudia18/StyleQuest"
              demoLink="https://style-quest-rho.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LazarevRecoded}
              isBlog={false}
              title="Lazarev-Recoded"
              description="I recoded the frontend of this amazing website using HTML, CSS, and JavaScript to hone my skills and enhance its performance by using GSAP. This project showcases my ability to create a clean, modern, and responsive design while improving the user experience.This project highlights my proficiency in animation techniques."
              ghLink="https://github.com/gudia18/Lazarev-recoded"
              demoLink="https://lazarev-recoded.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Barkmate}
              isBlog={false}
              title="BarkMate"
              description="BarkMate is a user-friendly website designed to connect dogs . The platform boasts features like ease of use, an elite clientele, and a guaranteed success rate in finding a dog match. With a visually appealing layout, customer testimonials.BarkMate aims to provide a seamless and enjoyable experience for dog owners..."
              ghLink="https://github.com/gudia18/BarkMate"
              demoLink="https://bark-mate.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DrumKit}
              isBlog={false}
              title="Drum Kit"
              description="A web-based Drum Kit application built with HTML, CSS, and JavaScript. Experience interactive drum sounds through on-screen buttons or keyboard keys.Built with HTML, CSS, this application also  transforms your device into a dynamic percussion instrument, and  offering a fun and engaging way to create music."
              ghLink="https://github.com/gudia18/DrumKit"
              demoLink="https://drum-kit-rho-amber.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QR}
              isBlog={false}
              title="QR Generator"
              description="Created QR codes with ease using this Node.js project. Whether you want to share a website link, text, or other information, just run the program and follow the instructions. It's a quick and straightforward way to generate QR codes for your data.Build using NodeJS.Whether for business, education, or personal use, it's the perfect tool."
             
              ghLink="https://github.com/gudia18/QR-Generator"
              demoLink="https://github.com/gudia18/QR-Generator"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
