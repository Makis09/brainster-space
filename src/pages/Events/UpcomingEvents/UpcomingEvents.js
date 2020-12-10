import React from 'react';


const UpcomingEvents = (props) => {

    let upcomingEvents = props.events.filter(event =>
        new Date(event.start.toDateString()) > new Date(new Date().toDateString())
    ).sort(function (a, b) {
        var dateA = new Date(a.start), dateB = new Date(b.start);
        return dateA - dateB;
    })

    return (
        <div className='UpcomingEvents'>
            <h4>Следни Настани</h4>
            {upcomingEvents.map((event, index) => (
                <div key={index} className='singleEvent' style={{ borderLeft: `5px solid ${event.color}` }}>
                    <div>{`${event.start.getDate() < 10 ? '0' + event.start.getDate() : event.start.getDate()}.${(event.start.getMonth() < 9 ? '0' + (event.start.getMonth() + 1) : event.start.getMonth() + 1)}.${event.start.getFullYear()}`}</div>
                    <div><h5>{event.title}</h5></div>
                    <div>{`${(event.start.getHours() < 10 ? '0' : '') + event.start.getHours()}:${(event.start.getMinutes() < 10 ? '0' : '') + event.start.getMinutes()} - ${(event.end.getHours() < 10 ? '0' : '') + event.end.getHours()}:${(event.end.getMinutes() < 10 ? '0' : '') + event.end.getMinutes()}ч`}</div>
                </div>)
            )}
        </div>
    )
}

export default UpcomingEvents;