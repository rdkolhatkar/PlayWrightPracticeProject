"use strict";
// To initialize the TypeScript project, run the following command in the terminal:
// npm init -y
// npm install typescript --save-dev
// npx tsc --init -> This creates a tsconfig.json file in the root directory of the project, which is used to configure the TypeScript compiler options.
// Open the tsconfig.json file and modify the compiler options as needed. For example, you can set the "target" to "es6" or "esnext" depending on your requirements, and specify the module system you want to use (e.g., "commonjs", "esnext", etc.).
// Important Note: For Better TypeScript Writing Install "ESLint" extension, it will integrate TypeScript With VS code.
// To compile the TypeScript code, run the following command in the terminal:
// npx tsc  -> This will compile all the TypeScript files in the project and generate corresponding JavaScript files in the same directory (or as specified in the tsconfig.json file).
// As TypeScript is a superset of JavaScript, you can write JavaScript code in a .ts file, and it will be compiled to JavaScript without any issues. However, it's recommended to use TypeScript features to take full advantage of the benefits it offers, such as static typing and enhanced tooling support.
// After Writing our TypeScript File we have to compile it to JavaScript using tsc(TypeScript Compiler) and then we can run the compiled JavaScript code using Node.js.
// In your console or terminal, navigate to the directory where your TypeScript file is located and run the following command to compile it:
// npx tsc <filename>.ts  -> Replace <filename> with the name of your TypeScript file. This will generate a corresponding JavaScript file with the same name but with a .js extension in the same directory.
// For example, if you have a file named "app.ts", running the command "npx tsc app.ts" will generate a file named "app.js" in the same directory.
// After compiling, you can run the generated JavaScript file using Node.js with the following command:
// node <filename>.js  -> Replace <filename> with the name of the compiled JavaScript file you want to run. For example, if you compiled "app.ts" to "app.js", you would run "node app.js" to execute the code.
// To run the compiled JavaScript code, use the following command in the terminal:
// node <filename>.js  -> Replace <filename> with the name of the compiled JavaScript file you want to run. 
// To run a specific TypeScript File without compiling entire project run command "npx tsc 01_TutorialOne.ts --ignoreConfig" in the terminal. This will compile only the specified TypeScript file and generate a corresponding JavaScript file in the same directory. You can then run the generated JavaScript file using Node.js as described above.
// npx tsc 01_TutorialOne.ts --ignoreConfig this command will compile only the specified TypeScript file and generate a corresponding JavaScript file in the same directory. You can then run the generated JavaScript file using Node.js as described above.   
let message = "Hello, TypeScript!";
console.log(message);
console.log(typeof message);
let age = 25;
console.log(age);
console.log(typeof age);
let isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);
let anything = "This can be any type";
console.log(anything);
console.log(typeof anything);
anything = 42;
console.log(anything);
console.log(typeof anything);
anything = false;
console.log(anything);
console.log(typeof anything);
let unknownValue = "This is an unknown type";
console.log(unknownValue);
console.log(typeof unknownValue);
let undefinedValue = undefined;
console.log(undefinedValue);
console.log(typeof undefinedValue);
// Type inference is TypeScript's ability to automatically determine the type of a variable, function return value, or expression without you explicitly writing the type.
let inferredString = "This is a string"; // TypeScript infers this as a string in compile time.
console.log(inferredString);
console.log(typeof inferredString);
function helloWorld() {
    // The void type is used to indicate that a function does not return a value. It is often used for functions that perform side effects, such as logging to the console or modifying global state, where there is no meaningful return value.
    console.log("Hello, World!");
}
function add(a, b) {
    // The number type is used to represent both integer and floating-point numbers. It is a primitive type in TypeScript and can be used to perform various mathematical operations.
    return a + b;
}
function findLength(str) {
    // The string type is used to represent textual data. It is a primitive type in TypeScript and can be used to perform various operations on strings, such as concatenation, slicing, and searching.
    return str.length;
}
helloWorld();
console.log(add(5, 10));
console.log(findLength("Hello, TypeScript!"));
