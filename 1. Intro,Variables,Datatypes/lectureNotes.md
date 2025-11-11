# 1. JavaScript Fundamentals: Intro, Variables, and Data Types

### JavaScript Fundamentals: Intro, Variables, and Data Types

> JavaScript is the programming language of the web. These notes expand your bullet points into a clear, structured reference you can revisit.
> 

---

### 1) Where and how to run JavaScript

- In the browser console
    - Open DevTools and use the Console tab to run small snippets.
    - Great for trying out ideas and inspecting values with `console.log()`.
- In a code editor (like VS Code)
    - Save files with the `.js` extension.
    - Typically you’ll link your `.js` file to an HTML file so it runs in the browser.

### Linking a JS file to HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello</h1>
    <script src="app.js"></script>
  </body>
</html>
```

- The `<script src="app.js"></script>` tag loads and runs your JavaScript.
- Put scripts at the end of `<body>` (or use `defer` in `<head>`) so HTML loads first.

### Printing to the console

```jsx
console.log("message"); // prints to the browser console
```

---

### 2) Variables and naming conventions

- JavaScript is dynamically typed
    - You do not declare a variable’s type up front; the type is determined by the assigned value at runtime.
- Naming rules
    - Case sensitive: `totalPrice` and `totalprice` are different.
    - Cannot contain spaces or `@` and most punctuation. `$` and `_` are allowed.
    - Must start with a letter, `_`, or `$`.
    - Cannot use reserved keywords like `for`, `class`, `return`.
    - Convention: use camelCase for variables and functions, e.g., `fullName`, `isFollow`, `totalPrice`.

### Declaring variables: `let`, `const`, and `var`

- `let`
    - Block-scoped.
    - Can be updated, cannot be redeclared in the same scope.
    - Use for values that will change.
- `const`
    - Block-scoped.
    - Cannot be reassigned or redeclared.
    - Use by default for values that should not change.
    - Conventionally written in camelCase; UPPERCASE is often used for true constants.
- `var`
    - Function-scoped (or global if declared outside any function).
    - Can be updated and redeclared.
    - Avoid in modern code due to hoisting quirks and broader scope.

Examples

```jsx
let count = 1;
count = 2; // OK

const API_URL = "[https://api.example.com](https://api.example.com)";
// API_URL = "other"; // ❌ TypeError: assignment to constant variable

var legacy = 10; // Avoid in modern code
```

---

### 3) Data types in JavaScript

JavaScript has primitive and non-primitive (reference) types.

### Primitive types

- String: text values
    - Examples: `"Tony Stark"`, `'Hello'`,  `Template ${value}`
- Number: integers and floating-point numbers
    - Examples: `24`, `99.99`, `NaN`, `Infinity`
- Boolean: `true` or `false`
- Undefined: declared but not assigned a value
- Null: intentional absence of any value
- BigInt: integers beyond Number’s safe range, created with `n` suffix
    - Example: `9007199254740993n`
- Symbol: unique and immutable identifiers, often for object keys

Type checking with `typeof`

```jsx
typeof "abc";      // "string"
typeof 42;         // "number"
typeof true;       // "boolean"
typeof undefined;  // "undefined"
typeof null;       // "object" (historic quirk)
typeof 10n;        // "bigint"
typeof Symbol();   // "symbol"
```

### Non-primitive type

- Object: a collection of key–value pairs. Arrays, functions, and dates are specialized objects.

Example object

```jsx
const student = {
  fullName: "Rahul Kumar",
  age: 24,
  cgpa: 8.2,
  isPass: true,
};

student.age = student.age + 1; // update a property
console.log(student.fullName); // access a property
```

Access patterns

- Dot notation: `student.age`
- Bracket notation: `student["age"]` or `student[key]` when key is dynamic

Arrays and functions as objects

```jsx
const skills = ["JS", "HTML", "CSS"]; // Array object
function greet(name) {                    // Function object
  return `Hello, ${name}`;
}
```

---

### 4) Practical tips

- Prefer `const` by default. Switch to `let` when reassignment is required.
- Use meaningful names: `totalPrice`, `isAuthenticated`, `userId`.
- Keep related data together in objects. Use arrays for ordered lists.
- Rely on the console for quick feedback while learning: `console.log()` and DevTools.

---

### 5) Quick review checklist

- [x]  Can you link a JS file to an HTML page and see console output?
- [x]  Do you know when to use `const` vs `let` vs `var`?
- [x]  Can you name all 7 primitive types?
- [x]  Can you create and update an object and read its properties?