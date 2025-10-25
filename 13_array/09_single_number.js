const singleNumberBruteForce = (nums) => {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i += 2) {
        console.log(i);
        if (nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }
};

const singleNumber = (nums) => {
    const counts = new Map();

    for (let num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }

    for (let [key, value] of counts) {
        if (value === 1) {
            return key;
        }
    }
};
console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
