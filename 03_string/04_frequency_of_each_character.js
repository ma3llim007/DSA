let string = "hello";
let characterArray = new Array(128).fill(0);

for (let i = 0; i < string.length; i++) {
    let index = string.charCodeAt(i);
    characterArray[index] = characterArray[index] + 1;
}

for (let i = 0; i < characterArray.length; i++) {
    if (characterArray[i] > 0) {
        console.log(
            String.fromCharCode(i) + " Appers At" + characterArray[i] + "Times"
        );
    }
}
