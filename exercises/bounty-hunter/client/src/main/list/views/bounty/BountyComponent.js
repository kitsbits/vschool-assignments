import React from "react";
import {Link} from "react-router-dom";

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

    const editContainerStyles = {
        marginTop: "55px",
        padding: "35px",
        border: "2px solid yellow",
        display: "none",
        flexDirection: "column",
        color: "green"
    }

    const marginStyles = {
        marginTop: "15px"
    }

    const buttonStyles = {
        width: "45px",
        height: "25px",
        backgroundColor: "transparent",
        border: "1px solid green",
        outline: "none",
        color: "green",
        marginTop: "25px",
        cursor: "hand",
        cursor: "pointer"
    }

    const editButtonStyles = {
        width: "200px",
        backgroundColor: "transparent",
        border: "1px solid yellow",
        outline: "none",
        color: "yellow",
        marginTop: "7px",
        fontSize: "1.5em",
        cursor: "hand",
        cursor: "pointer"
    }

    const editText = {
        fontSize: "1.5em",
        WebkitMarginBefore: "0.67em",
        WebkitMarginAfter: "0.67em",
        WebkitMarginStart: "0px",
        WebkitMarginEnd: "0px",
        fontWeight: "bold",
        marginTop: "7px",
        backgroundColor: "transparent",
        outline: "none",
        border: "1px solid yellow",
        color: "yellow",
        paddingLeft: "15px",
        width: "200px",
        height: "36px"
    }

    const backButtonStyles = {
        marginTop: "55px",
        marginRight: "25px",
        // width: "45px",
        // height: "25px",
        backgroundColor: "transparent",
        // border: "1px solid green",
        border: "none",
        outline: "none",
        color: "green",
        fontSize: "1em",
        cursor: "hand",
        cursor: "pointer",
        textDecoration: "none"
    }

    return (
        <div style={{display: "flex"}}>
            <Link to="/" style={backButtonStyles} type="button">BACK</Link>
            <div>
                <form onSubmit={props.handleToggle} style={containerStyles}>
                    <h1 style={marginStyles}>{props.bounty.firstName}</h1>
                    <h3 style={marginStyles}>{props.bounty.lastName}</h3>
                    <h1 style={marginStyles}>${props.bounty.bounty}</h1>
                    <p style={marginStyles}>LIVING: {props.bounty.living === "T"
                            ? "TRUE"
                            : "FALSE"}</p>
                    <p style={marginStyles}>TYPE: {props.bounty.type}</p>
                    <button style={buttonStyles} type="submit">EDIT</button>
                </form>
                <form onSubmit={props.handleToggle} style={editContainerStyles}>
                    <input onChange={props.handleChange} style={editText} type="text" name="firstName" value={props.bounty.firstName}/>
                    <input onChange={props.handleChange} style={editText} type="text" name="lastName" value={props.bounty.lastName}/>
                    <input onChange={props.handleChange} style={editText} type="number" name="bounty" value={props.bounty.bounty}/>
                    <input onChange={props.handleChange} style={editText} type="text" name="living" value={props.bounty.living === "T"
                        ? "TRUE"
                        : "FALSE"}/>
                    <input onChange={props.handleChange} style={editText} type="text" name="type" value={props.bounty.type}/>
                    <button style={editButtonStyles} type="submit">UPDATE</button>
                </form>
            </div>
        </div>
    )
}
