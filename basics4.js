// Demonstrating various Number methods in JavaScript

// toFixed(): Formats a number to a fixed number of decimal places
const num1 = 123.456;
console.log(num1.toFixed(2)); // Output: "123.46"

// toPrecision(): Formats a number to a specified length
const num2 = 123.456;
console.log(num2.toPrecision(5)); // Output: "123.46"

// toExponential(): Converts a number to exponential notation
const num3 = 123456;
console.log(num3.toExponential(2)); // Output: "1.23e+5"

// isNaN(): Checks if a value is NaN
console.log(Number.isNaN(NaN)); // Output: true
console.log(Number.isNaN(123)); // Output: false

// isFinite(): Checks if a value is a finite number
console.log(Number.isFinite(123)); // Output: true
console.log(Number.isFinite(Infinity)); // Output: false

// parseInt(): Parses a string and returns an integer
console.log(parseInt("123.45")); // Output: 123

// parseFloat(): Parses a string and returns a floating-point number
console.log(parseFloat("123.45")); // Output: 123.45

// Number.isInteger(): Checks if a value is an integer
console.log(Number.isInteger(123)); // Output: true
console.log(Number.isInteger(123.45)); // Output: false

// Number.isSafeInteger(): Checks if a value is a safe integer
console.log(Number.isSafeInteger(9007199254740991)); // Output: true
console.log(Number.isSafeInteger(9007199254740992)); // Output: false

// Number.MAX_VALUE and Number.MIN_VALUE: Returns the largest and smallest possible numbers in JavaScript
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // Output: 5e-324