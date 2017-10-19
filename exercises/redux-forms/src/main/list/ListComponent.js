import React from "react";

function ListComponent(props) {
    const containerStyles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px"
    }
    return (
        <div style={containerStyles}>
            {props.genList()}
        </div>
    )
}

export default ListComponent;
