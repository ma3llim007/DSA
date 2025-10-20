const removeDuplicatesBruteForce = (nums) => {
    const unique = [...new Set(nums)];
    for (let i = 0; i < nums.length; i++) {
        nums[i] = unique[i];
    }
    return unique.length;
};

const removeDuplicates = (nums) => {
    if (nums.length === 0) return -1;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
