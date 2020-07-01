import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';


function CalendarTooltip(props) {


    const popover = (
        <Popover id="popover-basic">
            <Popover.Title style={props.eventdetails ? { background: props.eventdetails.color, color: 'white' } : null}>
                {props.eventdetails ? props.eventdetails.title : 'Нема настан за овој ден'}
            </Popover.Title>
            <Popover.Content style={props.eventdetails ? { background: props.eventdetails.color, color: 'white' } : null}>
                <div>{props.eventdetails ? `${(props.eventdetails.start.getHours() < 10 ? '0' : '') + props.eventdetails.start.getHours()}:${(props.eventdetails.start.getMinutes() < 10 ? '0' : '') + props.eventdetails.start.getMinutes()} - ${(props.eventdetails.end.getHours() < 10 ? '0' : '') + props.eventdetails.end.getHours()}:${(props.eventdetails.end.getMinutes() < 10 ? '0' : '') + props.eventdetails.end.getMinutes()}ч` : null}</div>
                {props.eventdetails &&
                    <div>{props.eventdetails.additionalInfo}</div>}
            </Popover.Content>
        </Popover>
    )
    return (

        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
            {props.children}
        </OverlayTrigger>
    );
}

export default CalendarTooltip;