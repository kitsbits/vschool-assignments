import React from "react";
import axios from "axios";
import TodoContainer from "./TodoContainer";
import AddTodo from "./AddTodo";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state =  {
            todos: [],
            newTodo: {
                title: "",
                description: ""
            }
        }
        this.deleteTodo = this.deleteTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        axios.get("https://api.vschool.io/kit/todo").then(response => {
            this.setState({
                todos: response.data
            })
        })
    }

    handleChange(event) {
        const name = event.target.name;
        const newValue = event.target.value;
        this.setState(prevState => {
            return {
                newTodo: {
                    ...prevState.newTodo,
                    [name]: newValue
                }
            }
        })
    }

    deleteTodo(id) {
        axios.delete(`https://api.vschool.io/kit/todo/${id}`).then(response => {
            this.setState(preState => {
                return {
                    todos: preState.todos.filter(todo => id !== todo._id)
                }
            })
        });
    }

    addTodo() {
        axios.post("https://api.vschool.io/kit/todo/", this.state.newTodo).then(response => {
            this.setState(prevState => {
                return {
                    todos: [...prevState.todos, response.data],
                    newTodo: {
                        title: "",
                        description: ""
                    }
                }
            })
        });
    }

    editTodo(id, newTodo) {
        axios.put(`https://api.vschool.io/kit/todo/${id}`, newTodo).then(response => {
            const editedItem = response.data;
            this.setState(prevState => {
                const newList = prevState.todos.map(todo => {
                    if (todo._id === id) {
                        return editedItem;
                    } else {
                        return todo;
                    }
                })
                return {
                    todos: newList
                }
            });
        });
    }

    render() {
        return (
            <div className="list-container">
                <AddTodo        add={this.addTodo}
                                change={this.handleChange}
                                value={this.state.newTodo}/>

            <div className="todos-container">
                    {this.state.todos.map((todo, i) => {
                    return (
                        <TodoContainer  todo={todo}
                                        key={todo.title + i}
                                        delete={this.deleteTodo}
                                        edit={this.editTodo}/>
                            )
                    })}
                </div>
            </div>
        )
    }
}

export default TodoList;
