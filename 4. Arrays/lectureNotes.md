# 3. Arrays in JavaScript

### JavaScript: Arrays

> Expanded, example-driven notes covering creation, indexing, iteration, common methods, mutability, copying, and gotchas.
> 

---

### 1) What is an array?

- An array is an ordered list of items stored under numeric indices starting at 0.
- Arrays are a kind of object optimized for ordered data and iteration.

Examples

```jsx
// Creating arrays
let marks = [96, 85, 76, 40];
let info = ["rahul", 86, "science"]; // Mixed types work, but prefer consistent types when possible

// Empty array, then push
let arr = [];
arr.push(10, 20);
```

---

### 2) Reading and writing by index

```jsx
let nums = [97, 87, 56, 90];
console.log(nums[0]);   // 97
nums[1] = 86;           // mutate element at index 1
console.log(nums.length); // 4
console.log(nums[nums.length - 1]); // last element
```

Notes

- If you assign beyond current length, the array becomes sparse and fills gaps with empty slots.

---

### 3) Looping over arrays

Classic for

```jsx
for (let i = 0; i < nums.length; i++) {
  console.log(i, nums[i]);
}
```

for...of (values)

```jsx
for (const value of nums) {
  console.log(value);
}
```

forEach (callback)

```jsx
nums.forEach((value, index) => {
  console.log(index, value);
});
```

Avoid for...in for arrays (it iterates keys and can include inherited properties).

---

### 4) Core mutating methods (change the original array)

- push(...items): add to end, returns new length
- pop(): remove from end, returns removed item
- unshift(...items): add to start
- shift(): remove from start
- splice(start, deleteCount, ...items): remove/insert/replace in-place

Examples

```jsx
let a = [1, 2, 3];
a.push(4);        // [1,2,3,4]
a.pop();          // [1,2,3]
a.unshift(0);     // [0,1,2,3]
a.shift();        // [1,2,3]

// splice: remove 1 item at index 1
const removed = a.splice(1, 1); // removed = [2], a = [1,3]

// splice: insert without delete
a.splice(1, 0, 2);  // a = [1,2,3]

// splice: replace
a.splice(1, 1, 20); // a = [1,20,3]
```

---

### 5) Non-mutating methods (return new arrays/values)

- slice(start, end): returns a shallow copy of a portion. End is exclusive. Supports negative indices.
- concat(...arrays): returns a new array with items appended.
- toString() / join(sep?): string representations. `join` lets you pick a separator.
- at(index): safe indexing from start or end (`-1` is last element).
- flat(depth = 1): flattens nested arrays.

Examples

```jsx
let b = [10, 20, 30, 40];
b.slice(1, 3);   // [20,30]
[1,2].concat([3,4]);  // [1,2,3,4]
["a","b","c"].join("-"); // 'a-b-c'
[10,20,30].at(-1); // 30
[1,[2,[3]]].flat(2); // [1,2,3]
```

---

### 6) Searching and checking

- includes(value): boolean contains check
- indexOf(value) / lastIndexOf(value)
- find(predicate): first matching element or undefined
- findIndex(predicate): index of first match or -1
- some(predicate): true if any matches
- every(predicate): true if all match

Examples

```jsx
let c = [5, 12, 8, 130, 44];
c.includes(12);                 // true
c.indexOf(8);                   // 2
c.find(n => n > 100);           // 130
c.findIndex(n => n % 2 === 0);  // 1
c.some(n => n < 0);             // false
c.every(n => n > 0);            // true
```

---

### 7) Transforming arrays

- map(callback): transform each element into a new array
- filter(callback): keep elements where predicate is true
- reduce(callback, initial): fold array into a single value

Examples

```jsx
const d = [1, 2, 3, 4];
const doubled = [d.map](http://d.map)(x => x * 2);          // [2,4,6,8]
const evens = d.filter(x => x % 2 === 0);   // [2,4]
const sum = d.reduce((acc, x) => acc + x, 0); // 10

// reduce for objects or grouping
const users = [
  { id: 1, role: 'admin' },
  { id: 2, role: 'user' },
  { id: 3, role: 'user' },
];
const grouped = users.reduce((acc, u) => {
  (acc[u.role] ||= []).push(u);
  return acc;
}, {});
// grouped = { admin: [{id:1,role:'admin'}], user: [{id:2,...},{id:3,...}] }
```

---

### 8) Sorting and reversing

- sort(compareFn?): sorts in-place as strings by default
- reverse(): reverses in-place

Examples and gotcha

```jsx
[10, 2, 5].sort();        // [10,2,5] → as strings, '10' < '2'
[10, 2, 5].sort((a, b) => a - b); // [2,5,10]
[1, 2, 3].reverse();      // [3,2,1]
```

Tip: Use a copy if you don’t want to mutate the original:

```jsx
const sorted = [...d].sort((a,b) => a - b);
```

---

### 9) Copying arrays (shallow)

- slice() with no args: `const copy = arr.slice()`
- spread syntax: `const copy = [...arr]`
- Array.from(arrLike): from array-like or iterable

Note: Shallow copy copies element references, not deep clones. Nested objects remain shared.

---

### 10) Destructuring and rest

```jsx
const user = ["rahul", 86, "science"];
const [name, score, subject] = user; // destructure by position

// Rest
const [first, ...rest] = [1,2,3,4]; // first=1, rest=[2,3,4]
```

---

### 11) Practical patterns

- Generate ranges

```jsx
const range = (n) => Array.from({ length: n }, (_, i) => i); // [0..n-1]
```

- Remove by value

```jsx
const remove = (arr, value) => arr.filter(x => x !== value);
```

- Unique values

```jsx
const unique = (arr) => [...new Set(arr)];
```

---

### 12) Common pitfalls

- sort() without a comparator sorts as strings.
- splice() mutates the original; slice() does not.
- for...in on arrays can yield unexpected keys. Prefer for, for...of, or array methods.
- Assigning beyond length makes a sparse array with empty slots.

---

### 13) Quick review checklist

- [ ]  Do you know which methods mutate vs which don’t?
- [ ]  Can you iterate via for, for...of, and forEach?
- [ ]  Can you search with find / some / every and know when to use each?
- [ ]  Can you sort numerically with a comparator function?
- [ ]  Can you copy an array without mutating the original?

---

### 14) Practice

1) Given `[3, 1, 4, 1, 5, 9]`, create a sorted array ascending without changing the original.

2) From `['a','b','a','c','b']`, produce `['a','b','c']`.

3) Write `max(arr)` using `reduce`.

4) Given `[{id:1},{id:2},{id:3}]`, get the array of ids.

5) Write `chunk(arr, size)` that splits an array into subarrays of length `size`.

Done. I turned your “Arrays in JavaScript” bullet points into clear, example-driven notes with:

- Creation, indexing, and iteration patterns
- Mutating vs non-mutating methods
- Searching, transforming, sorting, and copying
- Destructuring, practical patterns, pitfalls
- A review checklist and practice tasks

Want me to add a mini quiz with answers, or a one-page cheat sheet at the top?