import React from "react";

function Box(props) {
    const styles = {
        backgroundColor: props.text <= 50 ? "red" : "blue"
    }

    return <div className="box" style={styles}>{props.text}</div>;
}

export default Box;
