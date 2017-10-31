// COMMENT ACTIONS \\
import axios from "axios";
const url = "http://localhost:9010/";

export function addComment(id, commentText) {
    return (dispatch) => {
        const withNewComment = {
            comments: {
                text: commentText
            }
        }
        axios.put(url + id, withNewComment).then(response => {
            dispatch({
                type: "ADD_COMMENT",
                response: response.data
            })
        }).catch(err => {
            console.log(err);
        })
    }
}
