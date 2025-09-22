// Brute Force Approach With Sorting
const isAnagramBruteForce = (s, t) => {
    if (s.length !== t.length) return false;

    return s.split("").sort().join("") === t.split("").sort().join("");
};

// Better Approach With HASHMAP
const isAnagramHashMap = (s, t) => {
    if (s.length !== t.length) return false;

    let hash = new Map();
    for (let ch of s) {
        hash.set(ch, (hash.get(ch) || 0) + 1);
    }
    for (let ch of t) {
        if (!hash.get(ch)) return false;
        hash.set(ch, hash.get(ch) - 1);
        if (hash.get(ch) < 0) return false;
    }

    return true;
};

// Optimal Approach With Array of Letter
const isAnagramOptimal = (s, t) => {
    if (s.length !== t.length) return false;

    let counts = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - 97]++;
        counts[t.charCodeAt(i) - 97]--;
    }
    return counts.every((val) => val === 0);
};

console.log(isAnagramOptimal("anagram", "nagaram"));
console.log(isAnagramOptimal("rat", "car"));
console.log(isAnagramOptimal("sameer", "remase"));
