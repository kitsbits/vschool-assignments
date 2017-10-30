import React from "react";
import {connect} from "react-redux";
import {editBounty} from "../../../../redux/actions";
import BountyComponent from "./BountyComponent";
import axios from "axios";

class Bounty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:8002/bounties/" + this.props.match.params.id).then(response => {
            this.setState(response.data)
        }).catch(err => {
            console.log(err);
        });
    }

    handleToggle(event) {
        event.preventDefault();
        if (event.target.nextSibling) {
            event.target.style.display = "none";
            event.target.nextSibling.style.display = "flex";
        } else if (event.target.previousSibling) {
            this.props.editBounty(this.state._id, this.state);
            event.target.style.display = "none";
            event.target.previousSibling.style.display = "flex";
        }
    }

    handleChange(event) {
        event.persist();
        const name = event.target.name;
        const newValue = event.target.value;
        this.setState(prevState => {
            return {
                ...prevState,
                [name]: newValue.toUpperCase()
            }
        })
    }

    render() {
        console.log(this.state);
        return (
            <BountyComponent
                bounty={this.state}
                handleToggle={this.handleToggle}
                handleChange={this.handleChange}/>
        )
    }

}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {editBounty})(Bounty);
