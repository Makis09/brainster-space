import React from 'react';
import './Homepage.css';
import MainImageAndHeader from './MainImageAndHeader/MainImageAndHeader';
import AboutUs from './AboutUs/AboutUs';
import EventsHomePage from './EventsHomePage/EventsHomePage';
import CoworkingHomePage from '../CoworkingHomePage/CoworkingHomePage'
import EventsSpaceHomePage from '../EventsSpaceHomePage/EventsSpaceHomePage';
import PartnershipSection from '../PartnershipSection/PartnershipSection';


const Homepage = () => {
    return (
        <div className='Homepage'>
            <MainImageAndHeader/>
            <AboutUs/>
            <EventsHomePage/>
            <CoworkingHomePage/>
            <EventsSpaceHomePage/>
            <PartnershipSection/>
        </div>
    )
}

export default Homepage;