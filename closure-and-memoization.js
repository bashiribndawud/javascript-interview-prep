//What is memoization?
//Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
//Memoization is a specific form of caching that involves caching the return value of a function based on its parameters.
//Memoization is a technique used to optimize expensive function calls by caching the results of previous function calls.

//Example of memoization
function memoizedAddTo80() {
    let cache = {};
  
    return function(n) {
      if (n in cache) {
        console.log('Fetch from cache');
        return cache[n];
      } else {
        console.log('Cal result');
        cache[n] = n + 80;
        return cache[n];
      }
    };
  }


const memoized = memoizeAddTo80();
console.log(memoized(5)); // Output: Calculating result 85
console.log(memoized(5)); // Output: Fetching from cache 85
console.log(memoized(6)); // Output: Calculating result 86
console.log(memoized(6)); // Output: Fetching from cache 86

//closure 
//A closure is a function that "remembers" the variables from its outer scope even after the outer function has finished execution.
//In other words, a closure gives you access to an outer function’s scope from an inner function.
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer Variable: ${outerVariable}, Inner Variable: ${innerVariable}`);
    };
}

const closureExample = outerFunction("Hello");
closureExample("World"); // Output: Outer Variable: Hello, Inner Variable: World

function incrementNum(){
    let count = 0;
    return function innerFunction(){
        count++;
        console.log("Counted", count)
    }
}
const incrementResult = incrementNum();
incrementResult()
incrementResult()

