// Bitwise Operators

// AND Operator
function andOperatorExample(a, b) {
    console.log(`${a} & ${b} =`, a & b); // Performs bitwise AND
}

// OR Operator
function orOperatorExample(a, b) {
    console.log(`${a} | ${b} =`, a | b); // Performs bitwise OR
}

// XOR Operator
function xorOperatorExample(a, b) {
    console.log(`${a} ^ ${b} =`, a ^ b); // Performs bitwise XOR
}

// NOT Operator
function notOperatorExample(a) {
    console.log(`~${a} =`, ~a); // Performs bitwise NOT
}

// Left Shift Operator
function leftShiftExample(a, b) {
    console.log(`${a} << ${b} =`, a << b); // Shifts bits of a to the left by b positions
}

// Right Shift Operator
function rightShiftExample(a, b) {
    console.log(`${a} >> ${b} =`, a >> b); // Shifts bits of a to the right by b positions
}

// Unsigned Right Shift Operator
function unsignedRightShiftExample(a, b) {
    console.log(`${a} >>> ${b} =`, a >>> b); // Shifts bits of a to the right by b positions, filling with zeros
}

// Example Usage
andOperatorExample(5, 3); // Output: 5 & 3 = 1
orOperatorExample(5, 3);  // Output: 5 | 3 = 7
xorOperatorExample(5, 3); // Output: 5 ^ 3 = 6
notOperatorExample(5);    // Output: ~5 = -6
leftShiftExample(5, 1);   // Output: 5 << 1 = 10
rightShiftExample(5, 1);  // Output: 5 >> 1 = 2
unsignedRightShiftExample(-5, 1); // Output: -5 >>> 1 = 2147483645