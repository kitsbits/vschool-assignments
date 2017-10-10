import React from "react";

function TodoItem(props) {
    return (
        <div>
            <h1>{props.todo.title}</h1>
            <p>{props.todo.description}</p>
        <button onClick={(e) => props.delete(props.todo._id)}>DELETE</button>
        </div>
    )
}

export default TodoItem;
