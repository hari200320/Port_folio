import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPycharm,
  SiPowerbi,
  SiAndroidstudio,
} from "react-icons/si"; 
// Removed unused imports

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
      <Col xs={4} md={2} style={styles.icon}>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} style={styles.icon}>
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} style={styles.icon}>
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} style={styles.icon}>
        <SiPowerbi />
      </Col>
    </Row>
  );
}

export default Toolstack;
