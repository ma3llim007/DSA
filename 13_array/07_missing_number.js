const missingNumberBruteForce = (nums) => {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) return i;
    }
    return nums.length;
};

const missingNumber = (nums) => {
    const expectNums = (nums.length * (nums.length + 1)) / 2;
    const sum = nums.reduce((a, b) => a + b);
    return expectNums - sum;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
