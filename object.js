// Object Literals
const obj = {
  name: "bashir",
  age: 10,
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};



// 2. Object Constructor
const obj2 = new Object();
obj2.name = "bashir";
obj2.age = 10;
obj2.greet = function () {
  console.log(`Hello ${this.name}`);
};



// 3. Using Object.create() //allow you to create object with a specific prototype
// What is Object.create()?
// Object.create() creates a new object and sets its prototype to the object you specify.
// The object created with Object.create() directly inherits properties and methods from the prototype object you pass to it.
// This is particularly useful when you want to implement inheritance or create objects with a predefined structure.
const propstypeobjs = {
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

const obj3 = Object.create(propstypeobjs);
obj3.name = "bashir";
obj3.age = 10;




// 4. Using a Constructor Function (allow you to create multiple instances of similar objects.)
// What is a Constructor Function?
// A constructor function is a regular function invoked with the new keyword.
// When you call a function with new, it:
// Creates a new empty object (this).
// Links the new object to the prototype of the constructor.
// Executes the constructor function with this set to the new object.
// Returns the newly created object (unless the function explicitly returns another object).
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello ${this.name}`);
  };
}

const person1 = new Person("bashir", 10);




// 5. Using ES6 Classes (Classes are syntactic sugar over constructor functions and prototypes.)
// What is an ES6 Class?
// A class in JavaScript is a blueprint for creating objects.
// It encapsulates data (properties) and behaviors (methods) into a single construct.
// Classes make it easier to implement inheritance, encapsulation, and polymorphism.
// Key Features of ES6 Classes
// Constructor Method
// The constructor() method is a special method used to initialize objects created with the class.
// It’s automatically called when an object is instantiated using the new keyword.

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const person2 = new Person2("bashir", 10);

// Key Features of ES6 Classes
// 1. Constructor Method = method is a special method used to initialize objects created with the class. It’s automatically called when an object is instantiated using the new keyword.
// 2. Static Methods = Static methods are methods that are called on the class itself, not on instances of the class.
        class Calculator {
            static add(a, b) {
            return a + b;
            }
        }
        
        console.log(Calculator.add(2, 3)); // Output: 5
// 3. Instance Methods = Methods defined inside a class are added to the prototype of the class and shared across all instances.
        class Person {
            sayHi() {
            console.log("Hi!");
            }
        }
        
        const person = new Person();
        person.sayHi(); // "Hi!"
 
// 4. Inheritance = A subclass inherits all properties and methods from its parent class.
      class Animal {
        constructor(name){
            this.name = name
        }

        speak(){
            console.log(`${this.name} makes a noise`)
        }
      }

      class Dog extends Animal {
        speak(){
            console.log(`${this.name} barks`)
        }
      }
      const dog = new Dog('Rex')
      dog.speak() // Rex barks


// 6. Object.assign() Method (Object.assign() is used to copy the values of all enumerable own properties from one or more source objects to a target object.)
const obj4 = {name: "Bashir"}
const obj5 = {age: 10}
const combinedObj = Object.assign({}, obj4, obj5)