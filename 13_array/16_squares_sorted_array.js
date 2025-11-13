const sortedSquaresBruteForce = (nums) => {
    return nums.map((num) => num * num).sort((a, b) => a - b);
};
// Time Complexity: O(n log n) Space Complexity: O(n)

const sortedSquares = (nums) => {
    let res = new Array(nums.length),
        left = 0,
        right = nums.length - 1,
        pos = nums.length - 1;
    while (left <= right) {
        let leftSq = nums[left] * nums[left],
            rightSq = nums[right] * nums[right];

         if (leftSq > rightSq) {
            res[pos--] = leftSq;
            left++;
        } else {
            res[pos--] = rightSq;
            right--;
        }
    }

    return res;
};
// Time Complexity: O(n) Space Complexity: O(n)
console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
