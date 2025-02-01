// First- Class Functions
// In JavaScript, functions are first-class citizens, which means they can be:
// Assigned to variables.
// Passed as arguments to other functions.
// Returned from other functions.
// Stored in data structures.

// Example 1: Assigning a Function to a Variable
// In this example, we assign an anonymous function to a variable greet.
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("John")); // Output: Hello, John!

// Example 2: Passing a Function as an Argument
function performOperation(a, b, operation) {
    return operation(a, b);
  }
  
  const add = (x, y) => x + y;
  console.log(performOperation(5, 3, add)); // Output: 8

// Example 3: Returning a Function from Another Function
// In this example, the outer function returns an inner function.
function outer() {
    return function inner() {
        console.log("Hello, Inner Function!");
    };
}

const innerFunc = outer();
innerFunc(); // Output: Hello, Inner Function!

// Example 4: Storing Functions in Data Structures
// In this example, we store two functions in an array.
const functions = [() => console.log("Function 1"), () => console.log("Function 2")];


// 2. Higher-Order Functions
// A higher-order function is a function that:
// Takes one or more functions as arguments.
// Returns a function as its result.

// Example 1: Function Taking Another Function as an Argument:
function greetUser(name, callback){
    const greeting = `Hello, ${name}!`;
    callback(greeting);
}

function shout(message){
    return message.toUpperCase();
}

console.log(greetUser("John", shout)); // Output: HELLO, JOHN!

// Example 2: Function Returning Another Function
function createMultiplier(multiplier){
    return function(number){
        return number * multiplier;
    };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10

