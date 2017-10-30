// ACTIONS \\
import axios from "axios";

const url = "https://api.vschool.io/kit/todo";

export function getList() {
    return (dispatch) => {
        axios.get(url).then(response => {
            dispatch({
                type: "GET_LIST",
                list: response.data
            });
        }).catch(err => {
            console.log(err);
        });
    }
}
