const maxSumBruteForce = (arr, k) => {
    let maxSum = -Infinity;

    for (let i = 0; i <= arr.length - k; i++) {
        let sum = 0;

        for (let j = i; j < i + k; j++) {
            sum += arr[j];
        }

        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
};

const maxSumSlidingWindow = (arr, k) => {
    let windowSum = 0;

    for (let i = 0; i < k; i++) windowSum += arr[i];

    let maxSum = windowSum;

    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i];
        windowSum -= arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
};

console.log(maxSumSlidingWindow([2, 1, 5, 1, 3, 2], 3));
