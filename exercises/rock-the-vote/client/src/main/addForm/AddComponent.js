import React from "react";

export default function AddComponent(props) {
    const formStyles = {
        display: "flex",
        justifyContent: "space-around",
        width: "80%",
        margin: "100px auto"
    }

    const inputStyles = {
        width: "40%",
        height: "75px",
        outlineColor: "#50E3C2",
        fontSize: "2em",
        padding: "15px",
        borderRadius: "2px",
        border: "none"
    }

    const buttonStyles = {
        fontSize: "2em",
        height: "75px",
        width: "75px",
        borderRadius: "100%",
        backgroundColor: "transparent",
        border: "3px solid #50E3C2",
        color: "#50E3C2",
        cursor: "pointer"

    }
    return (
        <form onSubmit={props.handleSubmit} style={formStyles}>
            <input onChange={props.handleChange} type="text" name="title" value={props.input.title} style={inputStyles}/>
            <textarea onChange={props.handleChange} name="description" value={props.input.description} style={inputStyles}></textarea>
        <button type="submit" style={buttonStyles}>ADD</button>
        </form>
    )
}
