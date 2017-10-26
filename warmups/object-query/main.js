function filterDatabase(obj, database) {
    return returnArray = database.filter(object => {
        for (let key in obj) {
            if (obj[key] !== object[key]) {
                return false;
            }
        }
        return true;
    });
}

let query = {
    a: 0,
    b: 1,
    c: 0
}

let database = [
    {a: 0, b: 0, c: 2, d: 0},
    {a: 1, b: 1, c: 0, d: 0},
    {a: 0, b: 1, c: 0, d: 0},
    {a: 0, b: 1, c: 2, d: 3}
]

console.log(filterDatabase(query, database));
