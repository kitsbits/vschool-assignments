import React from "react";

function TodoItem(props) {
    const iconStyles = {
        color: "white",
        position: "absolute",
        top: "10px",
        right: "30px"
    }

    return (
        <div className="todo-container">
            <form className="todo-item-container" onSubmit={event => {
                event.preventDefault();
                props.delete(props.todo._id)
            }} disabled>
                <i onClick={props.editClick} className="fa fa-2x fa-pencil" style={iconStyles}></i>
                <h4 className="todo-title display-block" name="title" type="text">{props.todo.title}</h4>
                <p className="todo-description display-block" name="description">{props.todo.description}</p>
                <input className="checkbox" onChange={props.handleChange} type="checkbox" name="completed" checked={props.value.completed}/>
                <button className="delete-button display-block" type="submit">DELETE</button>
            </form>
            <form className="edit-todo-item-container" onSubmit={event => {
                event.preventDefault();
                console.log(props);
                props.edit(props.todo._id, props.value);
            }}>
                <input onChange={props.handleChange} className="todo-title display-block" type="text" name="title" value={props.value.title}/>
                <textarea onChange={props.handleChange} className="todo-description display-block" type="text" name="description" value={props.value.description}></textarea>
                <button className="delete-button display-block" type="submit">UPDATE</button>
            </form>
        </div>
    )
}

export default TodoItem;
