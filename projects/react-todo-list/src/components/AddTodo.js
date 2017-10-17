import React from "react";

function AddTodo(props) {
    return (
        <form className="add-todo-container" onSubmit={(event) => {
            event.preventDefault();
            props.add();
            }}>
            <input className="add-todo-text" onChange={props.change} type="text" name="title" value={props.value.title}/>
            <input className="add-todo-text" onChange={props.change} type="text" name="description" value={props.value.description}/>
            <button type="submit">ADD</button>
        </form>
    )
}

export default AddTodo;
