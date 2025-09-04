// Brute Force Approach
function power_bfa(x, n) {
    let ans = 1;
    for (let i = 1; i <= n; i++) {
        ans = ans * x;
    }
    console.log(ans);
}

// Optimize Approach
function temp(x, n) {
    if (n == 0) return 1;
    let ans = temp(x, parseInt(n / 2));
    if (n % 2 === 0) return ans * ans;
    else return ans * ans * x;
}

function power_OA(x, n) {
    if (n == 0) return 1;
    let ans = temp(x, n);
    return n < 0 ? 1 / ans : ans;
}

console.log(power_OA(2, 31));
