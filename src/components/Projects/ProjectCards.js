import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ imgPath, title, description, ghLink, demoLink, isBlog }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="Project image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        <Button
          variant="primary"
          href={ghLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View GitHub repository for ${title}`}
        >
          <BsGithub /> &nbsp;
          {isBlog ? "Blog" : "GitHub"}
        </Button>
        
        {/* Render demo link button only if demoLink exists and it's not a blog */}
        {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "10px" }}
            aria-label={`View demo for ${title}`}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

// Define PropTypes for validation
ProjectCards.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ghLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string,
  isBlog: PropTypes.bool
};

// Default props in case demoLink or isBlog are not provided
ProjectCards.defaultProps = {
  demoLink: null,
  isBlog: false
};

export default ProjectCards;
