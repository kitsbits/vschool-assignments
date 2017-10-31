import React from "react";
import moment from "moment";

export default function CommentsComponent(props) {
    const date = moment(props.comment.dateCommented).format('LL');
    const time = moment(props.comment.dateCommented).format('LTS');

    const containerStyles = {
        border: "1px solid black",
        padding: "25px",
        marginTop: "10px",
        width: "50%"
    }
    return (
        <div style={containerStyles}>
            <p>{props.comment.text}</p>
            <h5>Posted by: {props.comment.author}</h5>
            <h6>{date} @ {time}</h6>
        </div>
    )
}