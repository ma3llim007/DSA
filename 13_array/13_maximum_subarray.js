const maxSubArrayBruteForce = (nums) => {
    let maxSum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            let currentSum = 0;
            for (let k = i; k <= j; k++) {
                currentSum += nums[k];
            }
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
};

const maxSubArrayBetter = (nums) => {
    let maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j];

            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
};

const maxSubArray = (nums) => {
    let currentSum = nums[0],
        maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
