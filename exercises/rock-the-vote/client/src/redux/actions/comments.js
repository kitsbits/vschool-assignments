// COMMENT ACTIONS \\
import axios from "axios";
const url = "http://localhost:9010/issues/";

export function addComment(id, commentText) {
    return (dispatch) => {
        axios.post(url + id + "/comments", commentText).then(response => {
            dispatch({
                type: "ADD_COMMENT",
                commentedIssue: response.data
            })
        }).catch(err => {
            console.log(err);
        })
    }
}
