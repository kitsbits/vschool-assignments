const a = [2, 3, 3, 1, 5, 2];
const b = [1, 1, 2, 2, 1];

// function firstDuplicate(a) {
//     let lowestIndex = -1;
//     a.forEach(item => {
//         console.log(a.indexOf(item), a.lastIndexOf(item));
//         if (a.indexOf(item) !== a.lastIndexOf(item)) {
//             if (lowestIndex === -1) {
//                 lowestIndex = a.lastIndexOf(item);
//             } else {
//                 lowestIndex = Math.min(lowestIndex, a.indexOf(item), a.lastIndexOf(item));
//                 console.log(lowestIndex)
//             }
//         }
//     });
//     if (lowestIndex === -1) {
//         return lowestIndex;
//     }
//     return a[lowestIndex];
// }

function firstDuplicate(a) {
  for (let i of a) {
    let posi = Math.abs(i) - 1;
    console.log(`abs:` + Math.abs(i))
    console.log(`posi: ${posi}`);
    if (a[posi] < 0) {
        console.log(`posi + 1: ${posi+1}`)
        return posi + 1;
    };
    console.log(`after change: ${a[posi] * -1}`)
    a[posi] = a[posi] * -1;
  }

  return -1;
}

console.log(firstDuplicate(a));
