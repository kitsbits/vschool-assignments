import React from "react";

function MemeComponent(props) {
    const containerStyles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <div style={containerStyles}>
            {props.genMemes()}
        </div>
    )
}

export default MemeComponent
