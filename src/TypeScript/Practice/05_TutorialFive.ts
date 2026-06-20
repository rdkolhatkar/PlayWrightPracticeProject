// Union Concept in TypeScript

// A union type allows a variable to hold multiple types of values. It is defined using the pipe (|) symbol.

// Example of a union type
let value: string | number;

// Assigning a string value
value = "Hello, TypeScript!";
console.log(value); // Output: Hello, TypeScript!

// Assigning a number value
value = 42;
console.log(value); // Output: 42

// Example of a function that accepts a union type as a parameter
function displayValue(input: string | number): void {
    if (typeof input === "string") {
        console.log(`String value: ${input}`);
    } else if (typeof input === "number") {
        console.log(`Number value: ${input}`);
    }       
}
// Calling the function with a string
displayValue("TypeScript is awesome!"); // Output: String value: TypeScript is awesome! 
// Calling the function with a number
displayValue(100); // Output: Number value: 100

// Example of a variable that can hold multiple types including null and undefined
let userId: string | number | null | undefined | boolean | object | symbol | bigint | symbol[] | null[] | undefined[] | boolean[] | object[] | string[] | number[];

function getUserId(customerId: (string | number | null | undefined | boolean | object | symbol | bigint | symbol[] | null[] | undefined[] | boolean[] | object[] | string[] | number[])[]): void {
    customerId.forEach((id) => {
        if (typeof id === "string") {   
            console.log(`String ID: ${id}`);
        } else if (typeof id === "number") {
            console.log(`Number ID: ${id}`);
        } else if (id === null) {
            console.log("ID is null");
        } else if (id === undefined) {
            console.log("ID is undefined");
        }   
    });
}

// Calling the function with an array of different types
getUserId(["user123", 456, null, undefined, true, { name: "John" }, Symbol("id"), 9007199254740991, ["nested", "array"], [null], [undefined], [false], [{ key: "value" }], ["stringArray"], [12345]]); 

