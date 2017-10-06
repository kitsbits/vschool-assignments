import React from "react";
import axios from "axios";
import TodoComponent from "./TodoComponent";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        axios.get("https://api.vschool.io/ericnatejones/todo").then(response => {
            this.setState(() => {
                return {
                    todos: response.data
                }
            })
        });
    }

    render() {
        const list = this.state.todos;
        return list.map(todo => {
            return (
                <div>
                    <TodoComponent todo={todo}/>
                </div>
            )
        });
    }
}

export default TodoList;
