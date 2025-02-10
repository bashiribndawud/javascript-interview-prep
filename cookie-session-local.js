// Difference Between Cookies, LocalStorage, and SessionStorage in JavaScript
// Feature	     Cookies 🍪	                 LocalStorage 📦	              SessionStorage ⏳
// Data Storage	 Small data (4KB limit)	      Larger data (~5MB)	           Temporary session data (~5MB)
// Data Type	 String only	              String only	                   String only
// Expiration	Can set expiration date	      Never expires 	               Expires when the tab/browser closes
// Access	    Sent with every HTTP request  Only accessible via JavaScript	Only accessible via JavaScript
// Security	    Can be accessed by the server Cannot be accessed by the server	Cannot be accessed by the server
// Use Case	    Authentication (session management, tracking)	Storing user preferences, themes	Temporary session-based data


// When to Use Each Storage Type
// ✔ Cookies – Authentication (e.g., session tracking, login persistence).
// ✔ LocalStorage – Storing user preferences (e.g., theme, language, settings).
// ✔ SessionStorage – Storing temporary data (e.g., form data, session-specific actions).

// Would you like a real-world example of using cookies for authentication? 🚀
