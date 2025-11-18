function palindromeWithForLoop(string) {
    let reverseString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string.charAt(i);
    }

    if (string === reverseString) {
        console.log(`${string} Is A Palindrome Number`);
    } else {
        console.log(`${string} Is A Not Palindrome Number`);
    }
}

function palindromeWithTwoPointer(string) {
    let plainText = string.replaceAll(" ", "").toLowerCase();
    let i = 0,
        j = plainText.length - 1;
    let isPalindrome = true;
    while (i < j) {
        if (plainText.charAt(i) != plainText.charAt(j)) {
            isPalindrome = false;
            break;
        }
        i++;
        j--;
    }
    if (isPalindrome) {
        console.log(`${string} Is A Palindrome Number`);
    } else {
        console.log(`${string} Is A Not Palindrome Number`);
    }
}

function isPalindrome(string) {
    let plainText = string.replaceAll(" ", "").toLowerCase();
    let reverseString = plainText.split("").reverse().join("");

    if (plainText === reverseString) {
        console.log(`${string} Is A Palindrome Number`);
    } else {
        console.log(`${string} Is A Not Palindrome Number`);
    }
}

const isPalindromeTwo = (s) => {
    s = s.replaceAll(" ", "").toLowerCase();
    let left = 0,
        right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        right--;
        left++;
    }

    return true;
};

const name = "A man a plan a canal Panama";
const name1 = "madam";
console.log(isPalindromeTwo(name));
