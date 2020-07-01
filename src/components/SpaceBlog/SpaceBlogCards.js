import React from 'react';
import { Row, Col } from 'react-bootstrap';
import VerticalCard from '../Cards/VerticalCard';


const SpaceBlogCards = (props) => {

    const cards = props.blogPosts.map((post, i) =>
        <VerticalCard
            key={i}
            location={post.url}
            image={`/space blog kartici/${post.image}`}
            title={post.title}
            text={post.text}
            category={post.category}
        />
    )
    return(

        <Col md={12} >
        <Row className='SpaceBlogCards'>
            {cards}
        </Row>
    </Col>
    )
}

export default SpaceBlogCards;