// REDUCERS \\

const state = {
    todos: []
}

export default function reducer(prevState = state, action) {
    switch(action.type) {

        case "GET_LIST":
            return {
                todos: action.list
            }

        default:
            return prevState
    }
}
