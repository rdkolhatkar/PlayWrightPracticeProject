// To run this file:
// node src/JavaScript/Practice/28_TutorialTwentyEight.js

// Console Methods in JavaScript

// console.log()

console.log("Hello World");

// console.error()

console.error("Testing Exception Error");

//console.warn()

console.warn("This is a Warning About Excess CPU Memory usage !!!");

// console.info()

console.info("This Projects is created for JavaScript Practice !");

// Example of console.table() -> Printing values from an object in tabular format

const user = {
    name: "john",
    age: 34,
    city: "Florida",
    country: "USA"
}

console.log(user);
/*
    Output:
        { name: 'john', age: 34, city: 'Florida', country: 'USA' }
*/
console.table(user);
/*
     Output:
        ┌─────────┬───────────┐
        │ (index) │ Values    │
        ├─────────┼───────────┤
        │ name    │ 'john'    │
        │ age     │ 34        │
        │ city    │ 'Florida' │
        │ country │ 'USA'     │
        └─────────┴───────────┘
*/

const userOne = {
    name: "Ratnakar",
    age: 27,
    city: "Pune",
    country: "India"
}

console.table({user, userOne});

/*
    Output:
        ┌─────────┬────────────┬─────┬───────────┬─────────┐
        │ (index) │ name       │ age │ city      │ country │
        ├─────────┼────────────┼─────┼───────────┼─────────┤
        │ user    │ 'john'     │ 34  │ 'Florida' │ 'USA'   │
        │ userOne │ 'Ratnakar' │ 27  │ 'Pune'    │ 'India' │
        └─────────┴────────────┴─────┴───────────┴─────────
*/

// Printing messages for a Specific Group using console.group() 

console.group("Login Feature");
console.log("Enter Username/Password");
console.log("Login is Successful")
console.groupEnd();

/*
    Output:
        Login Feature
            Enter Username/Password
            Login is Successful
*/


// console.time() -> To check the Execution time of any Process
console.time("Print 0 to 100 Values");
for(let i = 0; i <= 100; i++){
    console.log(i);
}
console.timeEnd("Time taken to Print 0 to 100 Values");
/*
    Output:
        Print 0 to 100 Values: 121.965ms
*/

// console.count() to measure the iteration count of log
console.count("Hello World");
console.count("Hello World");
console.count("Hello World");
console.count("Hello World");
console.count("Hello World");

/*
    Output:
    Hello World: 1
    Hello World: 2
    Hello World: 3
    Hello World: 4
    Hello World: 5
*/

// console.assert() -> To check the actual value with expected value
let a = 30;
let b = 40;
let c = 30;
console.assert(a==b, "Value of a is not equal to value of b");
console.assert(a==c, "Value of a is not equal to value of c");
/*
    output:
        Assertion failed: Value of a is not equal to value of b
    Note: if assertion passed then it will not Print anything in console
*/

// To Print the StackTrace in the console we have console.trace();

function testMyCode(){
    console.trace();
}
testMyCode();

/*
    Output:
        Trace
            at testMyCode (file:///D:/PlayWrightPracticeProject/src/JavaScript/Practice/28_TutorialTwentyEight.js:125:13)
            at file:///D:/PlayWrightPracticeProject/src/JavaScript/Practice/28_TutorialTwentyEight.js:127:1
            at ModuleJob.run (node:internal/modules/esm/module_job:329:25)
            at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:644:26)
            at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:117:5)
*/

// Printing the CSS in console
console.log("%c I love JavaScript Programming Language !!!", "color:Red; background-color:green; border:solid")


// Clear the logs from console using console.clear()
for(let i = 0; i <= 100; i++){
    console.log(i);
}
console.clear();
