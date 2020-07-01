import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PartnershipSection = () => {

    return (
        <Row className='PartnershipSection'>
            <Col md={12}>
                <h1>Партнери</h1>
                <h3>Имаш идеја? Отворени сме за соработка</h3>
                <Link to='/events-space' className='calendarBtn btn'>
                    <FontAwesomeIcon icon='arrow-right' />
            ВИДИ ГО ПРОСТОРОТ
            </Link>
            </Col>
        </Row>
    )
}

export default PartnershipSection;