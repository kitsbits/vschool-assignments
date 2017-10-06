import React from "react";
import TodoComponent from "./TodoComponent";
import axios from "axios";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
            ]
        }
    }

    componentDidMount() {
        axios.get("https://api.vschool.io/ericnatejones/todo").then(response => {
            this.setState(() => {
                return {
                    todos: response.data
                }
            });
        });
    }

    render() {
        const list = this.state.todos;
        return list.map(item => {
            return (
                <div>
                    <TodoComponent  title={item.title}
                                    description={item.description}/>
                </div>
            )
        });
    }

}

export default TodoList;
