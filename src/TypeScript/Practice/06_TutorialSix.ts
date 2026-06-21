// Any, Void, Never, and Unknown Data Types in TypeScript

// Any Data Type
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;

let language: any[] = ["TypeScript", "JavaScript", "Python"];
language.push(42); // Adding a number to the array of strings
language.push(true); // Adding a boolean to the array of strings
language.push({ name: "C++" }); // Adding an object to the array of strings
language.push(["Java", "C#"]); // Adding an array to the array of strings
language.push(null); // Adding null to the array of strings
language.push("Ruby"); // Adding a string to the array of strings
// Printing the array to see the mixed types
console.log(language); // Output: [ 'TypeScript', 'JavaScript', 'Python', 42, true, { name: 'C++' }, [ 'Java', 'C#' ], null, 'Ruby' ]

// function that accepts any type of argument and returns any type of value
function compareValues(value1: any, value2: any): any {
    if (value1 === value2) {
        return "Values are equal";
    }else if (value1 > value2) {
        return 1;
    }else if (value1 < value2) {
        return true;
    }else if (value1 !== value2) {
        return undefined;
    }
    return "Values are not equal";
}

console.log(compareValues(10, 20)); // Output: true

// Void Data Type
function logMessage(message: string): void {
    console.log(message);
}

let number : void = undefined; // Valid assignment is only undefined or null for void data type

// Never Data Type
// difference between void and never is that void can return undefined or null, but never cannot return anything, it is used for functions that never return a value or always throw an error.
function throwError(message: string): never {
    throw new Error(message);
}

// Unknown Data Type
let unknownValue: unknown = 10;
unknownValue = "Hello";
unknownValue = true;
console.log(unknownValue); // Output: true