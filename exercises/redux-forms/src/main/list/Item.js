import React from "react";

const buttonStyles = {
    height: "40px",
    width: "102px",
    backgroundColor: "transparent",
    outline: "none",
    border: "1px solid blue",
    color: "blue",
    marginLeft: "25px",
    display: "block",
    marginTop: "25px"
}

function Item(props) {
    return (
        <div>
            <h1>{props.country.name}</h1>
            <img src={props.country.imgURL} alt=""/>
        <button style={buttonStyles} type="button">DELETE</button>
        </div>
    )
}

export default Item;
