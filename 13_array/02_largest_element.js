const largesElementBruteForce = (nums) => {
    nums.sort((a, b) => a - b);
    return nums[nums.length - 1];
};
/** Complexity:
        Time Complexity: O(N Log N)
        Space Complexity: O(1)
*/

const largesElement = (nums) => {
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
};
/** Complexity:
        Time Complexity: O(N)
        Space Complexity: O(1)
*/

const largesElementInBuit = (nums) => Math.max(...nums);
/** Complexity:
        Time Complexity: O(N)
        Space Complexity: O(1)
*/

console.log(largesElementInBuit([2, 5, 1, 3, 0]));
console.log(largesElementInBuit([8, 10, 5, 7, 9]));
