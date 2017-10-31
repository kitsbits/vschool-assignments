import React from "react";
import AddCommentComponent from "./AddCommentComponent";
import {connect} from "react-redux";
import {addComment} from "../../../../redux/actions";

class AddCommentContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            text: ""
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
                [name]: newValue
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addComment(this.props.addId, this.state);
        this.setState({
            text: ""
        })
    }


    render() {
        return (
            <AddCommentComponent
                input={this.state}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                handleToggle={this.handleToggle}/>
        )
    }
}

export default connect(null, {addComment})(AddCommentContainer);
