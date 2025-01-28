// Comparing Object and Map in JavaScript
// Both Object and Map are used to store key-value pairs in JavaScript. 
// However, they differ in terms of usage, performance, and features. Let’s compare them in detail:

// 1. Keys
    // Object: Keys are strings or symbols.
    const obj = {};
    obj["name"] = "Alice";
    console.log(obj); // Output: { name: "Alice" }
    // Map: Keys can be of any type, including functions, objects, and primitive values.
    const map = new Map();
    const key1 = "name";
    const key2 = { id: 1 };
    map.set(key1, "Alice");
    console.log(map.get(key1)); // Output: Alice
    map.set(key2, "Bob");
    console.log(map.get(key2)); // Output: Bob

// 2. Iteration
    // Object: To iterate over an object, you need to convert it to an array using Object.keys(), Object.values(), or Object.entries().
    const obj1 = { name: "Alice", age: 30 };
    Object.keys(obj1).forEach((key) => {
    console.log(key, obj1[key]);
    });
    // Output:
    // name Alice
    // age 30
    // Map: Maps are iterable, so you can directly iterate over them using for...in loop.
    const map1 = new Map();
    map1.set("name", "Alice");
    map1.set("age", 30);
    for (const key in map1) {
    console.log(key, map1[key]);
    }
    // Output:
    // name Alice
    // age 30

// 3. Performance
    // Object: Objects are optimized for size and speed when using string keys.
    // Map: Maps are optimized for frequent additions and removals of key-value pairs.
    // When to Use Object or Map
    // Use an object when:
    // You need to create a simple key-value pair.
    // You need to work with JSON data.

    // Use a map when:
    // You need to maintain the order of key-value pairs.
    // You need to store keys of any type.
    // You need to iterate over key-value pairs.

// 4. Size Property
    // Object: No direct way to get the size of an Object. You need to calculate it manually using Object.keys().
        const obj = { a: 1, b: 2 };
        console.log(Object.keys(obj).length); // Output: 2
    // Map: Has a size property to get the number of entries directly.
        const map2 = new Map();
        map.set("a", 1);
        map.set("b", 2);
        console.log(map.size); // Output: 2

// 5. Features
    // Object: Objects have additional features like prototype, constructor, and inheritance.
    // Map: Maps have additional features like maintaining insertion order, size, and iterable.

// 6. Use Cases
    // Object: Objects are suitable for simple key-value pairs and JSON data.
    // Map: Maps are suitable for maintaining insertion order, storing keys of any type, and iterating over key-value pairs.





