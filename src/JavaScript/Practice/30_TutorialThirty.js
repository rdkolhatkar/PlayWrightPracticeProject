// To run this file:
// node src/JavaScript/Practice/30_TutorialThirty.js

// Template Literals in JavaScript

// Template literals are a way to create strings in JavaScript that allow for easier string interpolation and multi-line strings. They are enclosed by backticks (`) instead of single or double quotes.

// Example of using template literals for string interpolation
const name = "John";
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is John and I am 30 years old.

// Example of using template literals for multi-line strings
const multiLineString = `This is a string   
that spans multiple lines.
It is very useful for formatting text.`;
console.log(multiLineString);
// Output:
// This is a string   
// that spans multiple lines.
// It is very useful for formatting text.

// Addition of expressions inside template literals
const a = 5;
const b = 10;
const sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum); // Output: The sum of 5 and 10 is 15.

// Example of using template literals with functions
function getUserInfo(user) {
return `User Info:  
Name: ${user.name}
Age: ${user.age}
Location: ${user.location}`;
}   

const user = {
    name: "Alice",
    age: 25,
    location: "New York"
};

console.log(getUserInfo(user));
// Output:
// User Info:  
// Name: Alice
// Age: 25
// Location: New York

function getXPath(name) {
    return `//div[@class='user'][@data-name='${name}']`;
}

console.log(getXPath("Alice")); // Output: //div[@class='user'][@data-name='Alice']
  