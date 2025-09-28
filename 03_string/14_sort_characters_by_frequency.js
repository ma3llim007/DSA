const frequencySort = (s) => {
    let hashMap = new Map();
    for (let ch of s) {
        if (hashMap.has(ch)) hashMap.set(ch, hashMap.get(ch) + 1);
        else hashMap.set(ch, 1);
    }

    const mapArray = Array.from(hashMap.entries());
    mapArray.sort((a, b) => b[1] - a[1]);
    
    let str = "";
    for (let [key, values] of mapArray) {
        for (let i = 0; i < values; i++) {
            str += key;
        }
    }
    return str;
};

console.log(frequencySort("tree"));
// console.log(frequencySort("cccaaa"));
// console.log(frequencySort("Aabb"));
