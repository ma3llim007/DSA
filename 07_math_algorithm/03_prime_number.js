// 1. First Approach
const isPrime = (n) => {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % 2 === 0) {
            return false;
        }
    }
    return true;
};
// Big-O(n)

// 2. Second Approach
const isPrimeSec = (n) => {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % 2 === 0) {
            return false;
        }
    }
    return true
};
// Big-O(sqrt(n))

console.log(isPrimeSec(1)); // false
console.log(isPrimeSec(5)); // true
console.log(isPrimeSec(4)); // false

