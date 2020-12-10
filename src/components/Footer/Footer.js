import React from "react";
import "./Footer.css";
import { Row, Col } from "react-bootstrap";
import UsefulLinks from "./UsefulLinks/UsefulLinks";
import SocialNetworks from "./SocialNetworks/SocialNetworks";
import FooterLogo from "./FooterLogo/FooterLogo";

const Footer = () => {
  return (
    <>
      <Row className="Footer">
        <UsefulLinks />
        <SocialNetworks />
        <FooterLogo />
      </Row>
      <Row className="copyright">
        <Col md={12}>
          <p>COPYRIGHT&copy;BrainsterSpace. All Rights Reserved</p>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
