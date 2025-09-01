let count = 0;
function Func() {
    if (count === 5) return;
    console.log(count);
    count = count + 1;
    Func();
}

const numberPrint = (n) => {
    if (n == 0) return;
    numberPrint(n - 1);
    console.log(n);
};

// Sum of number
const sumOfNumber = (n) => {
    if (n == 0) return 0;
    return n + sumOfNumber(n - 1);
};

// factorial of number
const factorialOfNumber = (n) => {
    if (n == 0) return 1;
    return n * factorialOfNumber(n - 1);
};

// fibonacci_number
const fibonacci_number = (n) => {
    let first = 0,
        second = 1;
    process.stdout.write(first + " " + second + " ");

    for (let i = 1; i <= n - 2; i++) {
        let third = first + second;
        first = second;
        second = third;
        process.stdout.write(third + " ");
    }
};

function fiboNt(n, first, second) {
    if (n == 0) return;
    let third = first + second;
    process.stdout.write(third + " ");
    fiboNt(n - 1, second, third);
}
process.stdout.write(0 + " " + 1 + " ");

fiboNt(10, 0, 1);
