import React from "react";

export default function AddCommentComponent(props) {
    const containerStyles = {
        width: "100%",
        padding: "20px",
        backgroundColor: "#5F5F5F",
        borderRadius: "2px"
    }

    const formStyles = {
        display: "flex",
        flexDirection: "column"
    }

    const textAreaStyles = {
        height: "55px",
        border: "1px solid white",
        width: "100%",
        padding: "10px",
        outlineColor: "#50E3C2",
        fontSize: "1em"
    }

    const buttonStyles = {
        outline: "none",
        border: "1px solid #50E3C2",
        backgroundColor: "transparent",
        color: "#50E3C2",
        alignSelf: "flex-end",
        marginTop: "5px"
    }

    return (
        <div style={containerStyles}>
            {/* <button onClick={props.handleToggle} type="button">COMMENT</button> */}
            <form onSubmit={props.handleSubmit} style={formStyles}>
                <textarea style={textAreaStyles} onChange={props.handleChange} name="text" value={props.input.text} placeholder="Add a comment..."></textarea>
                <button style={buttonStyles} type="submit">SUBMIT</button>
            </form>
        </div>
    )
}
