import React from "react";

function AboutComponent(props) {
    const images = {
        background: `url(${props.profile.img}) no-repeat center`,
        backgroundSize: `cover`
    }

    return (
        <div className="card-container">
            <div className="contact-img" style={images}></div>
            <h2 className="contact-name">{props.profile.name}</h2>
            <h4 className="contact-number">{props.profile.number}</h4>
        </div>
    )
}

export default AboutComponent;
