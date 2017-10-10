import React from "react";

function Hero(props) {
    return (
        <div className="hero-container">
            <img className="hero-img" src={props.hero.img} alt="" onClick={(e) => props.handleClick(props.hero.firstAppearance, props.hero.publisher)}/>
            <h1>{props.hero.name}</h1>
            <h3>{props.hero.aka}</h3>
        </div>
    );
}

export default Hero;
