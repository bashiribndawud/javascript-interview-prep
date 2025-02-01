//Unary Function
// A unary function is a function that takes exactly one argument.
// Example 1: Unary Function
const unaryFunction = (a) => a * a;
console.log(unaryFunction(5)); // Output: 25

//Unary functions are particularly useful when working with functions like map, 
// where only one parameter (the current element) is passed to the callback.
// Example 2: Using Unary Function with map
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((a) => a * a);
console.log(squares); // Output: [1, 4, 9, 16, 25]

//Curried Function
// A curried function is a function that takes multiple arguments one at a time.
// Example 1: Curried Function
const curriedFunction = (a) => (b) => (c) => a + b + c;
console.log(curriedFunction(1)(2)(3)); // Output: 6

//Curried functions are useful when you want to create reusable functions with partial application.
// Example 2: Using Curried Function with Partial Application
const add = (a) => (b) => a + b;
const addTen = add(10);
console.log(addTen(5)); // Output: 15

//Pure Function
// A pure function is a function that:
// Returns the same output for the same input.
// Has no side effects.
// Example 1: Pure Function
const pureFunction = (a, b) => a + b;
console.log(pureFunction(2, 3)); // Output: 5
