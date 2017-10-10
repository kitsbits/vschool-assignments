import React from "react";
import axios from "axios";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    title: "something",
                    description: "something else"
                }
            ],
            number: 0
        }
        this.getList = this.getList.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        axios.get("https://api.vschool.io/ericnatejones/todo").then(response => {
            this.setState({todos: response.data, number: 4});
        });
    }

    getList() {

        let toDisplay = []
        for (let i = 0; i < this.state.number; i++) {
            toDisplay.push(<TodoItem todo={this.state.todos[i]} delete={this.delete} key={this.state.todos[i].title + i}/>);
        }
        return toDisplay;
        // return this.state.todos.map((todo, i) => {
        //     return <TodoItem todo={todo} delete={this.delete} key={todo.title + i}/>;
        // })
    }

    delete(deleteId) {
        axios.delete(`https://api.vschool.io/ericnatejones/todo/${deleteId}`)
    }

    render() {
        return this.getList();
    }
}

export default TodoList;
