import React, { useContext } from "react";
import "./Events.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/mk";
import CustomToolbar from "./CustomCalendarToolbar/CustomCalendarToolbar";
import CustomEvent from "./CustomEvent/CustomEvent";
import { MyContext } from "../../Context/MyContext";
import CalendarTooltip from "./CalendarTooltip/CalendarTooltip";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";

const Events = () => {
  const { arrOfEventsForCalendar } = useContext(MyContext);
  const localizer = momentLocalizer(moment);

  return (
    <div className="Events">
      <Calendar
        className="content"
        showMultiDayTimes={true}
        components={{
          toolbar: CustomToolbar,
          event: CustomEvent,
          month: {
            dateHeader: ({ date, label }) => {
              let highlightDate = arrOfEventsForCalendar.find(
                (event) =>
                  event.start.getDate() === date.getDate() &&
                  event.start.getMonth() === date.getMonth() &&
                  event.start.getFullYear() === date.getFullYear()
              );
              return (
                <CalendarTooltip eventdetails={highlightDate}>
                  <span
                    className="date"
                    style={
                      highlightDate
                        ? {
                            color: "white",
                            backgroundColor: highlightDate.color,
                          }
                        : {
                            color: "black",
                            backgroundColor: "rgba(128, 128, 128, 0.125)",
                          }
                    }
                  >
                    {label < 10 ? label.toString().substring(1) : label}
                  </span>
                </CalendarTooltip>
              );
            },
          },
        }}
        localizer={localizer}
        events={arrOfEventsForCalendar}
        startAccessor="start"
        endAccessor="end"
        dayPropGetter={(date) => {
          const eventDay = arrOfEventsForCalendar.find(
            (event) =>
              event.start.getDate() === date.getDate() &&
              event.start.getMonth() === date.getMonth() &&
              event.start.getFullYear() === date.getFullYear()
          );
          const backgroundColor = eventDay
            ? eventDay.color
            : "rgba(128, 128, 128, 0.125)";
          return { style: { backgroundColor } };
        }}
      />
      <UpcomingEvents events={arrOfEventsForCalendar} />
    </div>
  );
};

export default Events;
