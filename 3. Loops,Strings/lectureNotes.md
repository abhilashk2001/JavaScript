# 3. Loops and Strings

### JavaScript: Loops and Strings

> An expanded, example-driven guide based on your bullet points. Includes syntax, practical tips, pitfalls, and practice.
> 

---

### 1) Loops overview

Use loops to repeat actions until a condition is met. Choose the loop that best matches how you know your start, stop, and update rules.

---

### 2) for loop

Best when you know the exact number of iterations or have a clear counter.

```jsx
for (let i = 0; i <= 5; i++) { // initialize; stopping condition; update
  console.log('hello world', i);
}
```

Notes

- Initialization runs once at the start.
- Condition is checked before each iteration.
- Update runs after each iteration.
- Use `break` to exit early and `continue` to skip to the next iteration.

Example with continue and break

```jsx
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue; // skip even numbers
  if (i > 7) break;          // stop entirely when i is 8
  console.log(i);            // 1, 3, 5, 7
}
```

---

### 3) while loop

Best when the number of iterations is unknown and you loop until a condition changes.

```jsx
let n = 3;
while (n > 0) {  // condition checked first
  console.log('n is', n);
  n--;           // update inside the loop
}
```

Pitfall

- If the condition never becomes false, you create an infinite loop. Always ensure your update can end the loop.

---

### 4) do...while loop

Runs the body at least once, then checks the condition.

```jsx
do {
  console.log('Runs at least once');
} while (Math.random() < 0.2);
```

Use when you need the loop body to execute before the first condition check.

---

### 5) for...of loop

Iterates over the values of an iterable, such as strings and arrays.

```jsx
const str = 'abc';
for (const ch of str) {
  console.log(ch); // a, b, c
}

const nums = [10, 20, 30];
for (const value of nums) {
  console.log(value);
}
```

Notes

- for...of gives values, not indices. To get indices for arrays, use `array.entries()`:

```jsx
for (const [index, value] of nums.entries()) {
  console.log(index, value);
}
```

---

### 6) for...in loop

Iterates over enumerable keys of an object. Best for plain objects.

```jsx
const student = { name: 'Alex', age: 20 };
for (const key in student) {
  console.log('key =', key, 'value =', student[key]);
}
```

Notes and caveats

- for...in returns keys. Order is not guaranteed.
- Avoid for...in on arrays. Use `for`, `for...of`, or array methods like `forEach` instead.

---

### 7) break and continue (all loop types)

```jsx
// break: leave the loop entirely
while (true) {
  const x = Math.random();
  if (x > 0.9) break;
}

// continue: skip the rest of the current iteration
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  console.log(i);        // 1, 2, 4, 5
}
```

---

### 8) Strings

Strings are sequences of UTF-16 code units used to represent text.

```jsx
// create
let name1 = "Abhilash Kaluwala";  // double quotes
let name2 = 'Abhilash Kaluwala';   // single quotes
let name3 = `Abhilash Kaluwala`;   // backticks (template literal)

// length and indexing
name1.length;     // number of code units
name1[0];         // first character
name1[name1.length - 1]; // last character
```

Key facts

- Strings are immutable. Methods return new strings and do not modify the original.
- Indexing returns a string of length 1 or `undefined` if out of range.

---

### 9) Template literals and interpolation

Use backticks to embed expressions and write multi-line strings.

```jsx
const obj = { item: 'pen', price: 20 };
const output = `The item is a ${obj.item} and its price is ${obj.price}.`;
console.log(output);

const multi = `Line 1
Line 2`;
```

Escapes inside regular strings

- `\n` new line
- `\t` tab
- `\'` single quote, `\"` double quote, `\\` backslash

---

### 10) Common string methods

Remember: these return new strings or values and do not change the original.

```jsx
const s = '  Hello, World!  ';

s.toUpperCase();           // '  HELLO, WORLD!  '
s.toLowerCase();           // '  hello, world!  '
s.trim();                  // 'Hello, World!'

s.slice(2, 7);             // 'Hello' (start inclusive, end exclusive)
s.slice(-6);               // 'World!'

'Hello'.concat(' ', 'JS'); // 'Hello JS'
'Hello JS'.replace('JS', 'World');   // 'Hello World'
'aaa'.replaceAll('a', 'b');          // 'bbb'

'Hello JS'.charAt(1);      // 'e'
'Hello JS'[1];             // 'e'

'Hello JS'.includes('JS'); // true
'Hello JS'.indexOf('o');   // 4
'Hello JS'.startsWith('He'); // true
'Hello JS'.endsWith('JS');   // true

'one,two,three'.split(','); // ['one','two','three']
['a','b','c'].join('-');     // 'a-b-c'

'5'.padStart(3, '0');       // '005'
'5'.padEnd(3, '0');         // '500'
```

Notes

- `slice(start, end)` does not include `end` and supports negative indices.
- `replace` changes only the first match (unless using a regex with global flag). Use `replaceAll` for all matches.

---

### 11) Practical examples combining loops and strings

Count vowels in a string

```jsx
function countVowels(str) {
  const vowels = new Set(['a','e','i','o','u']);
  let count = 0;
  for (const ch of str.toLowerCase()) {
    if (vowels.has(ch)) count++;
  }
  return count;
}
```

Reverse a string (simple approach)

```jsx
function reverseStr(str) {
  let out = '';
  for (let i = str.length - 1; i >= 0; i--) {
    out += str[i];
  }
  return out;
}
// or: return str.split('').reverse().join('');
```

Title-case words

```jsx
function toTitleCase(str) {
  return str
    .trim()
    .split(/\s+/)
    .map(w => w[0] ? w[0].toUpperCase() + w.slice(1).toLowerCase() : '')
    .join(' ');
}
```

---

### 12) Quick review checklist

- [ ]  Can you choose the right loop: `for`, `while`, `do...while`, `for...of`, `for...in`?
- [ ]  Can you explain when to use `break` vs `continue`?
- [ ]  Can you iterate characters in a string with `for...of`?
- [ ]  Can you perform common string tasks: trim, slice, replace, includes, split, join?
- [ ]  Do you remember that strings are immutable?

---

### 13) Practice

1) Write a loop that prints all numbers from 1 to 100, but skips multiples of 3.

2) Given `const arr = ['foo','bar','baz']`, log each index and value.

3) Create a function `isPalindrome(str)` that returns true for strings like `"level"`.

4) Using a `for...in` loop, print keys and values of `{a:1, b:2, c:3}`.

5) Use template literals to output: `Hello, Alice! You have 3 new messages.` given `name='Alice', count=3`.

Done. I expanded your “Loops and Strings” bullet points into clear, well-structured notes with:

- Explanations and examples for for, while, do…while, for…of, for…in
- Break vs continue patterns and common pitfalls
- String basics, template literals, escapes, and a rich set of string methods
- Practical examples, a review checklist, and practice tasks

Want me to add a mini quiz with answers, or a one-page cheat sheet summary at the top?