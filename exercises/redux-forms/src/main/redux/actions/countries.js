// ACTIONS --> countries \\
export function addCountry(country) {
    return {
        type: "ADD_COUNTRY",
        country
    }
}

export function deleteCountry(index) {
    return {
        type: "DELETE_COUNTRY",
        index
    }
}
