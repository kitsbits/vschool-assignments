import React from "react";
import {connect} from "react-redux";

function DisplayComponent(props) {

    const buttonStyles = {
        height: "100px",
        width: "100px",
        borderRadius: "100%",
        marginLeft: "20px",
        backgroundColor: "transparent",
        border: "2px solid blue",
        color: "blue",
        fontSize: "0.5em",
        fontFamily: "'Nunito', sans-serif",
        outline: "none",
        cursor: "hand",
        cursor: "pointer"
    }

    const containerStyles = {
        textAlign: "center",
        fontFamily: "'Nunito', sans-serif",
        color: "blue",
        fontSize: "2em"
    }

    const buttonContainerStyles = {
        marginTop: "50px"
    }

    return (
        <div style={containerStyles}>
            <h1>{props.timer.mins} : {props.timer.secs} : {props.timer.millisecs}</h1>
            <div style={buttonContainerStyles}>
                <button onClick={props.start} type="button" style={buttonStyles}>START</button>
                <button onClick={props.pause} type="button" style={buttonStyles}>PAUSE</button>
                <button onClick={props.reset} type="button" style={buttonStyles}>RESET</button>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {})(DisplayComponent);
