/*
    05. Inverted Right Pyramid Pattern
    * * * * *
    * * * *
    * * *
    * *
    *
*/

function fivePattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = n; j >= i; j--) {
            console.log(j, i);

            process.stdout.write("* ");
        }
        console.log();
    }
}
fivePattern(5);
