// 1. First Approach
const factorial = (n) => {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
};

// 2. Second Approach
const factorialWithRecursive = (n) => {
    if (n <= 1) return 1;
    return n * factorialWithRecursive(n - 1);
};

console.log(factorialWithRecursive(0));
console.log(factorialWithRecursive(1));
console.log(factorialWithRecursive(3));
console.log(factorialWithRecursive(4));
console.log(factorialWithRecursive(5));

// Big-0 = O(n)