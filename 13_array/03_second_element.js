// const secondLargesElementBruteForce = (nums)=>{}

const secondLargesElementBruteForce = (nums) => {
    nums.sort((a, b) => a - b);
    return nums[nums.length - 2];
};
/** Complexity:
        Time Complexity: O(N Log N)
        Space Complexity: O(n)
*/

const secondLargesElementBetter = (nums) => {
    let largest = -Infinity,
        secondLarges = -Infinity;

    for (let ch of nums) {
        if (ch > largest) largest = ch;
    }

    for (let ch of nums) {
        if (ch > secondLarges && ch < largest) secondLarges = ch;
    }

    return secondLarges === -Infinity ? -1 : secondLarges;
};
/** Complexity:
        Time Complexity: O(N)
        Space Complexity: O(1)
*/

const secondLargesElementOptimal = (nums) => {
    let largest = -Infinity,
        secondLarges = -Infinity;

    for (let num of nums) {
        if (num > largest) largest = num;
        else if (num > secondLarges && secondLarges < largest)
            secondLarges = num;
    }
    return secondLarges === -Infinity ? -1 : secondLarges;
};
console.log(secondLargesElementOptimal([2, 5, 1, 3, 0]));
console.log(secondLargesElementOptimal([8, 10, 5, 7, 9]));
