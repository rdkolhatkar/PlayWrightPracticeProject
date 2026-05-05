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

let message: string = "Hello, TypeScript!";
console.log(message);
console.log(typeof message);
let age: number = 25;
console.log(age);
console.log(typeof age);
let isStudent: boolean = true;
console.log(isStudent);
console.log(typeof isStudent);


