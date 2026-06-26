// ============================================================================
// Loops in TypeScript
// Complete Guide: Basic to Advanced
// File Name: test.ts
// ============================================================================

// A loop repeatedly executes a block of code as long as a condition is true.
//
// Types of Loops in TypeScript:
//
// 1.  for           - Runs a fixed number of times
// 2.  while         - Runs while a condition is true
// 3.  do...while    - Runs at least once, then checks condition
// 4.  for...of      - Iterates over iterable values (arrays, strings, etc.)
// 5.  for...in      - Iterates over object keys
//
// Important:
// 1. Always ensure the loop has an exit condition to avoid infinite loops.
// 2. Use break to exit early, continue to skip an iteration.
// 3. Choose the loop type based on the data structure and use case.

// ============================================================================
// Example 1: Basic for Loop
// ============================================================================

// Syntax:
// for (initialization; condition; increment/decrement) {
//     // code
// }
//
// - initialization : runs once before the loop starts
// - condition      : checked before every iteration; loop stops when false
// - increment      : runs after every iteration

console.log("\nExample 1: Basic for Loop");

for (let i: number = 1; i <= 5; i++) {
    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5

// ============================================================================
// Example 2: for Loop in Reverse (Decrement)
// ============================================================================

// Starting from a high value and decrementing with i--
// Loop stops when i reaches 0 (condition i > 0 becomes false)

console.log("\nExample 2: for Loop in Reverse");

for (let i: number = 5; i > 0; i--) {
    console.log(i);
}

// Output:
// 5
// 4
// 3
// 2
// 1

// ============================================================================
// Example 3: while Loop
// ============================================================================

// Syntax:
// while (condition) {
//     // code
// }
//
// - Checks the condition BEFORE each iteration.
// - If the condition is false from the start, the body never executes.

console.log("\nExample 3: while Loop");

let count: number = 1;

while (count <= 5) {
    console.log(count);
    count++;
}

// Output:
// 1
// 2
// 3
// 4
// 5

// ============================================================================
// Example 4: do...while Loop
// ============================================================================

// Syntax:
// do {
//     // code
// } while (condition);
//
// - Executes the body FIRST, then checks the condition.
// - Guarantees at least one execution even if the condition is false.

console.log("\nExample 4: do...while Loop");

let num: number = 1;

do {
    console.log(num);
    num++;
} while (num <= 5);

// Output:
// 1
// 2
// 3
// 4
// 5

// ============================================================================
// Example 5: do...while — Runs at Least Once
// ============================================================================

// Even though the condition is false from the start,
// the body executes once before the check happens.

console.log("\nExample 5: do...while Runs at Least Once");

let x: number = 10;

do {
    console.log("Executed once even though condition is false");
} while (x < 5);

// Output:
// Executed once even though condition is false

// ============================================================================
// Example 6: for...of Loop (Array)
// ============================================================================

// Syntax:
// for (const element of iterable) {
//     // code
// }
//
// - Iterates over values of an iterable (arrays, strings, sets, maps).
// - Does NOT give access to the index by default.

console.log("\nExample 6: for...of Loop with Array");

const fruits: string[] = ["Apple", "Banana", "Cherry"];

for (const fruit of fruits) {
    console.log(fruit);
}

// Output:
// Apple
// Banana
// Cherry

// ============================================================================
// Example 7: for...of Loop (String)
// ============================================================================

// Strings are iterable in TypeScript.
// Each character is yielded one at a time.

console.log("\nExample 7: for...of Loop with String");

const word: string = "Hello";

for (const char of word) {
    console.log(char);
}

// Output:
// H
// e
// l
// l
// o

// ============================================================================
// Example 8: for...in Loop (Object Keys)
// ============================================================================

// Syntax:
// for (const key in object) {
//     // code
// }
//
// - Iterates over the KEYS (property names) of an object.
// - Use object[key] to access the corresponding value.

console.log("\nExample 8: for...in Loop with Object");

const person = {
    name: "Alice",
    age: 30,
    city: "Mumbai"
};

for (const key in person) {
    console.log(`${key}: ${person[key as keyof typeof person]}`);
}

// Output:
// name: Alice
// age: 30
// city: Mumbai

// ============================================================================
// Example 9: break Statement
// ============================================================================

// break immediately exits the loop, regardless of the condition.
// Useful when a specific value is found and further iteration is unnecessary.

console.log("\nExample 9: break Statement");

for (let i: number = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking at:", i);
        break;
    }
    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// Breaking at: 5

// ============================================================================
// Example 10: continue Statement
// ============================================================================

// continue skips the rest of the current iteration
// and jumps to the next one.
// Useful for filtering out specific values.

console.log("\nExample 10: continue Statement");

for (let i: number = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // skip 3
    }
    console.log(i);
}

