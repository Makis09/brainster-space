import React, { createContext, useState, useEffect } from "react";
import EventsDB from "../database/EventsDB";
import BlogPostsDB from "../database/BlogPosts";
import AcademiesDB from "../database/Academies";

const Context = createContext({});
const Provider = (props) => {
  const [showPartnershipModal, setShowPartnershipModal] = useState(false);
  const [showCompanyInovationModal, setShowCompanyInovationModal] = useState(
    false
  );
  const [upcomingEvents] = useState(EventsDB);
  const [blogPosts] = useState(BlogPostsDB);
  const [academies] = useState(AcademiesDB);
  const [areFiltersExpanded, setAreFiltersExpanded] = useState(false);
  const [arrOfEventsForCalendar, setArrOfEventsForCalendar] = useState([]);

  const filtersHolderClicked = () => {
    setAreFiltersExpanded(!areFiltersExpanded);
  };

  const eventsForCalendar = () => {
    let events = [];
    for (let event of EventsDB) {
      events.push(...event.calendarDetails);
      setArrOfEventsForCalendar(events);
    }
  };

  useEffect(() => {
    eventsForCalendar();
  }, []);

  const context = {
    showPartnershipModal,
    setShowPartnershipModal,
    showCompanyInovationModal,
    setShowCompanyInovationModal,
    upcomingEvents,
    areFiltersExpanded,
    filtersHolderClicked,
    blogPosts,
    arrOfEventsForCalendar,
    academies,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export const MyContext = Context;
export const MyProvider = Provider;
