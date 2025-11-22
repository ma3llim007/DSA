const maxSumbArraySumBruteForce = (nums, k) => {
    let maxSum = -Infinity;

    for (let i = 0; i <= nums.length - k; i++) {
        let sum = 0;
        for (let j = i; j < i + k; j++) {
            sum += nums[j];
            console.log(sum);
        }
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
};

const maxSumbArraySumBetter = (nums, k) => {
    let n = nums.length;
    let prefix = new Array(n);
    prefix[0] = nums[0];

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + nums[i];
    }

    let maxSum = prefix[k - 1];

    for (let i = k; i < n; i++) {
        maxSum = Math.max(maxSum, prefix[i] - prefix[i - k]);
    }
    return maxSum;
};

const maxSumbArraySum = (nums, k) => {
    let windowSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    let maxSum = windowSum;

    for (let i = k; i < nums.length; i++) {
        windowSum = windowSum + nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
};

console.log(maxSumbArraySum([100, 200, 300, 400], 2));
console.log(maxSumbArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSumbArraySum([100, 200, 300, 400], 1));
