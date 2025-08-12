import { question } from "readline-sync";

let n = question("Enter a Number:- ");
for (let i = 1; i <= n; i++) {
    // Inverted
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write(" ");
    }
    // Right
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log();
}
