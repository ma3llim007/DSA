// Dynamic behavior - array grows automatically
const arr = [];
arr.push(1);
arr.push(2);
arr[101] = "1";

// Literal Initialization
// Empty array
const empty = [];

// Pre-filled array
const numbers = [1, 2, 3, 4, 5];

// Mixed types (not recommended but possible)
const mixed = [1, "hello", true, null, { name: "John" }];

// Nested arrays (2D, 3D, etc.)
const matrix = [[1, 2, 3], [4, 5, 6][(7, 8, 9)]];

// Array Contructor
// Confusing behavior
const arr1 = new Array(1);
const arr2 = new Array(1, 2, 3);

// Better Alternatives
const arr3 = Array(3).fill(0);
const arr4 = Array.from({ length: 4 }, (_, i) => i);

// Advanced Creation Patterns
const fromString = Array.from("hello");
const fromSet = Array.from(new Set([1, 2, 3, 4]));
const range = Array.from({ length: 5 }, (_, i) => i);

// Spread Operator
const copy = [...numbers];
const merge = [...arr1, ...arr2];

// Array.of() - Consistent Contructor
const single = Array.of(4, 2, 4, 6, 4);