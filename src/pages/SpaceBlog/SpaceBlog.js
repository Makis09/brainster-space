import React, { useState } from "react";
import "./SpaceBlog.css";
import { Row } from "react-bootstrap";
import SpaceBlogFilters from "./SpaceBlogFilters/SpaceBlogFilters";
import { useContext } from "react";
import { MyContext } from "../../Context/MyContext";
import SpaceBlogCarousel from "./SpaceBlogCarousel/SpaceBlogCarousel";
import SpaceBlogCards from "./SpaceBlogCards/SpaceBlogCards";

const SpaceBlog = (e) => {
  const { blogPosts } = useContext(MyContext);
  const [blogPostsToShow, setBlogPostsToShow] = useState(blogPosts);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const filterBlogPosts = (clickedFilter) => {
    let updatedBlogsToShow;
    if (clickedFilter === "all") {
      updatedBlogsToShow = blogPosts;
    } else {
      updatedBlogsToShow = blogPosts.filter(
        (post) => post.category.filterDesc === clickedFilter
      );
    }
    setIndex(0);
    setBlogPostsToShow(updatedBlogsToShow);
  };

  return (
    <Row className="SpaceBlog">
      <SpaceBlogFilters function={filterBlogPosts} blogPosts={blogPosts} />
      <SpaceBlogCarousel
        blogPosts={blogPostsToShow}
        handleSelect={handleSelect}
        index={index}
      />
      <SpaceBlogCards blogPosts={blogPostsToShow} />
    </Row>
  );
};

export default SpaceBlog;
