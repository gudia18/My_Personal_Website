import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gudia Rani</span><br />
             Currently <span className="purple"> in final year of Engineering pursuing Electronics and Telecommunication from AIT, Pune</span>
            <br />
            I have developed skills in C++ programming language and frontend web technologies.
            <br />
            I have woked on various projects like QR-Generator , Simon game , etc
            <br />
            <br />
            Apart from coding, I enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gardening
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing sudoku
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness activities
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Shoot for the moon. Even if you miss, you'll land among the stars.😊."{" "}
          </p>
          <footer className="blockquote-footer">Gudia</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
