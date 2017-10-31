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
            return <ListComponent
                        issue={issue}
                        key={issue._id}/>
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
