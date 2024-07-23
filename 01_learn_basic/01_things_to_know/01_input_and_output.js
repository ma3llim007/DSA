const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// One Way
rl.question("What Is Your Name:- ", (name) => {
    console.log(name);
    rl.close();
});