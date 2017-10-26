const state = {
    bounties: []
}

const reducer = (prevState = state, action) => {
    switch(action.type) {
        case "GET_BOUNTIES":
            return {
                bounties: action.bounties
            }
        default:
            return prevState;
    }
}

export default reducer;
