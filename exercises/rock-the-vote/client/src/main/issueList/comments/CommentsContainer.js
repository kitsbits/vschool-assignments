import React from "react";
import CommentsComponent from "./CommentsComponent";
import AddCommentContainer from "./addCommentForm/AddCommentContainer";

class Comments extends React.Component {
    constructor() {
        super();
    }

    genComments() {
        return this.props.issue.comments.map(comment => {
            return (
                <CommentsComponent
                        comment={comment}
                        key={comment._id}/>
            )
        })
    }

    render() {
        const containerStyles = {
            padding: "25px",
            marginTop: "10px",
            backgroundColor: "white",
            height: "300px",
            overflow: "scroll",
            borderRadius: "2px"
        }
        return (
            <div style={containerStyles}>
                <AddCommentContainer addId={this.props.issue._id}/>
                {this.genComments()}
            </div>

        )
    }
}

export default Comments;
