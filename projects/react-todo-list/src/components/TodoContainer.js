import React from "react";
import TodoItem from "./TodoItem";

class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editTodo: {
                title: this.props.todo.title,
                description: this.props.todo.description,
                completed: this.props.todo.completed
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const newValue = event.target.value;
        const checkedValue = event.target.checked;
        const type = event.target.type;
        this.setState(prevState => {
             return {
                 editTodo: {
                     ...prevState.editTodo,
                     [name]: type === "checkbox" ? checkedValue : newValue
                 }
             }
        })
    }

    render() {
        return (
            <TodoItem   todo={this.props.todo}
                        delete={this.props.delete}
                        edit={this.props.edit}
                        handleChange={this.handleChange}
                        value={this.state.editTodo}/>
        )
    }
}

export default TodoContainer;
