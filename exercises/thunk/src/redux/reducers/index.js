/// REDUCERS \\\
const state = {
    todos: []
}

function reducer(prevState = state, action) {
    let newTodoList = [...prevState.todos]
    switch(action.type) {
        case "LOAD_LIST":
            return({
                todos: action.todos.reverse()
            });

        case "ADD_TODO":
            newTodoList.unshift(action.newTodo);
            return ({
                todos: newTodoList
            });

        case "DELETE_TODO":
            const oneDeledList = newTodoList.filter(todo => {
                return action.id !== todo._id
            });
            return {
                todos: oneDeledList
            }

        case "EDIT_TODO":
            const editedList = newTodoList.map(todo => {
                if (action.edited._id === todo._id) {
                    return action.edited;
                } else {
                    return todo;
                }
            });
            console.log(editedList);
            return {
                todos: editedList
            };

        default:
            return prevState;
    }
}

export default reducer;
