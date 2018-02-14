const tests = {
    one: [
        5, 3, 6, 7, 9
    ], // 4
    two: [
        2, 3
    ], // 4
    three: [
        1, 4, 10, 6, 2
    ], // 7
    four: [
        19, 32, 11, 23
    ], // 3
    five: [
        5, 8, 9, 13, 14
    ], // 6
}

// function avoidObstacles(inputArray) {
//     inputArray.sort(function(a, b) {
//       return a - b;
//     });
//
//     const sequentialInstances = [];
//     let smallestDifference = 2;
//
//     for (let i = 0; i < inputArray.length - 1; i++) {
//         const currentDifferent = inputArray[i+1] - inputArray[i];
//
//         if (currentDifferent === 1) {
//             if (sequentialInstances.length < 2) {
//                 sequentialInstances.push(inputArray[i]);
//             } else {
//                 sequentialInstances.splice(1, 1, inputArray[i]);
//             }
//         } else {
//             smallestDifference = Math.min(smallestDifference, currentDifferent);
//         }
//     }
//
//     if (sequentialInstances.length < 2) {
//         return smallestDifference + 1;
//     } else {
//         return ((sequentialInstances[1] - sequentialInstances[0]) + 1)
//     }
//
// }

function avoidObstacles(inputArray) {

    inputArray.sort(function(a, b) {
        return a - b;
    });

    let lowest = 2;
    let foundLowest = false;

    while(!foundLowest) {
        const thisAttempt = inputArray.every(num => {
            return num % lowest !== 0
        });

        if (thisAttempt) {
            foundLowest = true;
        } else {
            lowest++;
        }
    }
    return lowest;
}

console.log(avoidObstacles(tests.one));
console.log(avoidObstacles(tests.two));
console.log(avoidObstacles(tests.three));
console.log(avoidObstacles(tests.four));
console.log(avoidObstacles(tests.five));
