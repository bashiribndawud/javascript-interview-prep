// The proptotype in javascript is a mechanism that allows objects to inherit properties and methods from other objects.
// Every javascript object has an internal link to another object called its prototype.
// This prototype object has its own prototype and so on until an object with a null prototype is reached.

// When you try to access a property or method of an object, JavaScript first looks at the object itself.
// if not found it looks at the object's prototype, and so on until it finds the property or method or reaches the end of the prototype chain.

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log(`Hello my name is ${this.name}`)
}

const person1 = new Person('bashir', 10);
person1.sayHello(); // Hello my name is bashir

const animal = {
    eat: true,
    walk: function(){
        console.log('Animal is walking');
    }
}

const dog = Object.create(animal);
dog.name = 'Tommy';
console.log(dog.eat); // true
console.log(dog.walk()); // Animal is walking