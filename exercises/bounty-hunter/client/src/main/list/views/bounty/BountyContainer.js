import React from "react";
import {connect} from "react-redux";
import BountyComponent from "./BountyComponent";
import axios from "axios";

class Bounty extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get("http://localhost:8002/bounties/" + this.props.match.params.id).then(response => {
            console.log(response.data)
            this.setState(response.data)
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <BountyComponent bounty={this.state}/>
        )
    }

}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {})(Bounty);
