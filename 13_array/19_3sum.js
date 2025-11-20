// Three Sum Brute Force
const threeSumBruteForce = (nums) => {
    const result = new Set();

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    const triplet = [nums[i], nums[j], nums[k]].sort(
                        (a, b) => a - b
                    );
                    result.add(triplet.toString());
                }
            }
        }
    }

    return [...result].map((str) => str.split(",").map(Number));
};

// Three Sum Better
const threeSumBetter = (nums) => {
    const result = new Set();

    for (let i = 0; i < nums.length; i++) {
        const seen = new Set();

        for (let j = i + 1; j < nums.length; j++) {
            const target = -nums[i] - nums[j];

            if (seen.has(target)) {
                const triplet = [nums[i], nums[j], target].sort(
                    (a, b) => a - b
                );
                result.add(triplet.toString());
            }
            seen.add(nums[j]);
        }
    }

    return [...result].map((str) => str.split(",").map(Number));
};

// Optimal - Two Pointer Approach
const threeSum = (nums) => {
    nums.sort((a, b) => a - b);
    const result = [],
        n = nums.length;

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1,
            right = n - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                right--;
                left++;

                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum > 0) right--;
            else left++;
        }
    }
    return result;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
