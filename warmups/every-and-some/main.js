const arr1 = [0,1,2,3,4,5,6,7,8];
const arr2 = [0,1,2,3,4,5,6,7,10,11];
const arr3 = [10,11,12,13,14];

function lessThanTen(eachNum) {
    return eachNum < 10;
}

function every(arr, aFunction) {
    for (let i = 0; i < arr.length; i++) {
        let checkLessThan = aFunction(arr[i]);
        if (!checkLessThan) {
            return false;
        }
    }
    return true;
}

// console.log(every(arr1, lessThanTen));
// console.log(every(arr2, lessThanTen));


function some(arr, aFunction) {
    for (i = 0; i < arr.length; i++) {
        let checkLessThan = aFunction(arr[i]);
        if (checkLessThan) {
            return true;
        }
    }
    return false;
}

console.log(some(arr1, lessThanTen));
console.log(some(arr3, lessThanTen));
