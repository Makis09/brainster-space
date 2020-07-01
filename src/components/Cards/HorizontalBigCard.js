import React from 'react';
import { Row, Col, Badge, Image } from 'react-bootstrap';

const HorizontalBigCard = (props) => {
    return (
            <Row className={`HorizontalBigCard ${props.className ? props.className : null}`} id={props.id ? props.id : null} style={props.style ? props.style : null}>
                <Col lg={4} md={12} className='card-description'>
                    {props.badge && <Badge pill>
                        {props.badge}
                    </Badge>}
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    {props.children}
                </Col>
                <Col lg={8} md={12}>
                    <Image src={require(`../../assets/images${props.image}.jpg`)} alt="" rounded fluid />
                </Col>
            </Row>
    )
}

export default HorizontalBigCard;