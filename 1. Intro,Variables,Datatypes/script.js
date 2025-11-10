// ---------------------------------------
// JavaScript Fundamentals: Intro, Variables, and Data Types
// ---------------------------------------

// 1) Where and how to run JavaScript
// Try running this file in your browser console or linking it to an HTML file
console.log("✅ JavaScript is running successfully!");

// Example HTML link reference:
// <script src="fundamentals.js"></script>

// ---------------------------------------
// 2) Variables and naming conventions
// ---------------------------------------

// JavaScript is dynamically typed — you can assign any value without specifying the type

let userName = "Tony Stark"; // can be changed later
const hero = "Iron Man";     // cannot be reassigned
var legacyVar = "Old Syntax"; // avoid using var in modern JS

// Updating variables
userName = "Peter Parker";
console.log("Updated userName:", userName);

// hero = "Spider-Man"; // ❌ TypeError: assignment to constant variable

// Naming rules & examples
let totalPrice = 99.99;
let isLoggedIn = true;
let _privateValue = 42;
let $balance = 500;

// console.log examples
console.log("Total Price:", totalPrice);
console.log("User Logged In?", isLoggedIn);

// ---------------------------------------
// 3) Data Types in JavaScript
// ---------------------------------------

// --- Primitive Types ---
const name = "Rahul";            // String
const age = 24;                  // Number
const isStudent = true;          // Boolean
let address;                     // Undefined (no value assigned)
const emptyValue = null;         // Null (intentional absence)
const bigNumber = 9007199254740993n; // BigInt
const uniqueId = Symbol("id");   // Symbol (unique identifier)

// typeof checks
console.log(typeof name);       // "string"
console.log(typeof age);        // "number"
console.log(typeof isStudent);  // "boolean"
console.log(typeof address);    // "undefined"
console.log(typeof emptyValue); // "object" (known quirk)
console.log(typeof bigNumber);  // "bigint"
console.log(typeof uniqueId);   // "symbol"

// --- Non-Primitive Type (Object) ---
const student = {
  fullName: "Rahul Kumar",
  age: 24,
  cgpa: 8.2,
  isPass: true,
};

// Accessing object properties
console.log(student.fullName); // Dot notation
console.log(student["age"]);   // Bracket notation

// Updating object property
student.age += 1;
console.log("Updated age:", student.age);

// --- Arrays and Functions ---
const skills = ["JavaScript", "HTML", "CSS"];
console.log("Skills:", skills);
console.log("First skill:", skills[0]);

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Rahul"));

// ---------------------------------------
// 4) Practical Tips
// ---------------------------------------

// Prefer const unless you need to reassign
// Use descriptive names
// Group related info in objects, and use arrays for lists
// Use console.log() and browser DevTools for debugging

console.log("💡 Tip: Prefer const by default, switch to let when reassignment is needed.");
