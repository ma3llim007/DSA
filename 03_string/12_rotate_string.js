const rotateStringBruteForce = (s, goal) => {
    if (s.length !== goal.length) return false;

    for (let i = 0; i < s.length; i++) {
        let rotate = s.slice(i) + s.slice(0, i);
        if (rotate === goal) return true;
    }
    return false;
};

const rotateStringOptimal = (s, goal) => {
    if (s.length !== goal.length) return false;
    return (s + s).includes(goal);
};
console.log(rotateStringOptimal("abcde", "cdeab"));
console.log(rotateStringOptimal("abcde", "abced"));
