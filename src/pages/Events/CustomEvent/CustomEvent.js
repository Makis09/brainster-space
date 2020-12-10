import React from "react";

class CustomEvent extends React.PureComponent {
  render() {
    const { title, start, end, additionalInfo } = this.props.event;

    return (
      <div>
        <div className="eventTitle">{title}</div>
        <div className="eventTime">{`${
          (start.getHours() < 10 ? "0" : "") + start.getHours()
        }:${(start.getMinutes() < 10 ? "0" : "") + start.getMinutes()} - ${
          (end.getHours() < 10 ? "0" : "") + end.getHours()
        }:${(end.getMinutes() < 10 ? "0" : "") + end.getMinutes()}ч`}</div>
        <span className="eventDescription">{additionalInfo}</span>
      </div>
    );
  }
}

export default CustomEvent;
