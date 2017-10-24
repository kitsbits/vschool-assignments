/// ACTIONS \\\
import axios from "axios";

export function loadList() {
    const url = "https://api.vschool.io/kit/todo/";
    return (dispatch) => {
        axios.get(url).then((response) => {
            dispatch({
                type: "LOAD_LIST",
                todos: response.data
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
}

export function addTodo(newTodo) {
    const url = "https://api.vschool.io/kit/todo/";
    return (dispatch) => {
        axios.post(url, newTodo).then((response) => {
            dispatch({
                type: "ADD_TODO",
                newTodo
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
}

export function deleteTodo(id) {
    const url = "https://api.vschool.io/kit/todo/";
    return (dispatch) => {
        axios.delete(url + id).then((response) => {
            dispatch({
                type: "DELETE_TODO",
                id
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
}

export function editTodo(id, editedTodo) {
    const url = "https://api.vschool.io/kit/todo/";
    console.log(id)
    console.log(editedTodo)
    return (dispatch) => {
        axios.put(url + id, editedTodo).then((response) => {
            dispatch({
                type: "EDIT_TODO",
                edited: response.data
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
}
