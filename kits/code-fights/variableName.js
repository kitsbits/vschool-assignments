function variableName(name) {
    if (!isNaN(+name[0])) {
        return false;
    }
    return name.split("").every(element => {
        return element.match(/[A-Za-z0-9\\_\\]/g)
    });
    // if (!name.match(/[A-Za-z0-9\\_\\]/g)) {
    //     return false;
    // }
    // return true;
}

console.log(variableName("0a_"));
