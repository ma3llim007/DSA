const longestCommonPrefix = (strs) => {
    strs.sort();

    let result = "",
        first = strs[0],
        last = strs[strs.length - 1];

    for (let i = 0; i < first.length; i++) {
        if (first[i] === last[i]) result += first[i];
        else break;
    }
    return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
