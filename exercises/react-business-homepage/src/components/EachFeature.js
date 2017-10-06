import React from "react";

function EachFeature(props) {

    const images = {
        background: `url(${props.img}) no-repeat center`,
        backgroundSize: `cover`
    }
    return (
        <div className="each-feature">
            <div className="featured-img" style={images} alt={props.altText}></div>
            <h4 className="featured-text">{props.title}</h4>
            <p className="featured-price">${props.price}</p>
        </div>
    )
}

export default EachFeature;
