import React from "react";
import FormComponent from "./FormComponent";
import {connect} from "react-redux";
import {countries} from "../redux/actions/index";

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                name: "",
                imgURL: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.persist();
        this.setState((prevState) => {
            const name = event.target.name;
            const newValue = event.target.value;
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: newValue
                }
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addCountry(this.state.inputs);
        this.setState({
            inputs: {
                name: "",
                imgURL: ""
            }
        })
    }

    render() {
        return (
            <div>
                <FormComponent
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    inputs={this.state.inputs}/>
            </div>
        )
    }
}

export default connect(null, countries)(FormContainer);
