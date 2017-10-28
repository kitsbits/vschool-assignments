import React from "react";

export default function BountyComponent(props) {
    const containerStyles = {
        marginTop: "55px",
        padding: "75px",
        border: "2px solid green",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "green"
    }

    const marginStyles = {
        marginTop: "15px"
    }
    return (

        <div>
            <div style={containerStyles}>
                <h1 style={marginStyles}>{props.bounty.firstName}</h1>
                <h4 style={marginStyles}>{props.bounty.lastName}</h4>
                <h1 style={marginStyles}>${props.bounty.bounty}</h1>
                <p style={marginStyles}>LIVING: {props.bounty.living === "T" ? "TRUE" : "FALSE"}</p>
                <p style={marginStyles} >TYPE: {props.bounty.type}</p>
            </div>
            <form style={containerStyles}>
                <input type="text" name="firstName" value={props.bounty.firstName} />
                <input type="text" name="lastName" value={props.bounty.lastName} />
                <input type="number" name="bounty" value={props.bounty.bounty} />
                <input type="text" name="living" value={props.bounty.living === "T" ? "TRUE" : "FALSE"} />
                <input type="text" name="type" value={props.bounty.type} />
            </form>
        </div>
    )
}
