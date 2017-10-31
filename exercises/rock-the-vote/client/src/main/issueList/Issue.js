import React from "react";
import moment from "moment";
import CommentsContainer from "./comments/CommentsContainer";

function Issue(props) {
    const date = moment(props.issue.datePosted).format('LL');
    const time = moment(props.issue.datePosted).format('LTS');

    const formStyles = {
        display: "none",
        flexDirection: "column",
        width: "50%"
    }

    return (
        <div>
            <div>
                <div>
                    <h3>{props.issue.title}</h3>
                    <p>{props.issue.description}</p>
                    <h5>Posted by: {props.issue.author}</h5>
                    <h6>On: {date} @ {time}</h6>
                    <button onClick={props.handleDelete} type="button">DELETE</button>
                    <button onClick={props.handleToggle} type="button">EDIT</button>
                </div>
                <form onSubmit={props.handleEdit} style={formStyles}>
                    <input onChange={props.handleChange} type="text" name="title" value={props.input.title} />
                    <textarea onChange={props.handleChange} name="description" value={props.input.description}></textarea>
                    <button type="submit">UDPATE</button>
                </form>
            </div>
            <div>
                <CommentsContainer issue={props.issue}/>
            </div>
        </div>
    )
}

export default Issue;
