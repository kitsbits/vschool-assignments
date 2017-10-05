const doubleNumbers = (arr) => {
    return arr.map(each => each * 2);
}

const numsToStrings = (arr) => {
    return arr.map(each => each.toString());
}

const namesOnly = (arr) => {
    return arr.map(each => each.name)
}

const canGo = (arr) => {
    return arr.map(each => {
        if (each.age > 19) {
            return `${each.name} can go to The Matrix`;
        } else if (each.age < 19) {
            return `${each.name} is under age!!`;
        }
    });
}

const namesToHeaders = (arr) => {
    return arr.map(each => `<h1>${each.name}</h1><h2>${each.age}</h2`)
}

module.exports = {
    doubleNumbers,
    numsToStrings,
    namesOnly,
    canGo,
    namesToHeaders
}
