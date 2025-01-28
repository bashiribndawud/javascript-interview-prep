// Difference Between == and === in JavaScript
// Both == and === are comparison operators in JavaScript, but they differ in how they compare values. 
// Here's a detailed explanation:

// == (Equality Operator)
// The == operator compares two values for equality, but it performs type coercion before the comparison.
// If the values have different types, JavaScript will attempt to convert them to the same type before making the comparison.
// If the values are of the same type, the comparison is straightforward.
// If the values are objects, arrays, or functions, the comparison is based on reference equality.
// Example:
console.log(1 == "1"); // Output: true
console.log(0 == false); // Output: true
console.log(1 == true); // Output: true
console.log(0 == ""); // Output: true
console.log(null == undefined); // Output: true
console.log(0 == null); // Output: false
console.log(0 == undefined); // Output: false
console.log(false == ""); // Output: false
console.log(false == []); // Output: true
console.log(false == {}); // Output: false
console.log("" == 0); // Output: true
console.log("" == []); // Output: true
console.log("" == {}); // Output: false
console.log(0 == []); // Output: true
console.log(0 == {}); // Output: false

// === (Strict Equality Operator)
// The === operator compares two values for equality without performing type coercion.
// If the values have different types, the comparison will return false.
// If the values are of the same type, the comparison is straightforward.
// If the values are objects, arrays, or functions, the comparison is based on reference equality.

// Example:
console.log(1 === "1"); // Output: false
console.log(0 === false); // Output: false
console.log(1 === true); // Output: false
console.log(0 === ""); // Output: false
console.log(null === undefined); // Output: false
console.log(0 === null); // Output: false
console.log(0 === undefined); // Output: false
console.log(false === ""); // Output: false
console.log(false === []); // Output: false
console.log(false === {}); // Output: false
console.log("" === 0); // Output: false
console.log("" === []); // Output: false
console.log("" === {}); // Output: false
console.log(0 === []); // Output: false
console.log(0 === {}); // Output: false
// Key Differences Between == and ===
// The == operator performs type coercion, while the === operator does not.
// The == operator compares values after converting them to a common type, while the === operator compares values without type conversion.
// The == operator is more lenient and can lead to unexpected results, while the === operator is more strict and predictable.
// The === operator is generally recommended for comparing values in JavaScript.



