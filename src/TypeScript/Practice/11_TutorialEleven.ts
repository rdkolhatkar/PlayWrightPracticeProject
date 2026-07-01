// Functions in TypeScript

// Function Without Parameters in TypeScript
function sayHello(): void {
    console.log("Hello, World!");
}
sayHello(); // Output: Hello, World!

// Named function in TypeScript
function addNumbers(a: number, b: number): number {
    return a + b;
}
addNumbers(5, 10); // Output: 15

// Anonymous function in TypeScript
const subtractNumbers = function(a: number, b: number): number {
    return a - b;
};
subtractNumbers(10, 5); // Output: 5
// Anonymous functions are functions that do not have a name. They are often used as arguments to other functions or assigned to variables. In this example, the subtractNumbers function is defined as an anonymous function and assigned to the variable subtractNumbers. It takes two parameters, a and b, and returns their difference.

// Arrow function in TypeScript
const multiplyNumbers = (a: number, b: number): number => {
    return a * b;
};
multiplyNumbers(5, 10); // Output: 50

// Function with optional parameter in TypeScript
function greet(name: string, greeting?: string): string {
    if (greeting) { 
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }   
}
greet("Alice"); // Output: Hello, Alice!
greet("Bob", "Good morning"); // Output: Good morning, Bob!

// Function with default parameter in TypeScript
function greetWithDefault(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}
greetWithDefault("Charlie"); // Output: Hello, Charlie!
greetWithDefault("Dave", "Hi"); // Output: Hi, Dave!

//function with rest parameters in TypeScript
function sumNumbers(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
sumNumbers(1, 2, 3, 4, 5); // Output: 15
// rest parameters allow you to pass an arbitrary number of arguments to a function. In this example, the sumNumbers function takes any number of numeric arguments and returns their sum. The reduce method is used to accumulate the sum of the numbers in the array.
// ...numbers: number[] is the syntax for rest parameters, which collects all remaining arguments into an array called numbers. The reduce method is then called on this array to calculate the sum of its elements.

// Function Overloading in TypeScript
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: string | number, b: string | number): string | number {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    } else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        throw new Error("Incompatible types");
    }
}
combine("Hello, ", "World!"); // Output: Hello, World!
combine(5, 10); // Output: 15

// boolean function in TypeScript
function isEven(num: number): boolean {
    return num % 2 === 0;
}
isEven(4); // Output: true
isEven(5); // Output: false

function isUserActive(userName: string): boolean {
    const activeUsers = ["Alice", "Bob", "Charlie"];
    for(let user of activeUsers) {
        if(user === userName) {
            return true;
        }
    }
    return false;
}
isUserActive("Alice"); // Output: true
isUserActive("David"); // Output: false

// Void function in TypeScript
function logMessage(message: string): void {
    console.log(message);
}
logMessage("This is a log message."); // Output: This is a log message.
// void functions do not return any value. They are typically used for performing actions, such as logging messages or updating the state of an application, without returning any data to the caller. In this example, the logMessage function takes a string message as an argument and logs it to the console without returning anything.

// Anonymous function with void return type in TypeScript
const logError = function(errorMessage: string): void {
    console.error(errorMessage);
};
logError("This is an error message."); // Output: This is an error message.
// Anonymous functions can also have a void return type. In this example, the logError function is defined as an anonymous function that takes an error message as an argument and logs it to the console using console.error, without returning any value.

let sum = function(a: number, b: number): number {
    return a + b;
}
let result : number = sum(10, 20);
console.log(result); // Output: 30

// Arrow Functions in TypeScript
// Arrow Function '=>' is also known as Fat Arrow Function. It is a shorter syntax for writing functions in TypeScript. Arrow functions are often used in situations where you want to preserve the context of 'this' or when you want to write concise function expressions.
// It is similar to Lambda expressions in other programming languages. Arrow functions can have a single expression or a block of code. If the function body contains a single expression, you can omit the curly braces and the return keyword. If the function body contains multiple statements, you need to use curly braces and explicitly return a value if needed.
// Arrow Function is an anonymous function without name. It does not have its own 'this' context, but instead inherits 'this' from the surrounding lexical scope. This makes arrow functions particularly useful in scenarios where you want to maintain the context of 'this', such as in event handlers or callbacks.
// Simple Arrow Function in TypeScript
/*
() => {
    console.log("This is a simple arrow function.");
}
*/
// Arrow Function with Single Expression in TypeScript
const square = (x: number): number => x * x;
console.log(square(5)); // Output: 25
// Arrow Function with Multiple Statements in TypeScript
const divide = (a: number, b: number): number => {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }   
    return a / b;
}

divide(10, 2); // Output: 5
let sumOfNumbers = (a: number, b: number): number => a + b;
console.log(sumOfNumbers(10, 20)); // Output: 30

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayInfo = (): void => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    getData = () => console.log(`Name: ${this.name}, Age: ${this.age}`);
}

let person1 = new Person("Alice", 30);
person1.displayInfo(); // Output: Name: Alice, Age: 30
let person2 = new Person("Bob", 25);
person2.getData(); // Output: Name: Bob, Age: 25