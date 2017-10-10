let multiD = [[1,2,3],["a","b","c"],[true, true, true]]
let multiD2 = [[true,false,true],[false,false,true]]

function checkTypes(arr) {
    const newArray = [].concat(...arr);
    return newArray.every(each => typeof newArray[0] === typeof each);
}
console.log(checkTypes(multiD));
console.log(checkTypes(multiD2));
