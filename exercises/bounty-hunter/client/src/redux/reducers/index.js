const state = {
    bounties: []
}

const reducer = (prevState = state, action) => {
    let newBounties = [...prevState];
    switch(action.type) {
        case "GET_BOUNTIES":
            return {
                bounties: action.bounties
            }

        case "ADD_BOUNTY":
            newBounties.push(action.bounty)
            return {
                bounties: newBounties
            }

        case "DELETE_BOUNTY":
            let withOneDeleted = newBounties.filter(bounty => action.id !== bounty._id)
            return {
                bounties: withOneDeleted
            }

        case "EDIT_BOUNTY":
            let editedBounties = newBounties.map(bounty => {
                if (bounty._id === action.id) {
                    return action.editedBounty;
                } else {
                    return bounty;
                }
            })
            return {
                bounties: editedBounties
            }

        default:
            return prevState;
    }
}

export default reducer;
