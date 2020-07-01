import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MyContext } from '../../../Context/MyContext';
import VerticalCard from '../../Cards/VerticalCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const EventsHomePage = () => {
    const { upcomingEvents } = useContext(MyContext);

    const events = upcomingEvents.map((event, i) => (
        <VerticalCard
            key={i}
            location={event.url}
            image={`/events/${event.image}.jpg`}
            title={event.title}
            text={event.text}
        />
    ))

    return (
        <Row className='EventsHomePage'>
            <Col md={12}>
                <h1 className='text-center'>Настани</h1>
            </Col>
            {events}
            <Col md={12}>
                <Link className='calendarBtn btn' to='/events'>
                    <FontAwesomeIcon icon={['far', 'calendar-alt']} size='lg' />
                КАЛЕНДАР НА НАСТАНИ
            </Link>
            </Col>
        </Row>
    )
}
export default EventsHomePage;