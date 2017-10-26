import React from "react";

function TodayComponent(props) {
    return (
        <div className="today-component-container">
            <h4>{props.displayTitle.toUpperCase()}:</h4>
            <h1 className="component-text">{Number(props.displayText)}
                <span className="suffix">{props.suffix}</span>
            </h1>
        </div>
    )
}

export default TodayComponent;
