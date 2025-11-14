# 5. Functions in JavaScript

## **1. What is a Function?**

A **function** in JavaScript is a reusable block of code designed to perform a specific task.

Instead of writing the same code multiple times, we can wrap it into a function and **invoke (call) it whenever needed**.

Functions help make code:

- Reusable
- Organized
- Easier to maintain
- Easier to debug

---

## **2. Function Structure**

A function is defined using the `function` keyword, followed by:

1. A **name**
2. A pair of parentheses `()` — may contain parameters
3. A pair of curly braces `{}` — contains the code to run

### **Basic Syntax:**

```jsx
// Function definition
function functionName() {
    // do some work
}

// Function with parameters
function functionName(param1, param2) {
    // work using param1 and param2
}

// Function call (invocation)
functionName();

```

### **Function Parameters**

- Parameters act like **local variables** inside the function.
- They have **block scope**, meaning they exist only inside the function.

---

## **3. Arrow Functions**

Arrow functions are a **shorter, cleaner** way of writing functions introduced in ES6.

### **Syntax:**

```jsx
(a, b) => {
    return a * b;
}

```

### **Examples:**

```jsx
const printHello = () => {
    console.log('Hello');
};

const functionName = (param1, param2) => {
    return param1 + param2;
};

```

**Notes:**

- The variable (e.g., `printHello`) **stores the function**.
- Arrow functions do *not* have their own `this` context — useful in callbacks.

---

## **4. Callback Functions**

A **callback function** is a function passed as an argument to another function.

It allows us to run a piece of code *after* another function finishes its work.

Example with `forEach()`:

```jsx
arr.forEach(callbackFunction);

```

### **Example 1:**

```jsx
let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val) {
    console.log(val);
});

```

### **Callback Parameters**

A callback in `forEach()` can receive up to **three parameters**:

```jsx
(value, index, array)

```

### **Example 2:**

```jsx
let cities = ["pune", "delhi", "mumbai"];

cities.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});

```

### **Important Notes**

- `forEach()` works **only on arrays**, not strings.
- `forEach()` is a **Higher-Order Function (HOF)**.

---

## **5. Higher-Order Functions in JavaScript**

A **Higher-Order Function** is any function that:

- Accepts another function as an argument, **or**
- Returns a function

Examples: `forEach()`, `map()`, `filter()`, `reduce()`.

---

## **6. The `map()` Method**

`map()` creates a **new array** by applying some operation to each element of the original array.

### **Syntax:**

```jsx
arr.map(callbackFn(value, index, array));

```

### **Example:**

```jsx
let arr = [1, 2, 3];

let newArr = arr.map((val) => {
    return val * 2;
});

console.log(newArr); // [2, 4, 6]

```

`map()` is used when we want to **transform** each element of an array.

---

## **7. The `filter()` Method**

`filter()` creates a **new array** containing only the elements that satisfy a given condition.

### **Example:**

```jsx
let arr = [1, 2, 3, 4, 5, 6];

let evenNumbers = arr.filter((val) => {
    return val % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6]

```

Use `filter()` when you need to **select** certain values based on a rule.

---

## **8. The `reduce()` Method**

`reduce()` processes all array elements and **reduces** them to a single output value.

### **Syntax:**

```jsx
arr.reduce((result, currVal) => {
    // perform operations
});

```

### **Common Use Case Example: Sum of an Array**

```jsx
let arr = [1, 2, 3, 4];

let sum = arr.reduce((result, currVal) => {
    return result + currVal; // accumulate
}, 0); // initial value for result

console.log(sum); // 10

```

Other uses:

- Finding maximum/minimum
- Counting items
- Flattening arrays
- Building objects