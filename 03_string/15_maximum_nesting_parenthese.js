const maxDepthBetter = (s) => {
    let stack = [],
        maxDepth = 0;
    for (let ch of s) {
        if (ch === "(") {
            stack.push(ch);
            console.log(Math.max(maxDepth, stack.length));
            maxDepth = Math.max(maxDepth, stack.length);
        } else if (ch === ")") {
            stack.pop();
        }
    }
    return maxDepth;
};

const maxDepthOptimal = (s) => {
    let counter = 0,
        maxDepth = 0;
    for (let ch of s) {
        if (ch === "(") {
            counter++;
            maxDepth = Math.max(maxDepth, counter);
        } else if (ch === ")") {
            counter--;
        }
    }
    return maxDepth;
};

console.log(maxDepthOptimal("(1+(2*3)+((8)/4))+1"));
console.log(maxDepthOptimal("(1)+((2))+(((3)))"));
console.log(maxDepthOptimal("()(())((()()))"));
