const readSyncLine = require("readline-sync");
// Check if a string is palindrome or not
const checkPalindromeRecursion = (string, startIndex, endIndex) => {
    if (startIndex <= endIndex) {
        if (string[startIndex] !== string[endIndex]) {
            return false;
        } else {
            checkPalindromeRecursion(string, startIndex + 1, endIndex - 1);
            return true;
        }
    }
}

const main = () => {
    let string = readSyncLine.question("Enter a string:- ");
    let start = 0;
    let end = string.length-1;
    let fucObj = checkPalindromeRecursion(string, start, end);
    if (fucObj) {
        console.log(`${string} Is a Palindrome`);
    } else {
        console.log(`${string} Is a Not Palindrome`);
    }
    
}
main()