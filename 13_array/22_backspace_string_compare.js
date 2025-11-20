const backspaceCompareBruteForce = (s, t) => {
    function build(str) {
        let stack = [];
        for (let ch of str) {
            if (ch === "#") stack.pop();
            else stack.push(ch);
        }
        return stack.join("");
    }
    return build(s) === build(t);
};

const backspaceCompare = (s, t) => {
    let i = s.length - 1,
        j = t.length - 1,
        sSkip = 0,
        tSkip = 0;

    while (i >= 0 || j >= 0) {
        while (i >= 0) {
            if (s[i] === "#") {
                sSkip++;
                i--;
            } else if (sSkip > 0) {
                sSkip--;
                i--;
            } else break;
        }

        while (j >= 0) {
            if (t[j] === "#") {
                tSkip++;
                j--;
            } else if (tSkip > 0) {
                tSkip--;
                j--;
            } else break;
        }

        if (i >= 0 && j >= 0 && s[i] !== t[j]) return false;
        if (i >= 0 !== j >= 0) return false;

        i--;
        j--;
    }

    return true;
};

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a#c", "b"));
