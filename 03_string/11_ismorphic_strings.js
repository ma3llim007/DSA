const ismorphicStrings = (s, t) => {
    if (s.length !== t.length) return false;
    let maps = new Map();
    let mapt = new Map();

    for (let i = 0; i < s.length; i++) {
        let char1 = s[i],
            char2 = t[i];
        if (
            (maps.has(char1) && maps.get(char1) !== char2) ||
            (mapt.has(char2) && mapt.get(char2) !== char1)
        ) {
            return false;
        } else {
            maps.set(char1, char2);
            mapt.set(char2, char1);
        }
    }

    return true;
};

console.log(ismorphicStrings("egg", "add"));
console.log(ismorphicStrings("foo", "bar"));
console.log(ismorphicStrings("paper", "title"));
console.log(ismorphicStrings("badc", "baba"));
