let endpoint = "http://localhost:8080/monkeys";

let query = {
  color: "black",
  species: "howler"
}

function stringifyURL(endpoint, query) {
    // if (Object.keys(query).length === 0 && query.constructor === Object) {
    //     return endpoint;
    // }
    let url = endpoint + "?";
    for (let key in query) {
        url += `${key}=${query[key]}&`;
    }
    return url.slice(0, -1);
}

console.log(stringifyURL(endpoint, query));

module.exports = stringifyURL;
