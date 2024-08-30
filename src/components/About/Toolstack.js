import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiPycharm,
} from "react-icons/si";

const styles = {
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    color: "#61dafb", // Example color
  },
  row: {
    justifyContent: "center",
    paddingBottom: "50px",
  },
};

function Toolstack() {
  return (
    <Row style={styles.row}>
      {/* <Col xs={4} md={2} style={styles.icon}>
        <SiMacos />
      </Col> */}
      <Col xs={4} md={2} style={styles.icon}>
        <SiVisualstudiocode />
      </Col>
      {/* <Col xs={4} md={2} style={styles.icon}>
        <SiPostman />
      </Col> */}
      <Col xs={4} md={2} style={styles.icon}>
        <SiPycharm />
      </Col>
      {/* <Col xs={4} md={2} style={styles.icon}>
        <SiEclipse />
      </Col> */}
      {/* <Col xs={4} md={2} style={styles.icon}>
        <SiSlack />
      </Col>
      <Col xs={4} md={2} style={styles.icon}>
        <SiVercel />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
