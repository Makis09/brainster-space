import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AcademyCard = (props) => {

    return (
        <Col lg={4} md={6} sm={12} xs={12} className='AcademyCard'>
            <a href={props.link} target='_blank' rel='noopener noreferrer' >
                <img src={require(`../../assets/images/academies/${props.image}`)} alt="" />
                <div className='infoHolder' style={{ backgroundColor: `${props.bg}`,background: `${props.bgGradient}`}}>
                    <div>
                        <h2>{props.title}</h2>
                    </div>
                    <div>
                        <div style={{textAlign:'center'}}>
                            <span className='card-arrow'>
                                <FontAwesomeIcon icon='arrow-right' />
                            </span>
                        </div>
                        <Card.Text><FontAwesomeIcon size='lg' icon='user' />Слободни места: {props.availablePlaces}</Card.Text>
                        <Card.Text><FontAwesomeIcon size='lg' icon={['far', 'calendar-alt']} />Уписи до: {props.joinUntil}</Card.Text>
                        <Card.Text><FontAwesomeIcon size='lg' icon={['far', 'clock']} />Стани {props.position} за {props.academyMonthsDuration} месеци</Card.Text>
                        <Card.Text><FontAwesomeIcon size='lg' icon={['far', 'handshake']} />Партнери за вработување: {props.employmentPartners}</Card.Text>
                    </div>
                </div>
            </a>
        </Col>
    )
}

export default AcademyCard;
