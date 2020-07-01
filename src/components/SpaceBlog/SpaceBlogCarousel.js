import React from 'react';
import { Carousel, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SpaceBlogCarousel = (props) => {

    const carouselItems = props.blogPosts.map((post, i) =>
        <Carousel.Item key={i}>
            <img
                className="d-block w-100"
                src={require(`../../assets/images/space blog kartici/${post.image}`)}
                alt="First slide"
            />
            <Carousel.Caption>
                <div>
                    <Badge pill>
                        {post.category}
                    </Badge>
                    <h1>{post.title}</h1>
                    <p>{post.text}</p>
                    <a href="https://www.brainster.co/" className="btn" variant="light" >
                        <FontAwesomeIcon icon='arrow-right' />
                     Дознај повеќе
                    </a>
                </div>
            </Carousel.Caption>
            <div className='custom-indicator'>
                    <span>{props.blogPosts.indexOf(post) + 1}</span>
                    /
                    <span>{props.blogPosts.length}</span>
            </div>
        </Carousel.Item>
    )

    return (
        <Carousel
            interval='7000'
            indicators={false}
            nextIcon={<FontAwesomeIcon icon='arrow-right' />}
            prevIcon={<FontAwesomeIcon icon='arrow-left' />}>

            {carouselItems}

        </Carousel>
    )
}


export default SpaceBlogCarousel;