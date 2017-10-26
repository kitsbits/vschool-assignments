// ACTIONS \\
import axios from "axios";

export const getBounties = () => {
    

    return ({
        type: "GET_BOUNTIES",
        bounties
    });
}

export const addBounty = (bounty) => {
    return ({
        type: "ADD_BOUNTY",
        bounty
    });
}

export const deleteBounty = (id, bounty) => {
    return ({
        type: "DELETE_BOUNTY",
        id,
        bounty
    });
}

export const editBounty = (id, editedBounty) => {
    return ({
        type: "EDIT_BOUNTY",
        id,
        editedBounty
    });
}
