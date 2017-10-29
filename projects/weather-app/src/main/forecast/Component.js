import React from "react";
import ForecastItem from "./ForecastItem";
let moment = require('moment');


function ForecastComponent(props) {

    return (
        <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
            <div style={{paddingLeft: "30px", display: "flex", alignItems: "flex-end"}}>
                <h2>{moment(props.forecast.time * 1000).format('dddd')}</h2>
                <span style={{marginLeft: "20px"}}>{props.forecast.summary}</span>
            </div>
            <div onClick={props.handleClick} className="forecast-component-container">
                <ForecastItem
                displayText="high"
                displayInfo={Math.round(Number(props.forecast.temperatureHigh)) + " °"}/>
                <ForecastItem
                displayText="low"
                displayInfo={Math.round(Number(props.forecast.temperatureLow)) + "°"}/>
                <ForecastItem
                    displayText="sunrise"
                    displayInfo={moment(props.forecast.sunriseTime * 1000).format('LTS')}/>
                <ForecastItem
                displayText="sunset"
                displayInfo={moment(props.forecast.sunsetTime * 1000).format('LTS')}/>
                <ForecastItem
                displayText="humidity"
                displayInfo={Math.round(Number(props.forecast.humidity)*100) + "%"}/>
            </div>
        </div>
    )
}

export default ForecastComponent;
