import React from "react";
import {connect} from "react-redux";
import {loadList} from "../../redux/actions/";
import EditFormContainer from "./form/Container.js";

class TodoList extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.loadList();
    }

    render() {
        return (
            <div>
                <h1>todo list</h1>
                {this.props.todos.map((todo, i) => {
                    return (
                        <div key={todo.title + i}>
                            <h2>{todo.title}</h2>
                            <p>{todo.description}</p>
                            <EditFormContainer
                                todo={todo}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {loadList})(TodoList);
