const maxVowelsBruteForce = (s, k) => {
    const vowles = new Set(["a", "e", "i", "o", "u"]);
    let maxCount = 0;

    for (let i = 0; i < s.length - k; i++) {
        let count = 0;

        for (let j = i; j < i + k; j++) {
            if (vowles.has(s[j])) count++;
        }
        maxCount = Math.max(maxCount, count);
    }
    return maxCount;
};

const maxVowelsBetter = (s, k) => {
    const vowles = new Set(["a", "e", "i", "o", "u"]),
        n = s.length;

    const prefix = new Array(n).fill(0);
    prefix[0] = vowles.has(s[0]) ? 1 : 0;

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + (vowles.has(s[i]) ? 1 : 0);
    }

    let maxCount = prefix[k - 1];

    for (let i = k; i < n; i++) {
        let maxWindow = prefix[i] - prefix[i - k];
        maxCount = Math.max(maxCount, maxWindow);
    }

    return maxCount;
};

const maxVowels = (s, k) => {
    const vowles = new Set(["a", "e", "i", "o", "u"]);
    let count = 0;

    // inital window
    for (let i = 0; i < k; i++) {
        if (vowles.has(s[i])) count++;
    }

    let maxCount = count;
    for (let i = k; i < s.length; i++) {
        if (vowles.has(s[i])) count++;
        if (vowles.has(s[i - k])) count--;
        maxCount = Math.max(maxCount, count);
    }
    return maxCount;
};

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));
