//The difference between let and var in JavaScript lies in their scope, 
// hoisting, and re-declaration behavior. Here's an explanation:

// 1. Scope: 
// var: i. Has function scope. This means that a variable declared with var is accessible anywhere within the function it is declared.
        //ii. It is not block-scoped, so it ignores block-level structures like if, for, or while.
//let: Has block scope. This means it is accessible only within the block {} where it is declared.

function testVar() {
    if (true) {
      var x = 10; // Function-scoped
    }
    console.log(x); // Output: 10 (accessible outside the block)
}

function testLet() {
if (true) {
    let y = 20; // Block-scoped
}
console.log(y); // Error: y is not defined
}

//Hoisting 
//var: Variables declared with var are hoisted to the top of their scope, but their value is initialized to undefined until the code execution reaches the declaration.
//let : Variables declared with let are also hoisted, but they are not initialized. Accessing them before declaration will result in a ReferenceError.

console.log(a); // Output: undefined (var is hoisted)
var a = 5;

console.log(b); // Error: Cannot access 'b' before initialization
let b = 10;

// 3. Re-declaration
//var: Allows the same variable to be re-declared within the same scope without any error.
// let: Does not allow re-declaration of the same variable within the same scope. Doing so will result in a SyntaxError

var x = 1;
var x = 2; // No error
console.log(x); // Output: 2

let y = 3;
let y = 4; // Error: Identifier 'y' has already been declared
