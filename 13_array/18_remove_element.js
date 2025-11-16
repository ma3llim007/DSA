const removeElementBruteForce = (nums, val) => {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            result.push(nums[i]);
        }
    }
    // Reset the array
    nums.length = 0;
    nums.push(...result);

    return nums.length;
};

const removeElementBetter = (nums, val) => {
    let k = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

const removeElement = (nums, val) => {
    let left = 0,
        right = nums.length - 1;
    
    while (left <= right) {
        if (nums[left] === val) {
            nums[left] = nums[right];
            right--;
        } else left++;
    }
    return left;
};
console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
