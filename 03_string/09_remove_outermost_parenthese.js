// With Counter better approach with space complexity O(1)
const removeOuterMostParentheseWithCounter = (s) => {
    let result = "",
        counter = 0;
    for (let ch of s) {
        if (ch === "(") {
            if (counter > 0) result += ch;
            counter++;
        } else {
            counter--;
            if (counter > 0) result += ch;
        }
    }

    return result;
};

// With Stack
const removeOuterMostParentheseWithStack = (s) => {
    let result = "",
        stack = [];
    for (let ch of s) {
        if (ch === "(") {
            if (stack.length > 0) result += ch;
            stack.push(ch);
        } else {
            stack.pop(ch);
            if (stack.length > 0) result += ch;
        }
    }
    return result;
};

console.log(removeOuterMostParentheseWithCounter("(()())(())"));
console.log(removeOuterMostParentheseWithCounter("(()())(())(()(()))"));
console.log(removeOuterMostParentheseWithCounter("()()"));
