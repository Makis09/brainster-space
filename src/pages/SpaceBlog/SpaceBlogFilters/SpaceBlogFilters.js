import React from "react";
import { useContext, useState } from "react";
import { MyContext } from "../../../Context/MyContext";
import { Col } from "react-bootstrap";

const SpaceBlogFilters = (props) => {
  const { areFiltersExpanded } = useContext(MyContext);
  const [activeFilter, setActiveFilter] = useState("СИТЕ");
  const activeStyle = {
    maxHeight: "100vh",
  };

  const filters = [
    { name: "СИТЕ", filterBy: "all" },
    { name: "КАРИЕРА", filterBy: "career" },
    { name: "ТЕХНОЛОГИЈА", filterBy: "technology" },
    { name: "DATA SCIENCE", filterBy: "dataScience" },
    { name: "МАРКЕТИНГ", filterBy: "marketing" },
    { name: "ДИЗАЈН", filterBy: "design" },
    { name: "IMPACT", filterBy: "impact" },
  ];

  const filterClicked = (e) => {
    props.function(e.target.dataset.filter);
    setActiveFilter(e.target.innerHTML);
  };

  return (
    <Col
      md="12"
      className="SpaceBlogFilters"
      style={areFiltersExpanded ? activeStyle : null}
    >
      <ul>
        {filters.map((filter, i) => (
          <li key={i}>
            <button
              className={activeFilter === filter.name ? "activeFilter" : ""}
              data-filter={filter.filterBy}
              onClick={(e) => filterClicked(e)}
            >
              {filter.name}
            </button>
          </li>
        ))}
        <li>
          <a
            href="https://medium.com/wearelaika/brainster-space-the-New-home-of-the-local-tech-community-In-skopje-ffe97b564152"
            target="_blank"
            rel="noopener noreferrer"
          >
            #SpaceFamily
          </a>
        </li>
      </ul>
    </Col>
  );
};

export default SpaceBlogFilters;
