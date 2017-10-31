import React from "react";
import moment from "moment";

export default function CommentsComponent(props) {
    const date = moment(props.comment.dateCommented).format('LL');
    const time = moment(props.comment.dateCommented).format('LTS');

    const containerStyles = {
        marginTop: "20px",
        display: "flex",
        flexDirection: "column"
    }

    const commentStyles = {
        border: "1px solid #9B9B9B",
        borderRadius: "2px",
        padding: "15px",
        marginBottom: "5px",
        fontSize: "1.2em"
    }

    const authorStyles = {
        fontSize: "0.75em",
        paddingRight: "10px",
        borderRight: "1px solid #50E3C2",
        marginRight: "10px"
    }

    const dateStampeStyles = {
        alignSelf: "flex-end",
        fontSize: "0.75em"
    }

    return (
        <div style={containerStyles}>
            <p style={commentStyles}><span style={authorStyles}>{props.comment.author}</span> {props.comment.text}</p>
            <h6 style={dateStampeStyles}>{date} @ {time}</h6>
        </div>
    )
}
