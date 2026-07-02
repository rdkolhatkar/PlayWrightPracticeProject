// Optional and Default Parameters in TypeScript
// Optional parameters are parameters that may or may not be provided when calling a function. They are denoted by a question mark (?) after the parameter name. Default parameters are parameters that have a default value assigned to them, which will be used if no value is provided when calling the function.
function greetUser(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}
console.log(greetUser("Alice")); // Output: Hello, Alice!
console.log(greetUser("Bob", "Good morning")); // Output: Good morning, Bob!
// ? symbol indicates that the greeting parameter is optional. If it is not provided, the function will use the default greeting of "Hello".

// Function with default parameter
function greetUserWithDefault(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}
console.log(greetUserWithDefault("Charlie")); // Output: Hello, Charlie!
console.log(greetUserWithDefault("Dave", "Hi")); // Output: Hi, Dave!
console.log(greetUserWithDefault("Jack", undefined)); // Output: Hello, Jack!
// In this example, the greeting parameter has a default value of "Hello". If no value is provided for greeting when calling the function, it will use the default value.

// Function Overloading in TypeScript
// Function overloading does not exist in JavaScript, but TypeScript allows you to define multiple function signatures for a single function implementation. This allows you to create functions that can accept different types or numbers of parameters.
// You can have multiple functions :
// -> With the Same Name but Different Parameter Types and Return Types
// -> However the number of parameters must be the same for all overloads, and the types of the parameters must be compatible with each other.
// -> Provide a single implementation for the overloaded function that can handle all the different parameter types and return types. The implementation should use type guards or conditional statements to determine the types of the parameters and return the appropriate value based on those types.
// -> Need to implement the function only once, but you can define multiple overloads for it. The overloads should be defined before the implementation of the function.
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: boolean, b: boolean): boolean;

// Implementation of the combine function body only once, but it can handle all the different parameter types and return types.
function combine(a: any, b: any): any {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    } else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else if (typeof a === "boolean" && typeof b === "boolean") {
        return a && b;
    } else {
        throw new Error("Invalid arguments. Both arguments must be of the same type.");
    }
}
console.log(combine("Hello, ", "World!")); // Output: Hello, World!
console.log(combine(5, 10)); // Output: 15
console.log(combine(true, false)); // Output: false
console.log(combine("Hello", "World!")); // Output: Hello, World!
// console.log(combine("Hello", 10)); // Error: Invalid arguments. Both arguments must be of the same type.
// In this example, the combine function has two overloads: one that takes two strings and returns a string, and another that takes two numbers and returns a number. The implementation of the function checks the types of the arguments and performs the appropriate operation based on their types. If the arguments are of different types, an error is thrown.

