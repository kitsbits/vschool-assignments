import React from "react";
import moment from "moment";
import CommentsContainer from "./comments/CommentsContainer";
import {upVote} from "../../redux/actions";
import {connect} from "react-redux";

function Issue(props) {
    const date = moment(props.issue.datePosted).format('LL');
    const time = moment(props.issue.datePosted).format('LTS');

    const commentContainerStyles = {
        marginTop: "50px"
    }

    const formStyles = {
        display: "none",
        flexDirection: "column",
        width: "50%"
    }

    const titleStyles = {
        color: "#50E3C2",
        letterSpacing: "1px",
        fontSize: "1.65em",
        marginRight: "25px"
    }

    const descriptionStyles = {
        color: "#50E3C2",
        fontSize: "1.1em",
        borderBottom: "1px solid #50E3C2",
        paddingBottom: "10px"
    }

    const postDetailsContainer = {
        display: "flex",
        justifyContent: "space-between",
        width: "50%",
        margin: "10px 0 20px 0"
    }

    const countStyles = {
        fontSize: "1.4em",
        height: "40px",
        width: "30px",
        border: "2px solid #50E3C2",
        borderRadius: "2px",
        margin: "0 5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#50E3C2"
    }

    const plusStyles = {
        fontSize: "3em",
        height: "40px",
        width: "30px",
        border: "2px solid #50E3C2",
        borderRadius: "2px",
        margin: "0 5px",
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        color: "#50E3C2",
        cursor: "pointer"
    }

    const titleContainerStyles = {
        display: "flex",
        alignItems: "center",
        height: "35px",
        marginBottom: "35px"
    }

    const buttonStyles = {
        outline: "none",
        border: "1px solid #50E3C2",
        borderRadius: "none",
        backgroundColor: "transparent",
        color: "#50E3C2",
        marginRight: "15px",
        borderRadius: "2px"
    }

    const mainContainerStyles = {
        paddingBottom: "5px",
        borderBottom: "1px solid #9B9B9B"
    }

    return (
        <div style={mainContainerStyles}>
            <div>
                <div>
                    <div style={titleContainerStyles}>
                        <h1 style={titleStyles}>{props.issue.title}</h1><span style={{alignSelf: "flex-end"}}>upvotes: </span><span style={countStyles}>{props.issue.upVotes}</span><span onClick={(e) => props.upVote(props.issue)} style={plusStyles}>^</span>
                    </div>
                    <p style={descriptionStyles}>{props.issue.description}</p>
                    <div style={postDetailsContainer}>
                        <h5>Posted by: {props.issue.author}</h5>
                        <h5>On: {date} @ {time}</h5>
                    </div>
                    <button onClick={props.handleDelete} type="button" style={buttonStyles}>DELETE</button>
                    <button onClick={props.handleToggle} type="button" style={buttonStyles}>EDIT</button>
                </div>
                <form onSubmit={props.handleEdit} style={formStyles}>
                    <input onChange={props.handleChange} type="text" name="title" value={props.input.title} />
                    <textarea onChange={props.handleChange} name="description" value={props.input.description}></textarea>
                    <button type="submit" style={buttonStyles}>UDPATE</button>
                </form>
            </div>
            <div style={commentContainerStyles}>
                <CommentsContainer issue={props.issue}/>
            </div>
        </div>
    )
}

export default connect(null, {upVote})(Issue);
