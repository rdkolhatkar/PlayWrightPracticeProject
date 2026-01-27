// To run the code, use the command: node src/JavaScript/Practice/01_TutorialOne.js
// This code prints "Hello World!" to the console.
console.log("Hello World!");
// Literals in JavaScript:
/*
    A literal is a value that is written directly in the code and represents itself exactly as written.
    Literals are fixed and their value does not change unless you rewrite the code.
*/
// Examples of different types of literals in JavaScript:

// Numeric literal
let age = 25; // 25 is a numeric literal
console.log("Age:", age); // Output: Age: 25

// String literal
let greeting = "Hello, JavaScript!"; // "Hello, JavaScript!" is a string literal
console.log("Greeting:", greeting); // Output: Greeting: Hello, JavaScript!

// Boolean literal
let isStudent = true; // true is a boolean literal
console.log("Is Student:", isStudent); // Output: Is Student: true

// Null literal
let emptyValue = null; // null is a null literal
console.log("Empty Value:", emptyValue); // Output: Empty Value: null

// Undefined literal
let notDefined; // undefined is an undefined literal
console.log("Not Defined:", notDefined); // Output: Not Defined: undefined

// Array literal
let colors = ["red", "green", "blue"]; // ["red", "green", "blue"] is an array literal
console.log("Colors:", colors); // Output: Colors: [ 'red', 'green', 'blue' ]

// Object literal
let person = { name: "Alice", age: 30 }; // { name: "Alice", age: 30 } is an object literal
console.log("Person:", person); // Output: Person: { name: 'Alice', age: 30 }

//BigInt literal
// In JavaScript, we write 'n' at the end of a BigInt literal to explicitly tell the JavaScript engine that the number is a BigInt, not a normal Number.
let bigNumber = 9007199254740991n; // 9007199254740991n is a BigInt literal
console.log("Big Number:", bigNumber); // Output: Big Number: 9007199254740991n

//Regular Expression literal
let regex = /ab+c/; // /ab+c/ is a regular expression literal
console.log("Regular Expression:", regex); // Output: Regular Expression: /ab+c/

// These literals represent fixed values in the code and do not change unless the code is modified.

// Variables in JavaScript:
/*
    A variable is a named storage location in memory that can hold a value.
    Unlike literals, the value of a variable can change during the execution of a program.
    Variables are used to store data that can be manipulated and updated as needed.
*/
// Example of using variables in JavaScript:
/*
    Types of variable declarations:
    - var: Function-scoped or globally-scoped variable. Can be re-declared and updated.
    - let: Block-scoped variable. Can be updated but not re-declared within the same scope.
    - const: Block-scoped variable. Cannot be updated or re-declared. Must be initialized at the time of declaration. 
*/
// Declare a variable using let
let score = 10; // Declare a variable 'score' and assign it the value 10
console.log("Initial Score:", score); // Output: Initial Score: 10
score = 20; // Update the value of 'score' to 20
console.log("Updated Score:", score); // Output: Updated Score: 20
let playerName = "Bob"; // Declare a variable 'playerName' and assign it the value "Bob"
console.log("Player Name:", playerName); // Output: Player Name: Bob
playerName = "Charlie"; // Update the value of 'playerName' to "Charlie"
console.log("Updated Player Name:", playerName); // Output: Updated Player Name: Charlie
// In this example, we declare variables 'score' and 'playerName', and we change their values during the program execution.
// Declare a variable using var
var totalScore = 10; 
console.log("Initial Total Score:", totalScore); // Output: 10
totalScore = 25; // Update value
console.log("Updated Total Score:", totalScore); // Output: 25
var userName = "Bob"; // Declare another var variable
console.log("User Name:", userName); // Output: Bob
userName = "Charlie"; // Update value
console.log("Updated User Name:", userName); // Output: Charlie
// Declare a constant using const
const maxScore = 100; 
console.log("Max Score:", maxScore); // Output: 100
const gamePlayer = "Alice"; // Declare another constant
console.log("Game Player:", gamePlayer); // Output: Alice
/*
let score = 10;// ❌ Error: Identifier 'score' has already been declared
const maxScore = 20; // ❌ Error: Identifier 'maxScore' has already been declared
*/
// In this example, we declare variables using var and constants using const, demonstrating that their values can be updated (for var) or remain constant (for const).
/*
    What is “Scope” in JavaScript?
    Scope in JavaScript refers to the accessibility or visibility of variables and functions in different parts of the code during runtime.
    Scope = Where a variable is accessible (visible) in your code.
    JavaScript has three main scopes:
    1. Global Scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.
    2. Function Scope: Variables declared within a function are in the function scope and can only be accessed within that function.
    3. Block Scope: Variables declared with let or const within a block (e.g., inside curly braces {}) are in the block scope and can only be accessed within that block.
*/
// Example of variable usage and scope:
// Global Scope : A variable declared outside any function or block is in the global scope and can be accessed from anywhere in the code.
var globalVar = "I am global";

function show() {
    console.log(globalVar); // Output: I am global
}

show();
console.log(globalVar); // Output: I am global
// Function Scope : A variable declared within a function is in the function scope and can only be accessed within that function.
function test() {
    var x = 10;
    console.log(x); // Output: 10
}

test();
// console.log(x); // ❌ Error
// Block Scope : A variable declared with let or const within a block is in the block scope and can only be accessed within that block.
if (true) {
    let a = 5;
    console.log(a);
}
console.log(a); // ❌ Error
if (true) {
    const b = 20;
    console.log(b); // Output: 20
}
// console.log(b); // ❌ Error ReferenceError: b is not defined


