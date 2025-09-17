// Brute Force Approach
const reverseWords = (s) => {
    let words = s.split(" ");
    let result = [];
    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i]) result.push(words[i]);
    }

    return result.join(" ");
};

// Better Approach
const reverseWordsBetter = (s) => {
    return s.split(" ").filter((s) => s.length > 0).reverse().join(" ");
};
let example1 = "this is an amazing program";
let example2 = "This is decent";
let example3 = "the sky is blue  ";

console.log(reverseWordsBetter(example1));
console.log(reverseWordsBetter(example2));
console.log(reverseWordsBetter(example3));
