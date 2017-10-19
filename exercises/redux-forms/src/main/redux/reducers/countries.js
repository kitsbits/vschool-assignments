export function countries (prevCountries = [], action) {
    let newCountries = [...prevCountries];
    switch(action.type) {
        case "ADD_COUNTRY":
            newCountries.push(action.country)
            return newCountries;

        // case "DELETE_COUNTRY":
        //     newCountries.splice(index, 1);
        //     return newCountries;

        default:
            return prevCountries;
    }
}
