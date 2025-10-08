const beautySum = (s) => {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let hash = new Map();
        for (let j = i; j < s.length; j++) {
            hash.set(s[j], (hash.get(s[j]) || 0) + 1);
            
            let freq = Array.from(hash.values());
            let max = Math.max(...freq);
            let min = Math.min(...freq);
            count += Math.max(0, max - min);
        }
    }
    return count;
};

console.log(beautySum("aabcb"));
console.log(beautySum("aabcbaa"));
