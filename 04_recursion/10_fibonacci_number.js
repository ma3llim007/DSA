// Fibonacci Number 
const fibonacciNumberRecursion = (num) => {
    if (num <= 1) {
        return num;
    }
    let last = fibonacciNumberRecursion(num - 1);
    let last2 = fibonacciNumberRecursion(num - 2);
    return last + last2;
}

const main = () => {
    let n = 4;
    console.log(fibonacciNumberRecursion(n));
}
main();