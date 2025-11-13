// =============================
// JavaScript: Arrays (Lecture Script)
// =============================

// 1) What is an array?
console.log("=== Array Creation ===");

let marks = [96, 85, 76, 40];
let info = ["rahul", 86, "science"]; 
let emptyArr = [];
emptyArr.push(10, 20);

console.log(marks, info, emptyArr);


// 2) Reading and writing by index
console.log("\n=== Indexing ===");

let nums = [97, 87, 56, 90];
console.log(nums[0]);                 // 97
nums[1] = 86;                         // mutate
console.log(nums[1]);                 // 86
console.log(nums.length);             // 4
console.log(nums[nums.length - 1]);   // 90


// 3) Looping over arrays
console.log("\n=== Looping over arrays ===");

console.log("Classic for:");
for (let i = 0; i < nums.length; i++) {
  console.log(i, nums[i]);
}

console.log("for...of:");
for (const value of nums) {
  console.log(value);
}

console.log("forEach:");
nums.forEach((value, index) => {
  console.log(index, value);
});


// 4) Core mutating methods
console.log("\n=== Mutating Methods ===");

let a = [1, 2, 3];
a.push(4);        
a.pop();          
a.unshift(0);     
a.shift();        

console.log("After push/pop/unshift/shift:", a);

// splice examples
let removed = a.splice(1, 1);  
console.log("Removed:", removed, "Array now:", a);

a.splice(1, 0, 2);            
console.log("Insert:", a);

a.splice(1, 1, 20);            
console.log("Replace:", a);


// 5) Non-mutating methods
console.log("\n=== Non-mutating Methods ===");

let b = [10, 20, 30, 40];
console.log(b.slice(1, 3));          // [20,30]
console.log([1,2].concat([3,4]));    // [1,2,3,4]
console.log(["a","b","c"].join("-")); // "a-b-c"
console.log([10,20,30].at(-1));       // 30
console.log([1,[2,[3]]].flat(2));     // [1,2,3]


// 6) Searching and checking
console.log("\n=== Searching & Checking ===");

let c = [5, 12, 8, 130, 44];
console.log(c.includes(12));                   
console.log(c.indexOf(8));                    
console.log(c.find(n => n > 100));            
console.log(c.findIndex(n => n % 2 === 0));   
console.log(c.some(n => n < 0));              
console.log(c.every(n => n > 0));             


// 7) Transforming arrays
console.log("\n=== Transforming arrays (map, filter, reduce) ===");

const d = [1, 2, 3, 4];

const doubled = d.map(x => x * 2);
console.log("Doubled:", doubled);

const evens = d.filter(x => x % 2 === 0);
console.log("Evens:", evens);

const sum = d.reduce((acc, x) => acc + x, 0);
console.log("Sum:", sum);

// reduce for grouping
const users = [
  { id: 1, role: 'admin' },
  { id: 2, role: 'user' },
  { id: 3, role: 'user' }
];

const grouped = users.reduce((acc, u) => {
  (acc[u.role] ||= []).push(u);
  return acc;
}, {});

console.log("Grouped:", grouped);


// 8) Sorting and reversing
console.log("\n=== Sorting & Reversing ===");

console.log([10, 2, 5].sort());                 // lexicographic
console.log([10, 2, 5].sort((a, b) => a - b));  // numeric

console.log([1, 2, 3].reverse());

const sortedCopy = [...d].sort((a, b) => a - b);
console.log("Sorted copy:", sortedCopy);


// 9) Copying arrays (shallow)
console.log("\n=== Copying Arrays ===");

const arr1 = [1, 2, 3];
const copy1 = arr1.slice();
const copy2 = [...arr1];
const copy3 = Array.from(arr1);

console.log(copy1, copy2, copy3);


// 10) Destructuring and rest
console.log("\n=== Destructuring ===");

const user = ["rahul", 86, "science"];
const [name, score, subject] = user;
console.log(name, score, subject);

const [first, ...rest] = [1,2,3,4];
console.log(first, rest);


// 11) Practical patterns
console.log("\n=== Practical Patterns ===");

// range
const range = (n) => Array.from({ length: n }, (_, i) => i);
console.log(range(5));   // [0,1,2,3,4]

// remove value
const remove = (arr, value) => arr.filter(x => x !== value);
console.log(remove([1,2,3,2], 2));   // [1,3]

// unique
const unique = (arr) => [...new Set(arr)];
console.log(unique(['a','b','a','c','b']));  // ['a','b','c']


// 12) Common pitfalls (examples)
console.log("\n=== Pitfalls ===");

console.log([10, 2, 5].sort());  // WRONG numeric sorting (string-based)

let sparse = [];
sparse[5] = "hello";  // creates empty slots
console.log("Sparse length:", sparse.length);


// 13) Quick review outputs
console.log("\n=== Review: Done ===");
