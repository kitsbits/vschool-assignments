import React from "react";

function TodoItem(props) {
    return (
        <form className="todo-item-container" onSubmit={event => {
                event.preventDefault();
                props.delete(props.todo._id)}} disabled>
            <input className="todo-title display-block" name="title" type="text" value={props.todo.title}
            disabled/>
            <textarea className="todo-description display-block" name="description" value={props.todo.description} disabled></textarea>
            <input onChange={props.handleChange} type="checkbox" name="completed" checked={props.value.completed} />
            <button className="delete-button display-block" type="submit">DELETE</button>
        </form>
    )
}

export default TodoItem;
