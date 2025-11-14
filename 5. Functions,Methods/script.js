/************************************************
 * FUNCTIONS & METHODS IN JAVASCRIPT
 ***********************************************/

/*************** 1. Basic Function Definition ***************/

// A simple function with no parameters
function greet() {
    console.log("Hello from a basic function!");
}
greet();

// Function with parameters
function add(a, b) {
    return a + b;
}
console.log("Add:", add(5, 10));


/*************** 2. Function Parameters & Scope ***************/

function showMessage(msg) {
    // msg exists only inside this function (block scope)
    console.log("Message:", msg);
}
showMessage("Functions are awesome!");


/*************** 3. Arrow Functions ***************/

// Standard arrow function
const multiply = (a, b) => {
    return a * b;
};
console.log("Multiply:", multiply(4, 6));

// Compact arrow function (implicit return)
const square = num => num * num;
console.log("Square:", square(5));

// Arrow function with no parameters
const printHello = () => {
    console.log("Hello from arrow function!");
};
printHello();


/*************** 4. Callback Functions ***************/

let numbers = [1, 2, 3, 4, 5];

// Using a callback inside forEach()
numbers.forEach(function printValue(value) {
    console.log("Value:", value);
});

// Arrow function as callback
numbers.forEach((value, index, array) => {
    console.log(`Index ${index}:`, value, "Array:", array);
});


/*************** 5. map() Method ***************/

let doubled = numbers.map((val) => {
    return val * 2;
});
console.log("Doubled Array:", doubled);


/*************** 6. filter() Method ***************/

let evenNumbers = numbers.filter((val) => {
    return val % 2 === 0;
});
console.log("Even Numbers:", evenNumbers);


/*************** 7. reduce() Method ***************/

// Sum of array
let sum = numbers.reduce((result, currVal) => {
    return result + currVal;
}, 0);

console.log("Sum using reduce():", sum);

// Maximum value
let maxVal = numbers.reduce((max, curr) => {
    return curr > max ? curr : max;
}, numbers[0]);

console.log("Max using reduce():", maxVal);


/*************** 8. Higher-Order Function Example ***************/

// A function that accepts another function (callback)
function applyOperation(a, b, operationFn) {
    return operationFn(a, b);
}

let result = applyOperation(10, 5, (x, y) => x - y);
console.log("Higher-Order FN Result:", result);

