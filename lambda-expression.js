// Lambda Expressions or Arrow Functions in JavaScript
// Arrow functions, also known as lambda expressions, were introduced in ES6. They provide a shorter and more concise syntax to write functions in JavaScript.

// Syntax:
// Traditional Function
    function add(a, b) {
        return a + b;
    }
// Arrow Function
    const add = (a, b) => a + b;
// Key Features of Arrow Functions
// 1. Concise Syntax
    // Arrow functions have a shorter syntax compared to traditional functions. 
    // If the function body consists of a single expression, you can omit the curly braces {} and the return keyword.
    const greet = (name) => `Hello ${name}`;

// 2. Implicit Return
    // Arrow functions automatically return the result of the expression without using the return keyword.
    const add = (a, b) => a + b;

// 3. No Binding of 'this'
    // Arrow functions do not bind their own 'this' value. 
    // Instead, they inherit the 'this' value from the surrounding code.
    const person = {
        name: "Alice",
        greet: function() {
            setTimeout(() => {
                console.log(`Hello ${this.name}`);
            }, 1000);
        }
    };
    person.greet(); // Output: Hello Alice

// 4. No Arguments Object
    // Arrow functions do not have an arguments object. 
    // You can use the rest parameters syntax (...) to access the arguments passed to the function.
    const sum = (...args) => args.reduce((a, b) => a + b, 0);
    // traditional function equivalent
    function sum() {
        return Array.from(arguments).reduce((a, b) => a + b, 0);
    }

// 5. No Constructor
    // Arrow functions cannot be used as constructors. 
    // They do not have their own 'this' value and cannot be called with the new keyword.
    const Person = (name) => {
        this.name = name; // Error: Cannot use 'new' with arrow functions
    };
// When to Use Arrow Functions
// Use arrow functions when:
// You need a concise syntax for writing functions.
// You want to avoid the confusion of 'this' binding.
// You want to use functions as callbacks or event handlers.
// You want to create functions that do not require a 'this' context.
// You want to create functions that do not require the 'arguments' object.
// You want to create functions that do not need to be used as constructors.
// Example of Arrow Functions
// // Traditional Function
// function add(a, b) {
//     return a + b;
// }

// // Arrow Function
// const add = (a, b) => a + b;

