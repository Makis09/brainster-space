import React from "react";
import "./Navbar.css";
import { Row, Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/images/logo/brainster_space_logo.svg";
import { NavLink, useLocation, Link } from "react-router-dom";
import PartnershipModal from "../Forms/PartnershipModal";
import JoinModal from "../Forms/JoinModal";
import { useContext } from "react";
import { MyContext } from "../../Context/MyContext";
import { Link as Scroll } from "react-scroll";

const MyNavBar = () => {
  const { filtersHolderClicked } = useContext(MyContext);
  const location = useLocation();

  const findCoworking = () => {
    setTimeout(() => {
      document.getElementById("coworking-section").click();
    }, 500);
  };
  return (
    <Row>
      <Navbar collapseOnSelect={true} expand="lg">
        <Nav.Link as={Link} to="/" className="navbar-brand" eventKey="6">
          <img src={logo} alt="" />
        </Nav.Link>
        <div className="toggle-modal-holder">
          <JoinModal />
          {location.pathname.includes("space-blog") && (
            <button
              onClick={() => filtersHolderClicked()}
              className="navbar-toggler SpaceBlogFiltersToggler"
            >
              <div></div>
              <div></div>
              <div></div>
            </button>
          )}
          <Navbar.Toggle aria-controls="menu-toggle" />
        </div>
        <Navbar.Collapse id="menu-toggle">
          <Nav className="mx-auto">
            <Nav.Link
              as={NavLink}
              eventKey="1"
              to="/space-blog"
              activeClassName="selected"
            >
              SPACE БЛОГ
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              eventKey="2"
              to="/events"
              activeClassName="selected"
            >
              НАСТАНИ
            </Nav.Link>
            <Nav.Link
              as={Link}
              eventKey="5"
              className="nav-button"
              to="/"
              onClick={() => findCoworking()}
            >
              CО-WORKING
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              eventKey="3"
              to="/academies"
              activeClassName="selected"
            >
              АКАДЕМИИ
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              eventKey="4"
              to="/events-space"
              activeClassName="selected"
            >
              ПРОСТОР ЗА НАСТАНИ
            </Nav.Link>
            <PartnershipModal />
            <JoinModal />
          </Nav>
          <Scroll
            id="coworking-section"
            spy={true}
            smooth={true}
            duration={500}
            to="coworking"
          ></Scroll>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  );
};

export default MyNavBar;
