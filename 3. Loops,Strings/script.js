// JavaScript: Loops and Strings
// ----------------------------------------
// A practical walkthrough of all major loop types and string operations in JS.

// 1) for loop — known iteration count
console.log("=== for loop ===");
for (let i = 0; i <= 5; i++) {
  console.log("hello world", i);
}

// Example: using break and continue
console.log("\n=== for loop with break & continue ===");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue; // skip even numbers
  if (i > 7) break;          // stop entirely when i > 7
  console.log(i);            // prints 1, 3, 5, 7
}

// 2) while loop — unknown iteration count
console.log("\n=== while loop ===");
let n = 3;
while (n > 0) {
  console.log("n is", n);
  n--; // update inside
}

// 3) do...while loop — executes at least once
console.log("\n=== do...while loop ===");
let counter = 0;
do {
  console.log("Run number:", counter + 1);
  counter++;
} while (Math.random() < 0.2);

// 4) for...of loop — iterates over iterable values
console.log("\n=== for...of loop ===");
const str = "abc";
for (const ch of str) {
  console.log(ch);
}

const nums = [10, 20, 30];
for (const value of nums) {
  console.log(value);
}

// with index and value
console.log("\n=== for...of with entries() ===");
for (const [index, value] of nums.entries()) {
  console.log(index, value);
}

// 5) for...in loop — iterates over object keys
console.log("\n=== for...in loop ===");
const student = { name: "Alex", age: 20, grade: "A" };
for (const key in student) {
  console.log("key =", key, "value =", student[key]);
}

// 6) break and continue demonstration
console.log("\n=== break and continue ===");
while (true) {
  const x = Math.random();
  if (x > 0.9) {
    console.log("Random value reached > 0.9:", x);
    break;
  }
}

// continue example
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  console.log(i);
}

// 7) Strings: creation and properties
console.log("\n=== Strings ===");
let name1 = "Abhilash Kaluwala";
let name2 = 'Abhilash Kaluwala';
let name3 = `Abhilash Kaluwala`;
console.log(name1, name2, name3);
console.log("Length:", name1.length);
console.log("First:", name1[0]);
console.log("Last:", name1[name1.length - 1]);

// 8) Template literals and interpolation
console.log("\n=== Template literals ===");
const obj = { item: "pen", price: 20 };
const output = `The item is a ${obj.item} and its price is ${obj.price}.`;
console.log(output);

const multi = `Line 1
Line 2`;
console.log(multi);

// 9) Common string methods
console.log("\n=== String methods ===");
const s = "  Hello, World!  ";
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.trim());
console.log(s.slice(2, 7));
console.log(s.slice(-6));
console.log("Hello".concat(" ", "JS"));
console.log("Hello JS".replace("JS", "World"));
console.log("aaa".replaceAll("a", "b"));
console.log("Hello JS".charAt(1));
console.log("Hello JS".includes("JS"));
console.log("Hello JS".indexOf("o"));
console.log("Hello JS".startsWith("He"));
console.log("Hello JS".endsWith("JS"));
console.log("one,two,three".split(","));
console.log(["a", "b", "c"].join("-"));
console.log("5".padStart(3, "0"));
console.log("5".padEnd(3, "0"));

// 10) Practical examples
console.log("\n=== Practical examples ===");

// Count vowels in a string
function countVowels(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  for (const ch of str.toLowerCase()) {
    if (vowels.has(ch)) count++;
  }
  return count;
}
console.log("Vowels in 'Abhilash':", countVowels("Abhilash"));

// Reverse a string
function reverseStr(str) {
  let out = "";
  for (let i = str.length - 1; i >= 0; i--) {
    out += str[i];
  }
  return out;
}
console.log("Reverse of 'JavaScript':", reverseStr("JavaScript"));

// Title case a sentence
function toTitleCase(str) {
  return str
    .trim()
    .split(/\s+/)
    .map(w => w[0] ? w[0].toUpperCase() + w.slice(1).toLowerCase() : "")
    .join(" ");
}
console.log("Title case:", toTitleCase("hello from javascript world"));
