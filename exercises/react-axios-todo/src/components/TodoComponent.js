import React from "react";

function TodoComponent(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default TodoComponent;
