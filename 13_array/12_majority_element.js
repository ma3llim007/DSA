const majorityElementBrute = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) count++;
        }
        if (count > Math.floor(nums.length / 2)) return nums[i];
    }
    return -1;
};

const majorityElementHash = (nums) => {
    const hashmap = new Map();
    for (let num of nums) {
        hashmap.set(num, (hashmap.get(num) || 0) + 1);
        if (hashmap.get(num) > Math.floor(nums.length / 2)) return num;
    }

    return -1;
};

const majorityElement = (nums) => {
    let candidate = null,
        count = 0;
    for (let num of nums) {
        if (count === 0) candidate = num;
        count += num === candidate ? 1 : -1;
    }

    const freq = nums.filter((x) => x === candidate).length;
    return freq > Math.floor(nums.length / 2) ? candidate : null;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
