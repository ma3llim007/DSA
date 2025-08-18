const maxSumArray = (nums) => {
    let max = -Infinity;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        max = Math.max(sum, max);
        if (sum < 0) sum = 0;
    }
    return max;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSumArray(nums));
