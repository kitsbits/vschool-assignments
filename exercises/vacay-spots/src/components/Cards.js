import React from "react";

function Cards(props) {
    function pickColor() {
        if (props.time === "Winter") {
            return "#D4FFFF";
        } else if (props.time === "Spring") {
            return "#D5FFB4";
        } else if (props.time === "Summer") {
            return "#FFFF90";
        } else if (props.time === "Fall") {
            return "#FF8061";
        }
    }

    const styles = {
        background: `url(${props.img}) no-repeat center`,
        backgroundSize: "cover",
        border: "25px solid" + pickColor(),
        color: pickColor()
    }

    function rankCost() {
        if (parseInt(props.price) < 500) {
            return "$";
        } else if (parseInt(props.price) >= 500 && parseInt(props.price) < 1000) {
            return "$$";
        } else if (parseInt(props.price) > 1000) {
            return "$$$";
        }

    }

    return (
        <div className="each-card-container" style={styles}>
            <div className="text-container">
                <h2 className="place">{props.place}</h2>
                <h4 className="price">${props.price}</h4>
                <h3 className="time">{props.time.toUpperCase()}</h3>
                <h1 className="cost-rank">{rankCost()}</h1>
            </div>
        </div>
    );
}

export default Cards;
