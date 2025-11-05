const rearrangeArrayBrute = (nums) => {
    const positiveArr = [],
        negativeArr = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) positiveArr.push(nums[i]);
        else negativeArr.push(nums[i]);
    }

    for (let i = 0; i < nums.length / 2; i++) {
        nums[2 * i] = positiveArr[i];
        nums[2 * i + 1] = negativeArr[i];
    }
    return nums;
};

const rearrangeArray = (nums) => {
    const newArray = new Array(nums.length);
    let positiveIndex = 0,
        negativeIndex = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            newArray[positiveIndex] = nums[i];
            positiveIndex += 2;
        } else {
            newArray[negativeIndex] = nums[i];
            negativeIndex += 2;
        }
    }

    return newArray;
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
console.log(rearrangeArray([-1, 1]));
