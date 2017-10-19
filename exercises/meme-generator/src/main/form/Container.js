import React from "react";
import FormComponent from "./Component";
import {connect} from "react-redux";
import {addMeme} from "../../redux/actions/"

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                imgURL: "",
                topText: "",
                bottomText: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.persist();
        this.setState(prevState => {
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
        // get what's in inputs to Redux store
        // call add function to update meme list
        this.props.addMeme(this.state.inputs);
    }

    render() {
        console.log(this.state.inputs);
        return (
            <FormComponent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                inputs={this.state.inputs}/>
        )
    }
}

export default connect(null, {addMeme})(FormContainer);
