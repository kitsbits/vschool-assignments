const nums = [2, 7, 11, 15];

function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let candidate = target - arr[i];
        let index = arr.indexOf(candidate);
        if (index !== i) return [i, index];
    }
}

console.log(twoSum(nums, 9)) // return [0,1]

module.exports = twoSum;
