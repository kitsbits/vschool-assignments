// REDUCERS\\
import {countries} from "./countries";

const state = {
    countries: []
};

const reducer = (prevState = state, action) => {
    return  {
        ...prevState,
        countries: countries(prevState.countries, action)
    }
}

export default reducer;
// make country array
// action which allows us to add a country
// action which allows us to delete a country
