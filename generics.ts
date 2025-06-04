// explain generics in typescript 


// ChatGPT said:
// 🧠 What Are Generics in TypeScript?
// Generics are a way to create reusable and flexible components, functions, or classes that work with any data type, while still preserving type safety.

// 📦 Why Use Generics?
// Instead of hardcoding types, you can write code that works with multiple types, yet still gets type checking and autocomplete support.

// 🧪 Example: Without Generics

function identityW(value: any): any {
  return value;
}
// This works, but you lose type safety.

// You can pass anything, but you won’t get proper IntelliSense or type checking.

// ✅ Example: With Generics

function identity<T>(value: T): T {
  return value;
}

// const num = identity<number>(10); // T is number
// const str = identity<string>('hello'); // T is string
// Here, T is a generic type parameter, which means "some type to be decided when the function is called."

// 🔁 Generics with Arrays

// function getFirstItem<T>(arr: T[]): T {
//   return arr[0];
// }

// const first = getFirstItem<string>(['a', 'b', 'c']); // 'a'
// 🏗️ Generics in Interfaces

interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 123 };
const stringBox: Box<string> = { value: "hello" };
// 🧰 Generics with Constraints
// You can restrict what types are allowed:


// function logLength<T extends { length: number }>(item: T): void {
//   console.log(item.length);
// }

// logLength("hello");      // ✅ string has length
// logLength([1, 2, 3]);     // ✅ array has length
// // logLength(123);        // ❌ number doesn't have length
// 🧱 Generics in Classes

class DataStore<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }
}

// const store = new DataStore<string>();
// store.add("Hello");
// 🧩 Summary
// Concept	Description
// T	Generic placeholder for a type
// T[]	Array of generic type
// T extends U	Constrains T to types that are or extend U
// <T>	Declares the generic type in functions/classes

// Let me know if you want real-world examples like generic APIs or form inputs!