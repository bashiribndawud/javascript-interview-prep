// IndexedDB and Web Storage in JavaScript
// 1. Web Storage (LocalStorage & SessionStorage)
// Web Storage is a simple way to store key-value pairs in the browser. It consists of:

// localStorage → Stores data permanently until manually cleared.
// sessionStorage → Stores data only for the session (deleted when the tab/browser closes).

// How Web Storage Works
// LocalStorage Example
// Save data
localStorage.setItem("username", "JohnDoe");

// Retrieve data
console.log(localStorage.getItem("username")); // Output: JohnDoe

// Remove data
localStorage.removeItem("username");

// Clear all stored data
localStorage.clear();

// SessionStorage Example
// Save data
sessionStorage.setItem("sessionKey", "Temporary Data");

// Retrieve data
console.log(sessionStorage.getItem("sessionKey")); // Output: Temporary Data

// Remove data
sessionStorage.removeItem("sessionKey");

// Clear session storage
sessionStorage.clear();

// Web Storage Limitations
// ❌ Limited Storage (~5MB per origin).
// ❌ Only Stores Strings (objects need to be stringified).
// ❌ No Indexed Searching (must retrieve the whole dataset).


// 2. IndexedDB (For Large, Structured Data)
// IndexedDB is a low-level NoSQL database in the browser that allows storing structured data, including:
// ✅ Objects (without converting to strings).
// ✅ Indexes for efficient searching.
// ✅ Large amounts of data (more than 5MB).

// How IndexedDB Works
// IndexedDB is an asynchronous database with the following key concepts:
// 🔹 Database (db) → Holds object stores.
// 🔹 Object Store → Similar to a table in SQL, stores data as objects.
// 🔹 Transaction → Ensures operations are completed safely.
// 🔹 Index → Optimizes searches based on specific properties.

let db;
const request = indexedDB.open("MyDatabase", 1);

request.onsuccess = function(event) {
    db = event.target.result;
    console.log("Database opened successfully!");
};

request.onerror = function(event) {
    console.log("Error opening database:", event.target.error);
};

request.onupgradeneeded = function(event) {
    db = event.target.result;

    // Create an object store (like a table)
    let store = db.createObjectStore("users", { keyPath: "id" });

    // Create an index on "name"
    store.createIndex("nameIndex", "name", { unique: false });

    console.log("Database setup complete!");
};
// 2. Add Data to IndexedDB
function addUser(user) {
    const transaction = db.transaction(["users"], "readwrite");
    const store = transaction.objectStore("users");
    store.add(user);
}

// Add a user
addUser({ id: 1, name: "Alice", age: 25 });

// 3. Retrieve Data from IndexedDB
function getUser(id) {
    const transaction = db.transaction(["users"], "readonly");
    const store = transaction.objectStore("users");
    const request = store.get(id);

    request.onsuccess = function(event) {
        console.log("User retrieved:", event.target.result);
    };
}

// Retrieve user with id 1
getUser(1);

// Comparison: IndexedDB vs Web Storage
// Feature	LocalStorage/SessionStorage	IndexedDB
// Data Type	Strings only	Objects, Numbers, Files
// Size Limit	~5MB	Unlimited (depends on disk space)
// Indexed Searching	❌ No	✅ Yes
// Asynchronous	❌ No	✅ Yes
// Transactions	❌ No	✅ Yes
// Use Case	Small key-value storage (e.g., user settings)	Large, structured data (e.g., offline apps, caching)

// When to Use Web Storage vs IndexedDB
// ✔️ Use LocalStorage for simple, small data (e.g., theme preferences, tokens).
// ✔️ Use SessionStorage for temporary session data (e.g., form data, login sessions).
// ✔️ Use IndexedDB for large structured data (e.g., caching, offline databases).





