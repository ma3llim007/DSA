const sortColorsBruteForce = (nums) => {
    return nums.sort((a, b) => a - b);
};

const sortColorsBetter = (nums) => {
    let count0 = 0,
        count1 = 0,
        count2 = 0;

    for (let num of nums) {
        if (num === 0) count0++;
        else if (num === 1) count1++;
        else count2++;
    }

    for (let i = 0; i < count0; i++) nums[i] = 0;
    for (let i = count0; i < count0 + count1; i++) nums[i] = 1;
    for (let i = count0 + count1; i < nums.length; i++) nums[i] = 2;

    return nums;
};

const sortColors = (nums) => {
    let low = 0,
        mid = 0,
        high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) mid++;
        else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }

    return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
