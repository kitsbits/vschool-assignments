import React from "react";

function ForecastItem(props) {
    const styles = {
        width: "10%",
        margin: "20px",
        textAlign: "center"
    }

    return (
        <div style={styles}>
            <p>{props.displayText.toUpperCase()}:</p>
            <p>{props.displayInfo}</p>
        </div>
    )
}

export default ForecastItem;
