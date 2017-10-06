import React from "react";

function Cards(props) {
    const styles = {
        background: `url(${props.img}) no-repeat center`,
        backgroundSize: "cover",
        border: `25px solid ${props.color}`,
        color: `${props.color}`
    }

    return (
        <div className="each-card-container" style={styles}>
            <div className="text-container">
                <h2 className="place">{props.place}</h2>
                <h4 className="price">${props.price}</h4>
                <h3 className="time">{props.time.toUpperCase()}</h3>
            <h1 className="cost-rank">{props.howExpensive}</h1>
            </div>
        </div>
    );
}

export default Cards;
