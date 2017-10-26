import React from "react";
import TodayComponent from "./TodayComponent";
import TodayTemp from "./TodayTemp";

function Today(props) {
    return (
        <div>
            <div className="today-container">
                <TodayComponent displayTitle="humidity"
                                displayText={Math.round(Number(props.data.humidity)*100)}
                                suffix="%"
                                />
                <TodayComponent displayTitle="dew point"
                                displayText={Math.round(Number(props.data.dewPoint))}
                                suffix="°"
                                />
                <TodayTemp displayText={Math.round(Number(props.data.temperature))}
                            suffix="°"
                            summary={props.data.summary}
                            />
                <TodayComponent displayTitle="UV index"
                                displayText={Number(props.data.uvIndex)}/>
                <TodayComponent displayTitle="wind"
                                displayText={Number(props.data.wind)}
                                suffix="mph"
                                />
            </div>
        </div>
    )
}

export default Today;
