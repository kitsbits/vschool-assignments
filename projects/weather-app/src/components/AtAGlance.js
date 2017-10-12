import React from "react";

function AtAGlance(props) {
    return (
        <div className="today-component-container at-a-glance-container">
            <h1 className="at-a-glance-text">{props.displayText}{props.suffix}</h1>
            <div className="at-a-glance-above-container">
                <i className="fa fa-4x fa-sun-o weather-icon"></i>
                <h1 className="at-a-glance-text">Clear</h1>
            </div>
        </div>
    )
}

export default AtAGlance;
