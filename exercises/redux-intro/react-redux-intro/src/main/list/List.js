import React from "react";
import ListItem from "./ListItem";
import {connect} from "react-redux";

function List(props) {
    return (
        <div className="counter-container">
            {props.list.map((item, i) => {
                return <ListItem
                            item={item}
                            key={item.phone + i}/>
                    })}
        </div>
    )
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {})(List);


// make list component
    // get contact list fro redux
    // map through list and render an item component for each one

// make item component
    // display item info
