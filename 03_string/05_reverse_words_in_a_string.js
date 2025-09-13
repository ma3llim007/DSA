const reverseWords = (string) => {
    let stringToArray = string.split(" ");
    console.log(stringToArray.length);
    
    for (let i = stringToArray.length - 1; i < 0; i--) {
        console.log(stringToArray[i]);
    }
};
let example1 = "this is an amazing program";
let example2 = "This is decent";

reverseWords(example1);
