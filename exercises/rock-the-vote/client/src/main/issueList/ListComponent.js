import React from "react";
import Issue from "./Issue";
import {connect} from "react-redux";
import {editIssue, deleteIssue} from "../../redux/actions";

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.issue.title,
            description: props.issue.description
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
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

    handleEdit(event) {
        event.preventDefault();
        this.props.editIssue(this.props.issue._id, this.state);
        event.target.previousSibling.style.display = "inherit";
        event.target.style.display = "none";
    }

    handleDelete(e) {
        this.props.deleteIssue(this.props.issue._id)
    }

    handleToggle(event) {
        event.target.parentElement.nextSibling.style.display = "flex";
        event.target.parentElement.style.display = "none";
    }

    render() {
        const containerStyles = {
            display: "flex",
            flexDirection: "column",
            marginBottom: "75px"
        }
        return (
            <div style={containerStyles}>
                <Issue
                    issue={this.props.issue}
                    input={this.state}
                    handleChange={this.handleChange}
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                    handleToggle={this.handleToggle}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {editIssue, deleteIssue})(ListComponent);
