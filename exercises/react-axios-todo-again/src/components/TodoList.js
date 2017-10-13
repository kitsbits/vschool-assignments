import React from "react";
import TodoComponent from "./TodoComponent";
import axios from "axios";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: {
                title: "",
                description: ""
            }
        }
        this.deleteTodo = this.deleteTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        axios.get("https://api.vschool.io/nonnie/todo").then(response => {
            this.setState({
                todos: response.data
            })
            response.data.forEach(each => {
                axios.delete(`https://api.vschool.io/nonnie/todo/${each._id}`).then(response => {
                    console.log(response);
                })
            })
        })
    }

    deleteTodo(id) {
        axios.delete(`https://api.vschool.io/kit/todo/${id}`).then(response => {
            console.log(response);
            this.setState(prevState => {
                return {
                    todos: prevState.todos.filter(todo => id !== todo._id)
                }
            })
        })
    }

    addTodo() {
        axios.post("https://api.vschool.io/kit/todo", this.state.newTodo).then(response => {
            this.setState(prevState => {
                return {
                    todos: [...prevState.todos, response.data],
                    newTodo: {
                        title: "",
                        description: ""
                    }
                }
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

    render() {
        return (
            <div>hello</div>
            // <div>
            //     <input name="title" onChange={this.handleChange} type="text" value={this.state.newTodo.title} />
            //     <input name="description" onChange={this.handleChange} type="text" value={this.state.newTodo.description} />
            //     <button onClick={this.addTodo}>ADD</button>
            //     {this.state.todos.map((todo, i) => {
            //         return (
            //             <TodoComponent  todo={todo}
            //                             key={todo.title + i}
            //                             delete={this.deleteTodo}/>
            //         )
            //     })}
            // </div>
        )
    }
}

export default TodoList;
