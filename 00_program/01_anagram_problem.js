// String Anagram
// hello => llohe
// Sameer => eermas


/* 
    CONDITION
    Check Length for both String
    First We Have To Create a Map Of First String And Map For Checking All Character Of String
    Example : {h:1,e:1,l:2,o:1} 
    then We Descreament Number Of Each Character 
    Example : {h:1,e:1,l:1,o:1} 
    Example: { h: 1, e: 1, l: 0, o: 1 }  
*/

// First Approach
function isAnagram(string1, string2) {
    if (string1.length != string2.length) {
        return false
    }
    let counter = {};
    for (let letter of string1) {
        counter[letter] = (counter[letter] || 0) + 1;
    }
    for (let char of string2) {
        if (!counter[char]) {
            return false;
        }
        counter[char] -= 1.
    }
    return true;
}


const anagram = isAnagram('hello', 'llohe');
console.log(anagram);