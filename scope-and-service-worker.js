// Scope in JavaScript
// Scope in JavaScript defines where variables and functions can be accessed in a program. 
// It determines visibility and lifetime of variables.

// Types of Scope in JavaScript
// 1. Global Scope
// A variable declared outside any function or block is in the global scope. 
// It can be accessed from anywhere in the program.

let globalVar = "I am global";

function test() {
    console.log(globalVar); // Accessible here
}

console.log(globalVar); // Accessible here too

//2. Function Scope (Local Scope)
// Variables declared inside a function are accessible only within that function.
function example() {
    let localVar = "I am local";
    console.log(localVar); // ✅ Accessible here
}

example();
console.log(localVar); // ❌ Error: localVar is not defined

// 3. Block Scope (let & const Only)
// Variables declared with let and const inside {} (a block) are only accessible inside that block.
if (true) {
    let blockVar = "I exist only inside this block";
    console.log(blockVar); // ✅ Accessible here
}

console.log(blockVar); // ❌ Error: blockVar is not defined

//4. Lexical Scope (Nested Functions Inherit Scope)
//A nested function can access variables from its parent function due to lexical scope.
function outer() {
    let outerVar = "Outer variable";

    function inner() {
        console.log(outerVar); // ✅ Accessible
    }

    inner();
}

outer();

// 5. Closure (Function Remembering Its Scope)
// A closure is when a function "remembers" variables from its parent scope, even after the parent function has finished executing.
function counter() {
    let count = 0;
    
    return function() {
        count++;
        console.log(count);
    };
}

const increment = counter();
increment(); // Output: 1
increment(); // Output: 2



// Service Worker in JavaScript
// A Service Worker is a JavaScript file that runs in the background, separate from the main browser thread. It allows features like:
// ✅ Offline Support – Caches website data for offline use.
// ✅ Push Notifications – Enables web apps to send notifications.
// ✅ Background Sync – Delays network requests until the device has internet access.

// How a Service Worker Works
// 1️⃣ The browser registers the service worker.
// 2️⃣ The service worker installs and caches files.
// 3️⃣ The service worker activates and controls network requests.

// Basic Example of a Service Worker
// 1. Register the Service Worker (Inside main.js)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(() => console.log("Service Worker Registered"))
        .catch(err => console.log("Service Worker Registration Failed:", err));
}

// 2. Create the Service Worker File (service-worker.js)
self.addEventListener('install', event => {
    console.log("Service Worker Installed");
});

self.addEventListener('activate', event => {
    console.log("Service Worker Activated");
});

self.addEventListener('fetch', event => {
    console.log("Fetching:", event.request.url);
});
// Key Benefits of Service Workers
// ✅ Works Offline – Enables web apps to function without an internet connection.
// ✅ Faster Load Times – Caches files to improve performance.
// ✅ Push Notifications – Sends updates to users even when the website is closed.






