import React from "react";

function Contact(props) {
    const images = {
        background: `url(${props.img}) no-repeat center`,
        backgroundSize: `cover`
    }

    return (
        <div className="card-container">
            <div className="contact-img" style={images}></div>
        <h2 className="contact-name">{props.name}</h2>
            <h4 className="contact-number">{props.number}</h4>
        </div>
    )
}

export default Contact;
