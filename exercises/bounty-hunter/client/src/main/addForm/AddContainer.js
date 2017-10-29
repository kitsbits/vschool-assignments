import React from "react";
import AddComponent from "./AddComponent";
import {connect} from "react-redux";
import {addBounty} from "../../redux/actions";

class AddContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            living: "",
            bounty: "",
            type: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.persist();
        let name = event.target.name;
        let newValue = event.target.value;
        this.setState(prevState => {
            return {
                ...prevState,
                [name]: newValue.toUpperCase()
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addBounty(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            living: "",
            bounty: "",
            type: ""
        })
    }

    render() {
        const containerStyles = {
            display: "fixed"
        }
        return (
            <div style={containerStyles}>
                <AddComponent
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    inputs={this.state}/>
            </div>
        )
    }
}

export default connect(null, {addBounty})(AddContainer);
