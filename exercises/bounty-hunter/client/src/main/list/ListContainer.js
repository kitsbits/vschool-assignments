import React from "react";
import ListComponent from "./ListComponent";
import {connect} from "react-redux";
import {getBounties} from "../../redux/actions";

class ListContainer extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getBounties();
    }

    genBounties() {
        console.log(this.props.bounties);
        return this.props.bounties.map((bounty, i) => {
            const styles = {
                borderLeft: "1px solid green",
                padding: "45px",
                width: "400px"
            }
            return (
                <div style={styles}>
                    <ListComponent
                        bounty={bounty}
                        key={bounty._id}/>
                </div>
            )
        });
    }

    render() {
        const containerStyles = {
            marginTop: "50px"
        }
        return (
            <div style={containerStyles}>
                {this.genBounties()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {getBounties})(ListContainer);