// Output:
// 1
// 2
// 4
// 5

// ============================================================================
// Example 11: Nested for Loop
// ============================================================================

// A loop inside another loop.
// The inner loop completes all its iterations for each
// single iteration of the outer loop.
// Commonly used for 2D data like tables or matrices.

console.log("\nExample 11: Nested for Loop (Multiplication Table)");

for (let i: number = 1; i <= 3; i++) {
    for (let j: number = 1; j <= 3; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// Output:
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9

// ============================================================================
// Example 12: Loop with Array (Summing Elements)
// ============================================================================

// Iterating over an array using a for loop with index access.
// Accumulating a total by adding each element to a running sum.

// ?? 0 — Nullish Coalescing Operator 
// This is a safety net
// It means: "if numbers[i] is null or undefined, use 0 instead"
// Since this array is fully typed as number[], it won't actually be null here, but it's a good defensive habit — especially if the array came from an API or unknown source

console.log("\nExample 12: Summing Array Elements");

const numbers: number[] = [10, 20, 30, 40, 50];
let sum: number = 0;

for (let i: number = 0; i < numbers.length; i++) {
    sum += numbers[i] ?? 0;
}

console.log("Total Sum:", sum);

// Output:
// Total Sum: 150

// ============================================================================
// Example 13: Loop with entries() — Index + Value
// ============================================================================

// Array.entries() returns [index, value] pairs.
// Use destructuring in for...of to get both the index and the value.

console.log("\nExample 13: for...of with entries()");

const colors: string[] = ["Red", "Green", "Blue"];

for (const [index, color] of colors.entries()) {
    console.log(`${index}: ${color}`);
}

// Output:
// 0: Red
// 1: Green
// 2: Blue

// ============================================================================
// Example 14: Looping Over a Map
// ============================================================================

// Map stores key-value pairs.
// for...of on a Map yields [key, value] tuples.
// Destructuring is used to unpack them cleanly.

console.log("\nExample 14: Looping Over a Map");

const scores: Map<string, number> = new Map([
    ["Alice", 95],
    ["Bob", 80],
    ["Charlie", 72]
]);

for (const [name, score] of scores) {
    console.log(`${name}: ${score}`);
}

// Output:
// Alice: 95
// Bob: 80
// Charlie: 72

// ============================================================================
// Example 15: Looping Over a Set
// ============================================================================

// Set stores unique values only.
// for...of on a Set iterates in insertion order.

console.log("\nExample 15: Looping Over a Set");

const uniqueNumbers: Set<number> = new Set([1, 2, 3, 2, 1]);

for (const val of uniqueNumbers) {
    console.log(val);
}

// Output:
// 1
// 2
// 3

// ============================================================================
// Example 16: Loop with Type Guard
// ============================================================================

// A mixed array holds values of different types.
// typeof acts as a type guard inside the loop to safely
// handle each type separately.

console.log("\nExample 16: Loop with Type Guard");

const mixedArray: (string | number)[] = [1, "Hello", 2, "World", 3];

for (const item of mixedArray) {
    if (typeof item === "string") {
        console.log("String:", item.toUpperCase());
    } else {
        console.log("Number:", item * 2);
    }
}

// Output:
// Number: 2
// String: HELLO
// Number: 4
// String: WORLD
// Number: 6

// ============================================================================
// Example 17: Loop Over Array of Objects
// ============================================================================

// Arrays often hold structured objects.
// for...of destructures each object's fields cleanly.

console.log("\nExample 17: Loop Over Array of Objects");

type Student = {
    name: string;
    grade: string;
};

const students: Student[] = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "C" }
];

for (const student of students) {
    console.log(`${student.name} → Grade: ${student.grade}`);
}

// Output:
// Alice → Grade: A
// Bob → Grade: B
// Charlie → Grade: C

// ============================================================================
// Example 18: Infinite Loop with break
// ============================================================================

// while(true) creates an infinite loop that never stops on its own.
// A break statement inside the body provides a controlled exit.
// Useful for prompts, polling, or event loops.

