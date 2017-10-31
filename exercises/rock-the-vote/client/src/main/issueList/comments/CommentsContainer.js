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
            border: "1px solid black",
            padding: "25px",
            marginTop: "10px",
            width: "50%"
        }
        console.log(this.props);
        return (
            <div style={containerStyles}>
                <AddCommentContainer addId={this.props.issue._id}/>
                {this.genComments()}
            </div>

        )
    }
}

export default Comments;
