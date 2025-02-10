// ES6 Classes: ES6(ECMAScript 2015) classes are syntactical sugar over Javascript's prototype-based inheritance.
// They provide a cleaner and more structured way to create objects and manage inheritance.

// Key Features of ES6 Classes:
// 1. Class Declaration
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

// 2. Class Instantiation: you can create objects (instances) from the class using the new keyword.
const person1 = new Person("John", 25);
person1.greet();

// 3. Class Inheritance: You can create a subclass that inherits from a parent class using extends.
//When a subclass extends a parent class, the subclass must call super() inside its constructor before accessing 'this'. 
// This is because the parent class's constructor needs to be initialized first.
class Student extends Person {
    constructor(name, age, grade){
        super(name, age) // Calls the parent class constructor and initialize name and age;
        this.grade = grade
    }
    study(){
        console.log(`${this.name} is studying in grade ${this.grade}.`);
    }
}
const student1 = new Student("Alice", 20, "A");
student1.greet(); // Inherited method from Person
student1.study(); // Output: Alice is studying in grade A.

// 4. Getters and Setters: You can define getter and setter methods for controlled access to properties.
class Car {
    constructor(brand) {
        this._brand = brand;
    }

    get brand() {
        return this._brand;
    }

    set brand(newBrand) {
        this._brand = newBrand;
    }
}

const myCar = new Car("Toyota");
console.log(myCar.brand); // Output: Toyota
myCar.brand = "Honda";
console.log(myCar.brand); // Output: Honda

// 5. Static Methods: These methods belong to the class itself and cannot be accessed by instances.
class MathUtil {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtil.add(5, 3)); // Output: 8


// Module: A module in JavaScript is a reusable piece of code that is separated into different files.
// Modules export functions, variables, or classes so they can be imported into other files.
// This improves code organization, maintainability, and reusability.

//Why Do We Need Modules?
// Before ES6 (ECMAScript 2015), JavaScript did not have a built-in module system. Developers had to rely on global variables or external libraries (like CommonJS in Node.js or RequireJS for browsers). This led to issues such as:

// 🔴 Global Scope Pollution – All variables and functions were in the global scope, leading to conflicts.
// 🔴 Code Duplication – Without modules, developers often copied code across multiple files.
// 🔴 Difficult Maintenance – Large applications became hard to manage and debug.

// With ES6 modules, JavaScript provides a built-in way to structure and reuse code efficiently.

//How JavaScript Modules Work
// 1. Exporting from a Module
// To create a module, use the export keyword to make functions, variables, or classes available for import in another file.

// Named Export (Export Multiple Items)
export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

export const PI = 3.1416;

//Default Export (Export a Single Item);
export default function greet(name) {
    return `Hello, ${name}!`;
}

// 2. Importing a Module
// To use a module, use the import keyword.

// Importing Named Exports
// main.js
import { add, multiply, PI } from './mathUtils.js';

console.log(add(2, 3)); // Output: 5
console.log(multiply(4, 5)); // Output: 20
console.log(PI); // Output: 3.1416

// Importing a Default Export
// main.js
import greet from './greet.js';

console.log(greet("John")); // Output: Hello, John!

// Importing Everything as an Object
import * as math from './mathUtils.js';

console.log(math.add(3, 4)); // Output: 7
console.log(math.PI); // Output: 3.1416


