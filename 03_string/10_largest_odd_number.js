const largrestOddNumber = (num) => {
    let numsArray = num.split("");
    let result = "";
    numsArray.forEach((ch, index) => {
        if (ch % 2 !== 0) result = num.substring(0, index + 1);
    });
    return result
};

console.log(largrestOddNumber("52"));
console.log(largrestOddNumber("4206"));
console.log(largrestOddNumber("35427"));
