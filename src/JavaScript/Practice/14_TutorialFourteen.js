// To run this file:
// node src/JavaScript/Practice/14_TutorialFourteen.js

// Arrow Functions in JavaScript

// SYNTAX: (param) => expression
// This is the most basic arrow function form.
// - Single parameter "num" is wrapped in parentheses (optional here, but good practice for clarity).
// - Since the function body is just ONE expression (num * num), we skip the curly braces {}
//   and skip the "return" keyword. This is called an "implicit return" —
//   whatever the expression evaluates to is automatically returned.
// - Why use this form? It's short and readable for simple, one-line calculations.
const square = (num) => num * num;
console.log(square(5)); // Output: 25

// SYNTAX: () => expression
// When a function takes NO parameters, we still need the parentheses, but leave them empty "()".
// Again, since the body is a single expression (a string here), it's implicitly returned.
// Why use this form? Useful for simple functions that don't need any input, like default/getter functions.
const greet = () => "Hello, World!";
console.log(greet()); // Output: "Hello, World!"

// SYNTAX: (param1, param2) => expression
// Multiple parameters are separated by commas inside the parentheses.
// The body is still a single expression (a + b), so it's implicitly returned, just like above.
// Why use this form? It's a clean way to write small utility functions (like math operations)
// without extra boilerplate.
const add = (a, b) => a + b;
console.log(add(3, 4)); // Output: 7

const person = {
    name: "Alice",
    age: 25,
    // NOTE: This is a regular function (not an arrow function) on purpose.
    // Regular functions bind their own "this", so "this.name" and "this.age"
    // correctly refer to the "person" object itself.
    greet: function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};

// SYNTAX: (param) => `template literal`
// Here we pass in a whole object as a parameter and use a template literal
// (backticks with ${} placeholders) to build a string using its properties.
// Still a single expression, so it's implicitly returned — no curly braces or "return" needed.
// Why use this form? Arrow functions are great for short, "pure" functions that just
// transform input into output, like formatting data into a readable string.
// (Contrast this with person.greet above — arrow functions do NOT have their own "this",
// so they wouldn't be a good fit for object methods that rely on "this".)
const greetPerson = (person) => `Hello, my name is ${person.name} and I am ${person.age} years old.`;
console.log(greetPerson(person));

// SYNTAX: (param = defaultValue, param2 = defaultValue) => expression
// This shows "default parameters" — if no value (or "undefined") is passed in for
// "username" or "age", JavaScript automatically uses "guest" and 0 instead.
// Why use this form? It protects your function from breaking or showing "undefined"
// when the caller forgets to pass an argument, and avoids writing manual if-checks
// like "if (username === undefined) username = 'guest'".
const greet = (username='guest', age=0) => `Hello, my name is ${username} and I am ${age} years old.`;
console.log(greet()); // Output: "Hello, my name is guest and I am 0 years old."
console.log(greet("Bob", 30)); // Output: "Hello, my name is Bob and I am 30 years old."
const g = greet("Tom", 12);
console.log(g); // Output: "Hello, my name is Tom and I am 12 years old."
const h = greet("Jerry", 15);
console.log(h); // Output: "Hello, my name is Jerry and I am 15 years old."

// rest parameters ... varargs
// SYNTAX: (...paramName) => expression
// The "..." before "numbers" is the REST PARAMETER syntax. It collects ANY number
// of arguments passed into the function and gathers them into a single array called "numbers".
// So sum(1,2,3,4,5) turns into numbers = [1, 2, 3, 4, 5] inside the function.
// We then use .reduce() to add every number in that array together, starting from 0.
// Why use this form? It lets a function accept a variable/unknown number of arguments
// (like a flexible calculator), instead of hardcoding a fixed number of parameters.
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// SYNTAX: (param = default, ...restParams) => { multiple statements }
// This combines TWO features:
// 1. A default parameter ("browser = 'Chrome'") for the first argument.
// 2. A rest parameter ("...details") that collects all remaining arguments into an array.
// Also notice the CURLY BRACES {} here — because the function body has MULTIPLE statements
// (two console.log lines), we can't use the short "implicit return" style.
// When you use {}, JavaScript no longer auto-returns anything — you'd need an explicit
// "return" keyword if you wanted this function to return a value (it doesn't here, it just logs).
// Why use this form? Great for functions that need flexible, optional extra arguments
// plus more than one line of logic.
const browserInfo = (browser = 'Chrome', ...details) =>{
    console.log(`Browser: ${browser}`);
    console.log(`Details: ${details}`);
}

browserInfo();
// Output:
// Browser: Chrome
// Details: 

browserInfo('Firefox', 'Version 89', '64-bit', 'Windows 10');
// Output:
// Browser: Firefox
// Details: Version 89,64-bit,Windows 10


// Find the Maximum number
// SYNTAX: (param1, param2, param3) => { return expression; }
// This function uses CURLY BRACES {} for its body, and because of that, it MUST use
// the explicit "return" keyword to send a value back to whoever called it.
// Why the curly braces here, when it's technically still one line of logic?
// - Curly braces let you write the function body just like a normal function block —
//   useful when you might later add more lines (e.g. logging, validation) without
//   having to rewrite the arrow function's structure.
// - Once you add {}, JS treats everything inside as regular statements, NOT an
//   automatic expression to return — so skipping "return" here would make the
//   function return "undefined" instead of the calculated max value.
// In short: no braces = implicit return (short expressions only).
//           braces = you must write "return" yourself (multi-statement bodies).
const maxValue = (a, b, c) => {
    return Math.max(a, b, c);
};
console.log(maxValue(10, 20, 30)); // Output: 30