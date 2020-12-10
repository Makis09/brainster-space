import React from "react";
import { Carousel, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SpaceBlogCarousel = ({ blogPosts, handleSelect, index }) => {
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      pause={false}
      indicators={false}
      nextIcon={<FontAwesomeIcon icon="arrow-right" />}
      prevIcon={<FontAwesomeIcon icon="arrow-left" />}
    >
      {blogPosts.map((post) => (
        <Carousel.Item interval={7000} key={post.title}>
          <img
            className="d-block w-100"
            src={require(`../../../assets/images/space blog kartici/${post.image}`)}
            alt={post.image}
          />
          <Carousel.Caption>
            <div>
              <Badge pill>{post.category.filterName}</Badge>
              <h1>{post.title}</h1>
              <p>{post.text}</p>
              <a href="https:www.brainster.co/" className="btn" variant="light">
                <FontAwesomeIcon icon="arrow-right" />
                Дознај повеќе
              </a>
            </div>
          </Carousel.Caption>
          <div className="custom-indicator">
            <span>{blogPosts.indexOf(post) + 1}</span>/
            <span>{blogPosts.length}</span>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default SpaceBlogCarousel;
