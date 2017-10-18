import React from "react";

function ForecastComponent(props) {
    const styles = {
        backgroundColor: `#${props.color}`,
        height: "300px",
        minWidth: "125px"
    }
    return (
        <div className="forecast-component-container" style={styles}>
            <div className="component-styles">1</div>
            <div className="component-styles">2</div>
            <div className="component-styles">3</div>
        </div>
    )
}

export default ForecastComponent;
