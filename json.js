//What is JSON? 
// JSON stands for JavaScript Object Notation. 
// It is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. 
// It is based on a subset of the JavaScript Programming Language Standard ECMA-262 3rd Edition - December 1999.

// Key Characteristics of JSON:
// Data Format: Text-based format derived from JavaScript object syntax.
// Structure: Composed of key-value pairs, arrays, and nested objects.
// Supported Data Types:
// Strings
// Numbers
// Booleans (true, false)
// Arrays
// Objects
// Null (null)
// Lightweight and Language-Independent: Though derived from JavaScript, it is supported by most programming languages.

//Example of JSON
// {
//     "name": "Alice",
//     "age": 30,
//     "isStudent": false,
//     "hobbies": ["reading", "traveling", "coding"],
//     "address": {
//       "city": "New York",
//       "zip": "10001"
//     }
//   }

//Common Operators Used with JSON
// 1. JSON.parse(): Converts a JSON string to a JavaScript object.
        // const jsonString = '{"name":"Alice","age":30}';
        // const obj = JSON.parse(jsonString);
        // console.log(obj); // Output: { name: "Alice", age: 30 }
// 2. JSON.stringify(): Converts a JavaScript object to a JSON string.
        // const obj = { name: "Alice", age: 30 };
        // const jsonString = JSON.stringify(obj);
        // console.log(jsonString); // Output: '{"name":"Alice","age":30}'
// 3. Dot Notation: Accesses properties of a JSON object using dot notation.
        // const obj = { name: "Alice", age: 30 };
        // console.log(obj.name); // Output: Alice
// 4. Bracket Notation: Accesses properties of a JSON object using bracket notation.
        // const obj = { name: "Alice", age: 30 };
        // console.log(obj["name"]); // Output: Alice
// 5. Object.keys(): Returns an array of a JSON object's keys.
        // const obj = { "name": "Alice", "age": 30 };
        // console.log(Object.keys(obj)); // Output: ["name", "age"]
// 6. Object.values(): Returns an array of a JSON object's values.
        // const obj = { "name": "Alice", "age": 30 };
        // console.log(Object.values(obj)); // Output: ["Alice", 30]
// 7. Object.entries(): Returns an array of a JSON object's key-value pairs.
        // const obj = { "name": "Alice", "age": 30 };
        // console.log(Object.entries(obj)); // Output: [["name", "Alice"], ["age", 30]]
// 8. Spread Operator: Copies properties from one JSON object to another.
        // const obj1 = { name: "Alice", age: 30 };
        // const obj2 = { ...obj1, city: "New York" };
        // console.log(obj2); // Output: { name: "Alice", age: 30, city: "New York" }
// 9. delete Operator: Deletes a property from a JSON object.
        // const obj = { "name": "Alice", "age": 30 };
        // delete obj.age;
        // console.log(obj); // Output: { name: "Alice" }