import React from "react";
import ListComponent from "./ListComponent";
import {connect} from "react-redux";
import {loadIssues} from "../../redux/actions";

class ListContainer extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.loadIssues();
    }

    genList() {
        return this.props.issues.map(issue => {
            const containerStyles = {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "stretch",
                width: "75%",
                margin: "auto"
            }
            return (
                <div style={containerStyles} key={issue._id}>
                    <ListComponent issue={issue}/>
                </div>
            )
        });
    }

    render() {
        return this.genList();
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {loadIssues})(ListContainer);
