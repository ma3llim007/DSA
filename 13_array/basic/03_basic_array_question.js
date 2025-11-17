const numbers = [45, 12, 78, 23, 56, 8, 90];
const grades = [85, 90, 78, 92, 88];

// Finding Max Number With Math.max method Time Complexity - O(N)
const maxNumber = Math.max(...numbers);

// Finding Min Number With Math.min method Time Complexity - O(N)
const minNumber = Math.min(...numbers);

// Sum
const totalGrades = grades.reduce((acc, cur) => acc + cur, 0);

// Avergage
const avergage = grades.reduce((acc, cur) => acc + cur, 0) / grades.length;

// Median (Middle Value)
const median = (arr) => {
    const sortedArray = arr.sort((a, b) => a - b);
    let mid = Math.floor(sortedArray.length / 2);
    return sortedArray.length % 2 === 0
        ? [sortedArray[mid] + sortedArray[mid + 1]] / 2
        : sortedArray[mid];
};

// Mode (Most Frequent Value)
const mode = (arr) => {
    let freq = new Map(),
        modes = [],
        maxFreq = 0;

    for (let num of arr) {
        const count = (freq.get(num) || 0) + 1;
        freq.set(num, count);
        if (count > maxFreq) {
            maxFreq = count;
            modes = [num];
        } else if (count === maxFreq) modes.push(num);
    }
    return modes;
};

// Range (Max - Min)
const range = (arr) => {
    return Math.max(...arr) - Math.min(...arr);
};