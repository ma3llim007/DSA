const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Two Way
rl.setPrompt("What Is Your Name:- ");
rl.prompt();