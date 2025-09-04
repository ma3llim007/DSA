const gcd = (a, b) => {
    if (a === b) return a;
    if (a > b) return gcd(a - b, b);
    else return gcd(b, b - a);
};

const gcd_better_approach = (a, b) => {
    if (b == 0) return a;
    return gcd_better_approach(b, a % b);
};

let a = 32,
    b = 20;
console.log(gcd_better_approach(a, b));
