import React, { createContext, useState, useEffect } from 'react';
import EventsDB from '../database/EventsDB';
import BlogPostsDB from '../database/BlogPosts';

const Context = createContext({});
const Provider = (props) => {
    const [showPartnershipModal, setShowPartnershipModal] = useState(false);
    const [showCompanyInovationModal, setShowCompanyInovationModal] = useState(false);
    const [upcomingEvents] = useState(EventsDB);
    const [blogPosts] = useState(BlogPostsDB);
    const [areFiltersExpanded, setAreFiltersExpanded] = useState(false);
    const [arrOfEventsForCalendar, setArrOfEventsForCalendar] = useState([])


    const filtersHolderClicked = () => {
        setAreFiltersExpanded(!areFiltersExpanded)
    }

    const eventsForCalendar = () => {
        let events = [];
        EventsDB.map(event => {
            event.calendarDetails.forEach(eventDay => (
                eventDay !== "undefined" ? events.push(eventDay) : null));
            return (setArrOfEventsForCalendar(events))
        })
    }

    useEffect(() => {
        eventsForCalendar()
    }, [])


    const context = {
        showPartnershipModal,
        setShowPartnershipModal,
        showCompanyInovationModal,
        setShowCompanyInovationModal,
        upcomingEvents,
        areFiltersExpanded,
        filtersHolderClicked,
        blogPosts,
        arrOfEventsForCalendar
    }

    return (
        <Context.Provider value={context}>{props.children}</Context.Provider>
    )
}

export const MyContext = Context;
export const MyProvider = Provider;