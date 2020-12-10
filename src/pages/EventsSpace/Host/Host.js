import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import image from "../../../assets/images/space/anja.jpg";
import { Element } from "react-scroll";

const Host = () => {
  return (
    <Element name="host">
      <Row className="Host" id="host">
        <Col
          lg={{ span: 4, offset: 2 }}
          md={5}
          sm={5}
          xs={12}
          className="card-description"
        >
          <h1>Event Host</h1>
          <p>Ања Макеска</p>
          <p>anja@brainster.co</p>
          <p>+389 (0)70 233 414</p>
        </Col>
        <Col
          lg={4}
          md={{ span: 6, offset: 1 }}
          sm={{ span: 6, offset: 1 }}
          xs={12}
        >
          <Image src={image} fluid />
        </Col>
      </Row>
    </Element>
  );
};

export default Host;
