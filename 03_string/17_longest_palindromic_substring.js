// Function for check palindrome
const isPalindrome = (str) => {
    let l = 0,
        r = str.length - 1;
    while (l < r) {
        if (str[l] !== str[r]) return false;
        l++;
        r--;
    }

    return true;
};
const longestPalindromeBruteForce = (s) => {
    let longest = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let subStrings = s.slice(i, j + 1);
            if (
                isPalindrome(subStrings) &&
                subStrings.length > longest.length
            ) {
                longest = subStrings;
            }
        }
    }
    return longest;
};

const longestPalindromeBetter = (s) => {
    if (s.length < 2) return s;
    let start = 0,
        maxLen = 1;

    const expand = (l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > maxLen) {
                start = l;
                maxLen = r - l + 1;
            }
            l--;
            r++;
        }
    };

    for (let i = 0; i < s.length; i++) {
        expand(i, i);
        expand(i, i + 1);
    }

    return s.slice(start, start + maxLen);
};

console.log(longestPalindromeBetter("babad"));
console.log(longestPalindromeBetter("cbbd"));
