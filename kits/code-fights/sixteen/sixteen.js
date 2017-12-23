let a = [1, 2, 3];
let b = [2, 1, 3];
let c = [2, 2, 3];

// const swapPlaces = (arr, index1, index2) => {
//     let copy = [...arr]
//     const saveOne = copy[index1];
//     copy[index1] = copy[index2];
//     copy[index2] = saveOne;
//     return copy;
// }

const checkDeepEqual = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

const swapPlaces = (arr, constant, current) => {
    const constantElement = arr[constant];
    let copy = [...arr]
    copy[constant] = copy[current];
    copy[current] = constantElement;
    return copy;
}

const swapArray = (arr1, arr2) => {
    let constantIndex = 0;
    while (constantIndex < arr1.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (i !== constantIndex) {
                const currentSwap = swapPlaces(arr1, constantIndex, i);
                if (checkDeepEqual(currentSwap, arr2)) {
                    return true;
                }
            }
        }
        constantIndex++;
    }
    return false;
}

const areSimilar = (a, b) => {
    // if (checkDeepEqual(a, b)) {
    //     return true;
    // }
    // if (swapArray(a, b)) {
    //     return true;
    // }
    // if (swapArray(b, a)) {
    //     return true;
    // }

    for (let i = 0; i < a.length; i++) {
        for (let j = i; j < a.length; j++) {
            console.log(a[i], b[j])
        }
    }
    return false;
}

// console.log(swapPlaces(a, 1, 2)[0]);
// areSimilar(a);
// console.time("similar");
areSimilar(a, b);// true
// console.timeEnd("similar");
// console.log(areSimilar(a,c));// false


module.exports = {
    swapPlaces,
    areSimilar
}
