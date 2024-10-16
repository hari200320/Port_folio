import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <>
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            {/* <Col md={4} className="project-card">
              <ProjectCard
                imgPath={require("../../Assets/crud.png")}
                title="Chatbot(use case: Pizza-delivery inquiry) : Python, Flask, Groq API"
                description="Developed a Django application to perform CRUD operations, including the creation, updating, and deletion of student records with email fields. Designed a search functionality that allows users to find records by keyword."
                ghLink="https://github.com/hari200320/Pizza-delivery_chatbot" 
              />
            </Col> */}


            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={require("../../Assets/crud.png")}
                title="CRUD Operations : Python, Django, HTML, CSS, Bootstrap"
                description="Developed a Django application to perform CRUD operations, including the creation, updating, and deletion of student records with email fields. Designed a search functionality that allows users to find records by keyword."
                ghLink="https://github.com/hari200320/CRUD-operations-in-DJANGO"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={require("../../Assets/mmv.png")}
                title="MultiModel Vision : Python, Streamlit, APIs"
                description="Developed a Streamlit application integrating the Gemini API to analyze resume ATS scores, providing users with actionable feedback. Created an image-scanning tool within the app that extracts and details information from images, leveraging advanced image processing techniques."
                ghLink="https://github.com/hari200320/MultiModel-Vision-AI"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={require("../../Assets/sales_data_analysis.png")}
                title="Sales Data Analysis : Power BI"
                description="The Sales Data Analysis Dashboard is a Power BI project designed to provide a detailed view of sales performance across various markets, products, and customer segments over a span of multiple years. This dashboard enables users to interactively explore sales trends, revenue distribution, and top-performing products and customers."
                ghLink="https://github.com/hari200320/PowerBi-Project-Sales-Data-Analysis"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={require("../../Assets/amazon_data_analysis.png")}
                title="Amazon Prime Data Analysis : Power BI"
                description="This project focuses on analyzing Amazon Prime data to uncover valuable insights into user engagement, subscription trends, and content consumption patterns. By leveraging Power BI's robust data visualization and analytics capabilities, the project aims to identify key drivers of user behavior, optimize content strategy, and enhance subscription models."
                ghLink="https://github.com/hari200320/PowerBi-Project-Amazon-Prime-Data-Analysis"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={require("../../Assets/PGLife.jpeg")}
                title="PGLife"
                description="Created a responsive website to search for PGs available based on user’s interests. Developed a user-friendly interface allowing users to filter PG options by location, price range, amenities, and availability. Implemented a rating and review system to help users make informed decisions based on previous tenants’ feedback. Integrated a backend database (MySQL) to store and manage PG listings, user profiles, and other relevant data."
                ghLink="https://github.com/your-username/pg-life"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={require("../../Assets/GetMyAudit.jpeg")}
                title="GetMyAudit"
                description="Contributed to the development and maintenance of the GetMyAudit website, a WordPress-based platform specializing in auditing services. Supported the content management process on the GetMyAudit website, ensuring accuracy and relevance of information to effectively communicate auditing services to users."
                ghLink="https://getmyaudit.com/"
              />
            </Col>

          </Row>
        </Container>
      </Container>

      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My <strong className="purple">Internships</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few internships I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={require("../../Assets/gnani_ai_logo.jpeg")}
                title="Gnani.ai"
                description="
Currently learning to develop chatbots and voicebots during my internship, focusing on Docker, MongoDB, and Flask. Gaining hands-on experience in chatbot development, exploring generative AI and LLaMA, and enhancing my skills in natural language processing."
                ghLink="https://www.gnani.ai/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={require("../../Assets/cgs.jpeg")}
                title="Codesight Global Solutions Pvt. Ltd"
                description="Developed and maintained custom WordPress websites for clients at Codesight Global Solutions, ensuring responsive design and optimal user experience. Contributed to the customization of WordPress themes and plugins to meet the specific requirements of GetMyAudit, enhancing its functionality and user experience. Learnt the basics of ReactJs and its framework"
                ghLink="https://www.codesightglobalsolutions.com/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={require("../../Assets/kalpin.jpeg")}
                title="Kalpin Tech Pvt. Ltd"
                description="Played a vital role in assembling drones, contributing to the construction and integration of hardware components to ensure optimal performance and functionality. Collaborated with team members to test and calibrate drone systems, troubleshooting technical issues and fine-tuning configurations to meet project requirements and quality standards."
                ghLink="https://kalpintech.com/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Projects;
