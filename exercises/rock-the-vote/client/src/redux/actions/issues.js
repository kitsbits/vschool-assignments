import axios from "axios";
let url = "http://localhost:9010/";

export function loadIssues() {
    return (dispatch) => {
        axios.get(url).then(response => {
            dispatch({
                type: "LOAD_ISSUES",
                issues: response.data
            });
        }).catch(err => {
            console.log(err);
        });
    };
}

export function addIssue(issueToAdd) {
    return (dispatch) => {
        axios.post(url, issueToAdd).then(response => {
            dispatch({
                type: "ADD_ISSUE",
                newIssue: response.data
            });
        }).catch(err => {
            console.log(err);
        });
    }
}

export function editIssue(id, editedIssue) {
    return (dispatch) => {
        axios.put(url + id, editedIssue).then(response => {
            dispatch({
                type: "EDIT_ISSUE",
                updatedIssue: response.data

            })
        }).catch(err => {
            console.log(err);
        });
    };
}

export function deleteIssue(id) {
    return (dispatch) => {
        axios.delete(url + id).then(response => {
            dispatch({
                type: "DELETE_ISSUE",
                id
            });
        }).catch(err => {
            console.log(err);
        });
    };
}