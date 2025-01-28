// slice() and splice() Methods in JavaScript
// Both slice() and splice() are array methods in JavaScript, but they are used for different

// 1. slice() Method
// Extrats a section of an array and returns a new array without modifying the original array.
// array.slice(start, end)
// start: The index at which to begin extraction.
// end: The index at which to stop extraction (not included).

//Example
const fruits = ["apple", "banana", "cherry", "orange"];
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ["banana", "cherry"]

// 2. splice() Method
// Adds, removes, or replaces elements in an array and modifies the original array.
// array.splice(start, deleteCount, item1, item2, ...)
// start: The index at which to start changing the array.
// deleteCount: The number of elements to remove from the array(can be 0).
// item1, item2, ...: The elements to add to the array(optional).

//Example Adding Elements
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log(months); // Output: ["Jan", "Feb", "March", "April", "June"]

//Example Removing Elements
const months1 = ["Jan", "Feb", "March", "April", "June"];
months1.splice(3, 1);
console.log(months1); // Output: ["Jan", "Feb", "March", "June"]

//Example Replacing Elements
const months2 = ["Jan", "Feb", "March", "April", "June"];
months2.splice(3, 1, "May");
console.log(months2); // Output: ["Jan", "Feb", "March", "May", "June"]