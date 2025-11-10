// --------------------------------------------
// JavaScript: Operators and Conditional Statements
// --------------------------------------------

// 1) Comments
// This is a single-line comment

/*
  This is a
  multi-line comment
*/

// --------------------------------------------
// 2) Arithmetic Operators
// --------------------------------------------
let a = 10;
let b = 3;

console.log("Addition:", a + b);       // 13
console.log("Subtraction:", a - b);    // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b);       // 3.333...
console.log("Modulus:", a % b);        // 1
console.log("Exponentiation:", 2 ** 4); // 16

let count = 5;
count++; // Post-increment
console.log("After count++:", count); // 6
--count;  // Pre-decrement
console.log("After --count:", count); // 5

// --------------------------------------------
// 3) Assignment Operators
// --------------------------------------------
let total = 10;
total += 5;  // 15
total *= 2;  // 30
total %= 7;  // 2
console.log("Total after multiple operations:", total);

let pow = 3;
pow **= 3;   // 27
console.log("Exponentiate and assign:", pow);

// --------------------------------------------
// 4) Comparison Operators
// --------------------------------------------
console.log(5 == "5");   // true (loose equality)
console.log(5 === "5");  // false (strict equality)
console.log(7 !== 8);    // true
console.log(10 >= 9);    // true
console.log(3 < 2);      // false

// Prefer === and !== for type safety
let num = "10";
if (num === 10) {
  console.log("Strictly equal");
} else {
  console.log("Not strictly equal (different type)");
}

// --------------------------------------------
// 5) Logical Operators
// --------------------------------------------
const age = 20;
const hasID = false;

console.log("AND:", age >= 18 && hasID); // false
console.log("OR:", age >= 18 || hasID);  // true
console.log("NOT:", !hasID);             // true

// Short-circuit examples
console.log(false && "Hello"); // false (first falsy)
console.log(true || "World");  // true (first truthy)

// --------------------------------------------
// 6) If, else if, else
// --------------------------------------------
let score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "D";
}

console.log("Grade:", grade);

// Guarding pattern
let user = null;
if (!user) {
  console.log("No user found");
}

// --------------------------------------------
// 7) Ternary Operator
// --------------------------------------------
const isMember = true;
const price = isMember ? 10 : 15;
console.log("Ticket Price:", price);

const passStatus = score >= 60 ? "Pass" : "Fail";
console.log("Pass Status:", passStatus);

// --------------------------------------------
// 8) Switch Statement
// --------------------------------------------
const fruit = "banana";

switch (fruit) {
  case "apple":
    console.log("Apples can be red or green.");
    break;
  case "banana":
    console.log("Bananas are yellow.");
    break;
  default:
    console.log("Unknown fruit.");
}

// --------------------------------------------
// 9) Truthy and Falsy Values
// --------------------------------------------
const falsyValues = [false, 0, "", null, undefined, NaN];

falsyValues.forEach((val) => {
  if (val) {
    console.log(val, "is truthy");
  } else {
    console.log(val, "is falsy");
  }
});

// Example
if ("") console.log("Empty string runs");
if ("0") console.log('"0" runs because it is truthy');

// --------------------------------------------
// 10) Practice Snippets
// --------------------------------------------

// Even or Odd
function isEven(n) {
  return n % 2 === 0;
}
console.log("Is 4 even?", isEven(4));
console.log("Is 7 even?", isEven(7));

// Max of two numbers
function max(a, b) {
  return a > b ? a : b;
}
console.log("Max of 5 and 8:", max(5, 8));

// Grade using if...else if
function gradeOf(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  return "F";
}
console.log("Grade of 72:", gradeOf(72));
