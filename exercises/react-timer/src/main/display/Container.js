// get state from redux
// display state here
import React from "react";
import DisplayComponent from "./Component";
import {connect} from "react-redux";
import {addTime, resetTime} from "../../redux/actions";

class DisplayContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            intervalId: ""
        }
        this.start = this.start.bind(this);
        this.pause = this.pause.bind(this);
        this.reset = this.reset.bind(this);
    }

    start() {
        const interval = setInterval(this.props.addTime, 10);
        this.setState({
            intervalId: interval
        })
    }

    pause() {
        clearInterval(this.state.intervalId);
    }

    reset() {
        this.props.resetTime();
    }

    render() {
        const containerStyles = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh"
        }
        return (
            <div style={containerStyles}>
                <DisplayComponent
                    start={this.start}
                    pause={this.pause}
                    reset={this.reset}/>
            </div>
        )
    }

}

export default connect(null, {addTime, resetTime})(DisplayContainer);
