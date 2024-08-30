import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hariharan Radhakrishnan </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />
            I am a Final Year Engineering Student.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cycling 🚴
            </li>
            <li className="about-activity">
              <ImPointRight /> Trekking  🥾
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Spend time with NATURE to know about YOURSELF!"{" "}
          </p>
          <footer className="blockquote-footer">Hariharan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
