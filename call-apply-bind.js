// The call, apply, and bind methods in javascript can be used to assign an object to the 'this' keyword in a function.
// When we have an object the 'this' keyword refers to the object itself.
// When we have a function the 'this' keyword refers to the global object.
// global object is the window object in the browser.
// when we have a class this refers to the class itself.

const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        //this refers to the person object
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName()); // Output: John Doe

const person1 = {
    fullName: function(){
        console.log(this); // Output: {firstName: "John", lastName: "Doe"}
        return this.firstName + " " + this.lastName;
    }
}

const person2 = {
    firstName: "John",
    lastName: "Doe"
}

const person3 = {
    firstName: "Jane",
    lastName: "Doe"
}
//call Examples 1
//By using call() method we can set the 'this' value to the object passed as the first argument.
console.log(person1.fullName.call(person2)); // Output: John Doe
console.log(person1.fullName.call(person3)); // Output: Jane Doe

//call Examples 2
const obj = {name: "John"};
let greeting = function(a, b){
    return `${a} ${this.name} ${b}`;
}
console.log(greeting.call(obj, "Hello", "How are you?")); // Output: Hello John How are you?


//apply Examples -> The apply() method is similar to the call() method, but the difference is that the apply() method accepts an array of arguments.
const obj1 = {name: "John"};
const greeting1 = function(a, b){
    return `${a} ${this.name} ${b}`
}
console.log(greeting1.apply(obj1, ["Hello", "How are you?"])); // Output: Hello John How are you?

//bind Examples -> The bind() method is similar to the call() method, but the difference is that the bind() method returns a new function.
const obj2 = {name: "John"};
let greeting2 = function(a, b){
    return `${a} ${this.name} ${b}`
}

let bound = greeting2.bind(obj2, "Hello", "How are you");
bound()