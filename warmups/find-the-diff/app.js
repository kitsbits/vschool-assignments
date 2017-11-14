arrA = [1, 2, 3];
arrB = [2, 3, 4];

function findTheDiff(arr1, arr2) {
    // WORKS BUT UGLY
    // let uniques = [];
    // for (let i = 0; i < arr1.length; i++) {
    //     // if (Array.isArray())
    //     const current1 = arr1[i];
    //     if (arr2.includes(current1)) {
    //         arr2.splice(arr2.indexOf(current1), 1);
    //     } else {
    //         uniques.push(current1);
    //     }
    // }
    // uniques.push(...arr2);
    // return uniques;

    // MOSTLY WORKS BUT CONCISE
    // let joined = [...arr1, ...arr2];
    // return joined.filter(item => combined.indexOf(item) === combined.lastIndexOf(item));
    // console.log(joined)

    // BOB'S / BEST
    const arr1Uniques = arr1.filter(item => !arr2.includes(item));
    const arr2Uniques = arr2.filter(item => !arr1.includes(item));
    return [...arr1Uniques, ...arr2Uniques];
    // OR IF UNIQUE IN EACH ARRAY AS WELL
    // return Array.from(new Set(arr1Uniques.concat(arr2Uniques)));
}



console.time("time");
console.log(findTheDiff(arrA, arrB));
console.timeEnd("time");


module.exports = findTheDiff;
