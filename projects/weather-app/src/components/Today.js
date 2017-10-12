import React from "react";
import TodayComponent from "./TodayComponent";
import AtAGlance from "./AtAGlance";

function Today(props) {
    return (
        <div className="today-container">
            <TodayComponent displayTitle="humidity"
                            displayText={Math.round(Number(props.data.humidity)*100)}
                            suffix="%"
                            />
            <TodayComponent displayTitle="dew point"
                            displayText={Math.round(Number(props.data.dewPoint))}
                            suffix="°"
                            />
            <AtAGlance  displayText={Math.round(Number(props.data.temperature))}
                        suffix="°"
                        />
            <TodayComponent displayTitle="UV index"
                            displayText={Number(props.data.uvIndex)}/>
            <TodayComponent displayTitle="wind"
                            displayText={Number(props.data.wind)}
                            suffix="mph"
                            />
        </div>
    )
}

export default Today;
