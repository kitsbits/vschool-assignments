import React from "react";

export default function AddComponent(props) {
    const formStyles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "50%",
        margin: "100px auto"
    }
    return (
        <form onSubmit={props.handleSubmit} style={formStyles}>
            <input onChange={props.handleChange} type="text" name="title" value={props.input.title} />
            <textarea onChange={props.handleChange} name="description" value={props.input.description}></textarea>
            <button type="submit">ADD NEW ISSUE</button>
        </form>
    )
}
