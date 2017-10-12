import React from "react";

function Hit(props) {
    const images = {
        background: `url(${props.list.image}) no-repeat center`,
        backgroundSize: "cover"
    }
    function ifBlack() {
        if (props.list.name === "Rebecca Black") {
            return "black";
        } else {
            return `#${props.color}`
        }
    }
    return (
        <div className="hit-container" style={{
            backgroundColor: `#${props.color}`
        }}>
            <div className="hit-img" style={images}></div>
        <h4 className="hit-text" style={{color: `#${props.color}`}}>{props.list.name}</h4>
        </div>
    )
}

export default Hit;
