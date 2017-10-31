import React from "react";
import AddComponent from "./AddComponent";
import {connect} from "react-redux";
import {addIssue} from "../../redux/actions";

class AddContainer extends React.Component {
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
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addIssue(this.state);
        this.setState({
            title: "",
            description: ""
        });
    }

    render() {
        return (
            <div>
                <AddComponent
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    input={this.state}/>
            </div>
        )
    }
}

export default connect(null, {addIssue})(AddContainer);
