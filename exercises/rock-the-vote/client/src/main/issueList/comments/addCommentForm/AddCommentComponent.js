import React from "react";

export default function AddCommentComponent(props) {
    const formStyles = {
        display: "none"
    }
    return (
        <div>
            <button onClick={props.handleToggle} type="button">COMMENT</button>
            <form onSubmit={props.handleSubmit} style={formStyles}>
                <textarea onChange={props.handleChange} name="text" value={props.input.text}></textarea>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}
