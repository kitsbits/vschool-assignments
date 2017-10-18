import React from "react";

import {connect} from "react-redux";
import {addOne, minusOne, reset} from "../redux/actions";

function Counter(props) {
    return (
        <div className="counter-container">
            <button onClick={props.minusOne} type="button">-</button>
            <h1>{props.counter < 0 ? 0 : props.counter}</h1>
            <button onClick={props.addOne} type="button">+</button>
            <button onClick={props.reset} className="reset" type="button">RESET</button>
        </div>
    )
}

// connect the dispatch with our action creators
// connect takes actions and passes them down to the component via props
// automatically calls the dispatch when those actions get called
// connect takes two arguments: 1) what we want from state as props; 2) is the set of action creators (in an object) we want to dispatch from this component

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, {addOne, minusOne, reset})(Counter);
