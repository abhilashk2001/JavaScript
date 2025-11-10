# JavaScript: Operators and Conditional Statements

> A clear, example-driven guide that expands your bullet points into practical notes you can review and reuse.

---

## 1) Comments

- **Single-line**
```js
// This is a single line comment
Multi-line

/*
  This is a
  multi-line comment
*/

2) Arithmetic Operators
Operator	Description	Example	Result
+	Addition	2 + 3	5
-	Subtraction	7 - 4	3
*	Multiplication	6 * 5	30
/	Division	10 / 4	2.5
%	Modulus (remainder)	10 % 4	2
**	Exponentiation	2 ** 3	8
++	Increment	x++	x + 1
--	Decrement	--x	x - 1

Use x += 1 for clarity when learning.

3) Assignment Operators
Operator	Example	Equivalent to
=	x = 5	Assign value
+=	x += 2	x = x + 2
-=	x -= 3	x = x - 3
*=	x *= 4	x = x * 4
/=	x /= 5	x = x / 5
%=	x %= 6	x = x % 6
**=	x **= 2	x = x ** 2

Example:

let total = 10;
total += 5;  // 15
total *= 2;  // 30
total %= 7;  // 2

4) Comparison Operators
Operator	Description	Example	Result
==	Equal (loose)	5 == "5"	true
!=	Not equal (loose)	5 != "5"	false
===	Strict equal	5 === "5"	false
!==	Strict not equal	5 !== "5"	true
>	Greater than	10 > 8	true
>=	Greater or equal	10 >= 10	true
<	Less than	3 < 2	false
<=	Less or equal	3 <= 3	true

Prefer === and !== to avoid unwanted type coercion.

5) Logical Operators
Operator	Description	Example	Result
&&	AND	true && false	false
||	OR	true || false	true
!	NOT	!true	false

Short-circuit behavior:

A && B → returns A if falsy, else B.

A || B → returns A if truthy, else B.

6) If, Else If, Else
if (condition) {
  // runs if condition is true
} else if (otherCondition) {
  // runs if previous is false but this is true
} else {
  // runs if all are false
}


Example:

if (score >= 90) grade = "A";
else if (score >= 80) grade = "B";
else if (score >= 70) grade = "C";
else grade = "D";


Guard pattern:

if (!user) {
  console.log("No user found");
}

7) Ternary Operator

Compact if-else.

const price = isMember ? 10 : 15;
const status = score >= 60 ? "Pass" : "Fail";


Avoid nested ternaries when readability is poor.

8) Switch Statement
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


Notes:

Use break to stop fall-through.

default handles unmatched cases.

9) Truthy and Falsy

Falsy values:

false, 0, -0, 0n, "", null, undefined, NaN


Everything else (like "0", [], {}) is truthy.

if ("") { /* won’t run */ }
if ("0") { /* runs: truthy */ }

10) Practice Snippets
// Even or Odd
function isEven(n) {
  return n % 2 === 0;
}

// Max of Two Numbers
function max(a, b) {
  return a > b ? a : b;
}

// Grade using If...Else If
function gradeOf(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  return "F";
}


End of Notes