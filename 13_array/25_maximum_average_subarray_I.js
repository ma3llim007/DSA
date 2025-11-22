const findMaxAverageBruteForce = (nums, k) => {
    let windowSum = -Infinity;

    for (let i = 0; i < nums.length - k; i++) {
        let sum = 0;

        for (let j = i; j < i + k; j++) {
            sum += nums[j];
        }

        windowSum = Math.max(windowSum, sum);
    }

    return windowSum / k;
};

const findMaxAverageBetter = (nums, k) => {
    const n = nums.length;
    const prefix = new Array(n);
    prefix[0] = nums[0];

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + nums[i];
    }

    let maxSum = prefix[k - 1];

    for (let j = k; j < n; j++) {
        let maxWindow = prefix[j] - prefix[j - k];
        maxSum = Math.max(maxSum, maxWindow);
    }
    return maxSum / k;
};

const findMaxAverage = (nums, k) => {
    let windowSum = 0;

    // Initial window
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    let maxSum = windowSum;

    for (let i = k; i < nums.length; i++) {
        windowSum = windowSum + nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
