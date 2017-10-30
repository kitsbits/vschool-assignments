// ACTIONS \\
import axios from "axios";

const url = "http://localhost:8002/bounties/";

export const getBounties = () => {
    return (dispatch) => {
        axios.get(url).then(response => {
            console.log(response)
            dispatch({
                type: "GET_BOUNTIES",
                bounties: response.data
            });
        }).catch(err => {
            console.log(err);
        });
    }
}

export const addBounty = (bounty) => {
    return (dispatch) => {
        axios.post(url, bounty).then(response => {
            dispatch({
                type: "ADD_BOUNTY",
                bounty
            });
        }).catch(err => {
            console.log(err);
        });
    }
}

export const deleteBounty = (id, bounty) => {
    return (dispatch) => {
        axios.delete(url + id).then(respone => {
            dispatch({
                type: "DELETE_BOUNTY",
                id,
                bounty
            });
        }).catch(err => {
            console.log(err);
        });
    }
}

export const editBounty = (id, editedBounty) => {
    return (dispatch) => {
        axios.put(url + id, editBounty).then(response => {
            dispatch({
                type: "EDIT_BOUNTY",
                id,
                editedBounty
            });
        }).catch(err => {
            console.log(err);
        });
    }
}
