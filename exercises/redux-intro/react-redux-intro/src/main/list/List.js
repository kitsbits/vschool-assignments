import React from "react";
import ListItem from "./ListItem";
import {connect} from "react-redux";
import {removeFirstContact} from "../../redux/actions/index";

function List(props) {
    return (
        <div className="counter-container">
            {props.list.map((item, i) => {
                return <ListItem
                            item={item}
                            key={item.phone + i}/>
                    })}
            <button onClick={props.removeFirstContact} type="button">REMOVE FIRST CONTACT</button>
        </div>
    )
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {removeFirstContact})(List);


// make list component
    // get contact list fro redux
    // map through list and render an item component for each one

// make item component
    // display item info
