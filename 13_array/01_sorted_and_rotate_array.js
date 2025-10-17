const check = (nums) => {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[(i + 1) % nums.length]) {
            count++;
        }

        if (count > 1) {
            return false;
        }
    }
    return true;
};

console.log(check([3, 4, 5, 1, 2]));
console.log(check([2, 1, 3, 4]));
console.log(check([1, 2, 3]));
