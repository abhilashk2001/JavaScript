# 2. Operators and conditional statements

### JavaScript: Operators and Conditional Statements

> A clear, example-driven guide that expands your bullet points into practical notes you can review and reuse.
> 

---

### 1) Comments

- Single-line

```jsx
// This is a single line comment
```

- Multi-line

```jsx
/*
  This is a
  multi-line comment
*/
```

---

### 2) Arithmetic operators

- Addition `+`
- Subtraction `-`
- Multiplication `*`
- Division `/`
- Modulus `%` (remainder)
- Exponentiation `**`
- Increment `++`
- Decrement `--`

Examples

```jsx
2 + 3;        // 5
7 - 4;        // 3
6 * 5;        // 30
10 / 4;       // 2.5
10 % 4;       // 2  (remainder)
2 ** 3;       // 8
let x = 5;    // x = 5
x++;          // x = 6 (post-increment)
--x;          // x = 5 (pre-decrement)
```

Notes

- Prefer explicit increments: `x = x + 1` or `x += 1` for clarity when learning.

---

### 3) Assignment operators

- Basic assignment: `=`
- Add and assign: `+=`
- Subtract and assign: `-=`
- Multiply and assign: `*=`
- Divide and assign: `/=`
- Remainder and assign: `%=`
- Exponentiate and assign: `**=`

Examples

```jsx
let total = 10;
total += 5;  // 15
total *= 2;  // 30
total %= 7;  // 2
let pow = 3;
pow **= 3;   // 27
```

---

### 4) Comparison operators

- Equality (loose): `==`
- Inequality (loose): `!=`
- Strict equality: `===`
- Strict inequality: `!==`
- Greater than: `>`
- Greater than or equal to: `>=`
- Less than: `<`
- Less than or equal to: `<=`

Key point: Prefer strict comparisons (`===`, `!==`) to avoid implicit type coercion surprises.

Examples

```jsx
5 == "5";   // true  (coerces string to number)
5 === "5";  // false (different types)
7 !== 8;     // true
10 >= 9;     // true
3 < 2;       // false
```

---

### 5) Logical operators

- AND `&&` → true only if both sides are true
- OR `||` → true if at least one side is true
- NOT `!` → negates a boolean

Examples

```jsx
true && false;   // false
true || false;   // true
!false;          // true

const age = 20;
const hasID = false;
age >= 18 && hasID;  // false
age >= 18 || hasID;  // true
```

Short-circuit behavior

- `A && B` returns `A` if `A` is falsy, otherwise returns `B`.
- `A || B` returns `A` if `A` is truthy, otherwise returns `B`.

---

### 6) If, else if, else

Basic form

```jsx
if (condition) {
  // runs when condition is true
}
```

If…else

```jsx
if (condition) {
  // when true
} else {
  // when false
}
```

If…else if…else

```jsx
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "D";
}
```

Common pattern: guarding

```jsx
if (!user) {
  console.log("No user found");
  // early return in functions is common here
}
```

---

### 7) Ternary operator

- Compact alternative to a simple if…else.
- Syntax: `condition ? valueIfTrue : valueIfFalse`

Examples

```jsx
const isMember = true;
const price = isMember ? 10 : 15; // 10

const status = score >= 60 ? "Pass" : "Fail";
```

Avoid deeply nested ternaries when readability suffers.

---

### 8) Switch statement

Used when you have many discrete branches based on one value.

Syntax

```jsx
switch (fruit) {
  case "apple":
    console.log("Red or green");
    break;
  case "banana":
    console.log("Yellow");
    break;
  default:
    console.log("Unknown fruit");
}
```

Notes

- Always include `break` to prevent fall-through, unless you intentionally want it.
- `default` runs when no case matches.

---

### 9) Truthy and falsy (important for conditionals)

Falsy values: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.

Everything else is truthy, including `[]`, `{}`, and non-empty strings.

Examples

```jsx
if ("") { /* won't run */ }
if ("0") { /* runs: "0" is a non-empty string (truthy) */ }
```

---

### 10) Practice snippets

```jsx
// Even or odd using modulus
function isEven(n) {
  return n % 2 === 0;
}

// Max of two numbers using ternary
function max(a, b) {
  return a > b ? a : b;
}

// Grade using if...else if
function gradeOf(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  return "F";
}
```

---

### Quick review checklist

- [ ]  Can you explain the difference between `==` and `===`?
- [ ]  Can you list the falsy values in JavaScript?
- [ ]  Can you write an `if…else if…else` chain and a `switch` for the same logic?
- [ ]  Can you refactor a simple `if…else` into a ternary?

All set. I expanded your bullet points on “Operators and conditional statements” into clear, example-driven notes with:

- Structured sections for comments, arithmetic, assignment, comparison, and logical operators
- Clean patterns for if/else, ternary, and switch
- A truthy/falsy reference
- Practice snippets and a quick review checklist

If you want, I can add:

- A mini quiz with answers
- More practice problems with step-by-step solutions
- A one-page cheat sheet summary at the top