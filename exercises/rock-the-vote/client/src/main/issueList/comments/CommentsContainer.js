import React from "react";
import CommentsComponent from "./CommentsComponent";

class Comments extends React.Component {
    constructor() {
        super();
    }

    genComments() {
        return this.props.comments.map(comment => {
            return (
                <CommentsComponent
                        comment={comment}
                        key={comment._id}/>
            )
        })
    }

    render() {
        return (
            this.genComments()
        )
    }
}

export default Comments;
