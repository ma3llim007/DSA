function sortColor(nums) {
    let i = 0,
        j = 0,
        k = nums.length - 1;
    while (i <= k) {
        if (nums[i] === 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j++;
        } else if (nums[i] === 2) {
            [nums[i], nums[k]] = [nums[k], nums[i]];
            k--;
        } else {
            i++;
        }
    }
}

let nums = [2, 0, 2, 1, 1, 0];
let nums2 = [2, 0, 1];
sortColor(nums2);
console.log(nums2);
