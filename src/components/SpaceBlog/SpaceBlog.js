import React, { useState } from 'react';
import './SpaceBlog.css';
import { Row } from 'react-bootstrap';
import SpaceBlogFilters from './SpaceBlogFilters';
import { useContext } from 'react';
import { MyContext } from '../../Context/MyContext';
import SpaceBlogCarousel from './SpaceBlogCarousel';
import SpaceBlogCards from './SpaceBlogCards';

const SpaceBlog = (e) => {
    const { blogPosts } = useContext(MyContext);
    const [blogPostsToShow, setBlogPostsToShow] = useState(blogPosts);

    const filterBlogPosts = (clickedFilter) => {
        let updatedBlogsToShow;
        if (clickedFilter === 'СИТЕ') {
            updatedBlogsToShow = blogPosts;
        }
        else {
            updatedBlogsToShow = blogPosts.filter(post =>
                post.category === clickedFilter
            )
        }
        setBlogPostsToShow(updatedBlogsToShow);
    }

    return (
        <Row className='SpaceBlog'>
            <SpaceBlogFilters function={filterBlogPosts} />
            <SpaceBlogCarousel blogPosts={blogPosts} />
            <SpaceBlogCards blogPosts={blogPostsToShow} />
        </Row>
    )
}


export default SpaceBlog;