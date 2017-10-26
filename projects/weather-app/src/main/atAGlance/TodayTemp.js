import React from "react";

function TodayTemp(props) {
    return (
        <div className="today-component-container at-a-glance-container">
            <h1 className="at-a-glance-text">{props.displayText}{props.suffix}</h1>
        </div>
    )
}

export default TodayTemp;
