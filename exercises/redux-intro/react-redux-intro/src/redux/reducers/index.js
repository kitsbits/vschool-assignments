const list = [
    {
        firstName: "Ben",
        lastName: "Turner",
        phone: "555-555-5555"
    }, {
        firstName: "Nonnie",
        lastName: "Martin",
        phone: "555-555-5555"
    }, {
        firstName: "Cookie",
        lastName: "Monster",
        phone: "555-555-5555"
    }
];

const state = {
    counter: 0,
    list: list
}

const reducer = (prevState = state, action) => {
    switch (action.type) {
        case "ADD_ONE":
            return {
                ...prevState,
                counter: prevState.counter + 1
            }

        case "MINUS_ONE":
            return {
                ...prevState,
                counter: prevState.counter - 1
            }

        case "RESET":
            return {
                ...prevState,
                counter: 0
            }

        case "REMOVE_CONTACT":
            const newList = [...prevState.list].filter(contact => contact.firstName !== action.contact);
            console.log(newList);
            return {
                ...prevState,
                list: newList
            }

        default:
            return prevState;
    }
}

export default reducer;
