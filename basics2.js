// Math Object Functions

// Absolute Value
function absoluteValueExample(x) {
    console.log(`Math.abs(${x}) =`, Math.abs(x));
}

// Ceiling
function ceilingExample(x) {
    console.log(`Math.ceil(${x}) =`, Math.ceil(x));
}

// Floor
function floorExample(x) {
    console.log(`Math.floor(${x}) =`, Math.floor(x));
}

// Square Root
function squareRootExample(x) {
    console.log(`Math.sqrt(${x}) =`, Math.sqrt(x));
}

// Maximum of Numbers
function maxExample(...numbers) {
    console.log(`Math.max(${numbers}) =`, Math.max(...numbers));
}

// Minimum of Numbers
function minExample(...numbers) {
    console.log(`Math.min(${numbers}) =`, Math.min(...numbers));
}

// Example Usage
absoluteValueExample(-10); // Output: Math.abs(-10) = 10
ceilingExample(4.2);       // Output: Math.ceil(4.2) = 5
floorExample(4.8);         // Output: Math.floor(4.8) = 4
squareRootExample(16);     // Output: Math.sqrt(16) = 4
maxExample(1, 5, 3, 9);    // Output: Math.max(1, 5, 3, 9) = 9
minExample(1, 5, 3, 9);    // Output: Math.min(1, 5, 3, 9) = 1