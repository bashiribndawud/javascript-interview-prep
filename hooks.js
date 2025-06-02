// // Custom hooks vs built-in hooks — when and why?


// ChatGPT said:
// Great question — here's a clear, interview-ready explanation of Custom Hooks vs Built-in Hooks in React:

// ✅ Built-in Hooks
// These are the core hooks provided by React to manage state, lifecycle, context, refs, etc.

// 📌 Common Built-in Hooks:
// Hook	                    Purpose
// useState	                Manage local state
// useEffect	            Perform side effects (e.g., data fetching)
// useContext	            Access context values
// useRef	                Reference DOM elements or persist mutable values
// useMemo / useCallback	Performance optimizations
// useReducer	            Manage complex local state with reducers

// ✅ When to use:
// For basic component logic and state (e.g., toggles, API fetches, timeouts)

// When the logic doesn’t need to be reused elsewhere

// 🔍 Example:
// const [count, setCount] = useState(0);
// 🛠️ Custom Hooks
// Custom hooks are functions that start with use and encapsulate reusable logic using built-in hooks.

// ✅ Why use them?
// Code Reuse: Extract repeating logic into a reusable hook

// Separation of Concerns: Isolate logic from UI

// Cleaner Components: Move logic out of JSX

// Testability: Logic can be unit-tested separately

// ✅ When to use:
// Repeated useEffect or useState patterns across multiple components

// Encapsulating complex behavior (e.g., form handling, WebSocket connection, debouncing)

// Wrapping third-party logic (like react-query, redux, etc.)

// 🔍 Example: Debounced Search Hook
// // useDebouncedValue.ts
// import { useEffect, useState } from "react";

// export const useDebouncedValue = <T>(value: T, delay = 500): T => {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const timeout = setTimeout(() => setDebouncedValue(value), delay);
//     return () => clearTimeout(timeout);
//   }, [value, delay]);

//   return debouncedValue;
// };

// // Inside a component
// const debouncedSearch = useDebouncedValue(searchInput, 300);
// 🧠 Key Differences
// Feature	Built-in Hooks	Custom Hooks
// Provided by React	✅ Yes	❌ No, you define them
// Reusability	❌ Not reusable as-is	✅ Highly reusable
// Encapsulation	❌ No abstraction	✅ Encapsulates logic
// Naming	Fixed names	Must start with use

// 💬 Interview Tip
// "I use built-in hooks for simple local concerns. When logic becomes repetitive, complex, or needs reuse across components, I abstract it into a custom hook for better readability and separation of concerns."