console.log("\nExample 18: Infinite Loop with break");

let attempts: number = 0;

while (true) {
    attempts++;
    console.log("Attempt:", attempts);

    if (attempts === 3) {
        console.log("Reached max attempts. Stopping.");
        break;
    }
}

// Output:
// Attempt: 1
// Attempt: 2
// Attempt: 3
// Reached max attempts. Stopping.

// ============================================================================
// Example 19: Labeled break (Nested Loop Exit)
// ============================================================================

// By default, break only exits the innermost loop.
// A label (outerLoop:) on an outer loop lets break exit
// that specific loop directly, skipping all remaining iterations.

console.log("\nExample 19: Labeled break");

outerLoop: for (let i: number = 1; i <= 3; i++) {
    for (let j: number = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            console.log("Breaking out of outer loop at i=2, j=2");
            break outerLoop; // exits both loops
        }
        console.log(`i=${i}, j=${j}`);
    }
}

// Output:
// i=1, j=1
// i=1, j=2
// i=1, j=3
// i=2, j=1
// Breaking out of outer loop at i=2, j=2

// ============================================================================
// Example 20: Looping with Generics
// ============================================================================

// A generic function works with any array type (T[]).
// The type parameter T is inferred from the argument passed in.
// for...of iterates through each item regardless of its type.

console.log("\nExample 20: Generic Loop Function");

function printAll<T>(items: T[]): void {
    for (const item of items) {
        console.log(item);
    }
}

printAll<string>(["TypeScript", "JavaScript", "Node.js"]);
printAll<number>([100, 200, 300]);

// Output:
// TypeScript
// JavaScript
// Node.js
// 100
// 200
// 300

// ============================================================================
// Example 21: Async Loop with for...of
// ============================================================================

// for...of supports await inside async functions.
// Each promise is awaited sequentially — one at a time.
// forEach does NOT support await properly; use for...of instead.

console.log("\nExample 21: Async for...of Loop");

async function fetchData(id: number): Promise<string> {
    return new Promise((resolve) =>
        setTimeout(() => resolve(`Data for ID ${id}`), 100)
    );
}

async function loadAll(): Promise<void> {
    const ids: number[] = [1, 2, 3];

    for (const id of ids) {
        const result = await fetchData(id);
        console.log(result);
    }
}

loadAll();

// Output:
// Data for ID 1
// Data for ID 2
// Data for ID 3

// ============================================================================
// Example 22: Array Methods as Functional Loops
// ============================================================================

// TypeScript supports functional-style iteration via built-in array methods.
//
// .forEach()  - Executes a callback for every element; returns nothing.
// .map()      - Returns a new array with each element transformed.
// .filter()   - Returns a new array with only elements that pass the test.
// .reduce()   - Accumulates all elements into a single value.

console.log("\nExample 22: Array Methods as Functional Loops");

const nums: number[] = [1, 2, 3, 4, 5];

// forEach — iterates and logs each value
nums.forEach((n) => console.log("forEach:", n));

// map — squares each element
const squared = nums.map((n) => n * n);
console.log("Squares:", squared);

// filter — keeps only even numbers
const evens = nums.filter((n) => n % 2 === 0);
console.log("Evens:", evens);

// reduce — sums all elements into one value
const total = nums.reduce((acc, n) => acc + n, 0);
console.log("Sum:", total);

// Output:
// forEach: 1
// forEach: 2
// forEach: 3
// forEach: 4
// forEach: 5
// Squares: [ 1, 4, 9, 16, 25 ]
// Evens: [ 2, 4 ]
// Sum: 15

// ============================================================================
// Summary
// ============================================================================

// Covered Topics:
//
// 1.  Basic for Loop
// 2.  Reverse for Loop (Decrement)
// 3.  while Loop
// 4.  do...while Loop
// 5.  do...while — Runs at Least Once
// 6.  for...of with Array
// 7.  for...of with String
// 8.  for...in with Object
// 9.  break Statement
// 10. continue Statement
// 11. Nested for Loop
// 12. Summing Array Elements
// 13. for...of with entries() (Index + Value)
// 14. Looping Over a Map
// 15. Looping Over a Set
// 16. Loop with Type Guard
// 17. Loop Over Array of Objects
// 18. Infinite Loop with break
// 19. Labeled break (Nested Loop Exit)
// 20. Generic Loop Function
// 21. Async for...of Loop
// 22. Array Methods as Functional Loops