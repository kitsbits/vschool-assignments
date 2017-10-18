const redux = require("redux");
const contacts = ["Kit", "Osha", "Dallin", "Ben", "Ammon"];

const state = {
    counter: 0,
    contactList: contacts
}

const removeName = () => {
    return {
        type: "REMOVE_NAME"
    }
}

const addName = (name) => {
    return {
        type: "ADD_NAME",
        name: name
    }
}

const custom = (num) => {
    return {
        type: "CUSTOM",
        number: num
    }
}

const concat = () => {
    return {
        type: "CONCAT"
    }
}

const reset = () => {
    return {
        type: "RESET"
    }
}

const reducer = (prevState = state, action) => {
    switch (action.type) {
        case "CUSTOM":
            return {
                counter: prevState.counter + action.number,
                contact: prevState.contact
            }

        case "CONCAT":
            return {
                counter: prevState.counter.toString() + 1,
                contact: prevState.contact
            }

        case "RESET":
            return {
                counter: 0,
                contact: prevState.contact
            }

        case "ADD_NAME":
            return {
                contactList: [...prevState.contactList, action.name],
                counter: prevState.counter
            }

        case "REMOVE_NAME":
            const removed = [...prevState.contactList];
            removed.shift();
            return {
                contactList: removed,
                counter: prevState.counter
            }


        default:
            return prevState;
    }
}

const store = redux.createStore(reducer);
// console.log(store);

store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(removeName());
