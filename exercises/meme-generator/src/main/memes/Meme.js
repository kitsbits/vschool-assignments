import React from "react";
import {connect} from "react-redux";
import {deleteMeme} from "../../redux/actions/";

function Meme(props) {
    const backgroundImg = {
        background: `url(${props.meme.imgURL}) no-repeat center`,
        backgroundSize: "cover",
        width: "100%",
        height: "100%"
    }

    const containerStyles = {
        width: "500px",
        height: "350px",
        overflow: "hidden",
        marginTop: "100px",
        position: "relative"
    }

    const topTextStyles = {
        color: "white",
        fontFamily: "'Rubik Mono One', sans-serif",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)"

    }

    const bottomTextStyles = {
        color: "white",
        fontFamily: "'Rubik Mono One', sans-serif",
        position: "absolute",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)"
    }

    const buttonStyles = {
        height: "40px",
        width: "100px",
        outline: "none",
        border: "1px solid blue",
        backgroundColor: "transparent",
        marginLeft: "20px",
        color: "blue",
        fontSize: "0.75em",
        marginTop: "25px"
    }

    return (
        <div>
            <div style={containerStyles}>
                <div style={backgroundImg}>
                    <h1 style={topTextStyles}>{props.meme.topText}</h1>
                    <h1 style={bottomTextStyles}>{props.meme.bottomText}</h1>
                </div>
            </div>
            <button style={buttonStyles} onClick={(e) => props.deleteMeme(props.index)} type="button">DELETE</button>
        </div>
    )
}
// https://images.unsplash.com/photo-1507980062492-714282f31ee0
export default connect(null, {deleteMeme})(Meme);
