import React from 'react';
import './Card.css';
import { Card, Col, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const VerticalCard = (props) => {

    return (
        <Col lg={4} className='cardHolder' md={6} sm={6} xs={12} >
            <Link to={props.location} className='card' onClick={props.function}>
                <Card.Img variant="top" src={require(`../../assets/images${props.image}`)} />
                <Card.Body>
                    <h4 className='card-title'>{props.title}</h4>
                    <Card.Text className='text-muted'>
                        {props.text}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {props.category && <Badge pill>
                        {props.category}
                    </Badge>}
                    <span className='card-arrow'>
                        <FontAwesomeIcon icon='arrow-right' />
                    </span>
                </Card.Footer>
            </Link>
        </Col>
    )
}

export default VerticalCard;