import React from "react";
import ForecastItem from "./ForecastItem";
let moment = require('moment');


function ForecastComponent(props) {
    const styles = {
        borderBottom: `1px solid #4A90E2`,
        marginBottom: "10px",
        width: "100%"
    }



    return (
        <div onClick={props.handleClick} className="forecast-component-container" style={styles}>
            <ForecastItem
                displayText="sunrise"
                displayInfo={moment(props.forecast.sunriseTime * 1000).format('LTS')}/>
            <ForecastItem
            displayText="sunset"
            displayInfo={moment(props.forecast.sunsetTime * 1000).format('LTS')}/>
            <ForecastItem
            displayText="sunset"
            displayInfo={moment(props.forecast.sunsetTime * 1000).format('LTS')}/>
            <ForecastItem
            displayText="sunset"
            displayInfo={moment(props.forecast.sunsetTime * 1000).format('LTS')}/>
            <ForecastItem
            displayText="sunset"
            displayInfo={moment(props.forecast.sunsetTime * 1000).format('LTS')}/>
            <ForecastItem
            displayText="sunset"
            displayInfo={moment(props.forecast.sunsetTime * 1000).format('LTS')}/>
            <ForecastItem
            displayText="sunset"
            displayInfo={moment(props.forecast.sunsetTime * 1000).format('LTS')}/>
            <ForecastItem
            displayText="sunset"
            displayInfo={moment(props.forecast.sunsetTime * 1000).format('LTS')}/>
            <ForecastItem
            displayText="sunset"
            displayInfo={moment(props.forecast.sunsetTime * 1000).format('LTS')}/>
            <ForecastItem
            displayText="sunset"
            displayInfo={moment(props.forecast.sunsetTime * 1000).format('LTS')}/>
        </div>
    )
}

export default ForecastComponent;
