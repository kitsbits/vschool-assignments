import React from "react";
import Form from "./Form";
import List from "./List";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            inputBox: "",
            runningList: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => {
            return {
                runningList: [...prevState.runningList, prevState.inputBox],
                inputBox: ""
            };
        });

    }

    handleChange(event) {
        this.setState({inputBox: event.target.value});
    }

    render() {
        return (
            <div>
                <Form theText={this.state.inputBox} change={this.handleChange} click={this.handleClick}/>
                <List list={this.state.runningList}/>
            </div>
        )
    }
}

export default App;
