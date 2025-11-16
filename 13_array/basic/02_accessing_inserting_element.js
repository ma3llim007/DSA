// Access by Index - O(1)
const fruits = ["apple", "banana", "cherry"];

// Positive indexing (0-based)
const app = fruits[0];

// Negative indexing (ES2022 - .at() method)
const bana = fruits.at(-2);

// Inserting at the End - O(1) amortized
const stack = [1, 2, 3];

// push() - adds to end, returns new length
const newLength = stack.push(4); // [1, 2, 3, 4], returns 4
stack.push(5, 6, 7); // [1, 2, 3, 4, 5, 6, 7]

// Direct assignment
stack[stack.length] = 8; // [1, 2, 3, 4, 5, 6, 7, 8]

// Spread operator (creates new array)
const extended = [...stack, 9, 10]; // Original unchanged

console.log(stack);