export const addOne = () => {
    return {
        type: "ADD_ONE"
    }
}

export const minusOne = () => {
    return {
        type: "MINUS_ONE"
    }
}

export const reset = () => {
    return {
        type: "RESET"
    }
}

export const removeContact = (contact) => {
    return {
        type: "REMOVE_CONTACT",
        contact: contact
    }
}
