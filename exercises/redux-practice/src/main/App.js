import React from "react";
import {connect} from "react-redux";
import {getList} from "../redux/actions";

class App extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getList();
    }

    render() {
        console.log(this.props.todos);
        return (
            <div>
                {this.props.todos.map(todo => {
                    return (
                        <div key={todo.id}>
                            <h1>{todo.title}</h1>
                            <p>{todo.description}</p>
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

export default connect(mapStateToProps, {getList})(App);
