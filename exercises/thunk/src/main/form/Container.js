import React from "react";
import FormInputs from "./Component";
import {connect} from "react-redux";
import {addTodo} from "../../redux/actions";

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.persist();
        const name = event.target.name;
        const newValue = event.target.value;
        this.setState(prevState => {
            return {
                ...prevState,
            [name]: newValue
            }
        });
    }

    handleSubmit(event) {
            event.preventDefault();
            this.props.addTodo(this.state);
            this.setState({
                title: "",
                description: ""
            });
    }

    render() {
        return (
            <div>
                <FormInputs
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    inputs={this.state}/>
            </div>
        )
    }
}

export default connect(null, {addTodo})(FormContainer);
