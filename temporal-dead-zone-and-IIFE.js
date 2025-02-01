//
// 1. Temporal Dead Zone (TDZ)
// The Temporal Dead Zone (TDZ) is the period between when a variable is hoisted and when it is initialized. 
// During this time, accessing the variable results in a ReferenceError.

//Why Does TDZ Happen?
//let and const are hoisted to the top of their scope but are not initialized until the code execution reaches their declaration.
//If you try to access the variable before its declaration, JavaScript throws an error.

console.log(a); // Output: undefined (var is hoisted)
console.log(b); // Error: Cannot access 'b' before initialization (TDZ)

var a = 5;
let b = 10;

// 2. Immediately Invoked Function Expression (IIFE)
//An Immediately Invoked Function Expression (IIFE) is a function that runs immediately after it is defined. 
// It is useful for creating a temporary scope and avoiding variable pollution in the global scope.
(function() {
    console.log("IIFE executed!");
})();

//arrow function
(() => {
    console.log("Arrow function IIFE executed!");
})();

// Why Use IIFE?
// Encapsulation – Prevents variables from polluting the global scope.
// Execution on Load – Runs immediately after being defined.
// Avoid Variable Conflicts – Useful when integrating multiple scripts.