// To compile and run, use the following command in the terminal: npx tsc 02_TutorialTwo.ts --ignoreConfig
// Arrays in TypeScript
// An array is a collection of elements of the same type. In TypeScript, you can define an array using two different syntaxes: the square bracket syntax and the generic array syntax.

// Square Bracket Syntax
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(typeof numbers); // Output: object (arrays are objects in JavaScript)

let names: string[] = ["Alice", "Bob", "Charlie"];
console.log(names);
console.log(typeof names); // Output: object (arrays are objects in JavaScript)

// Generic Array Syntax
let fruits: Array<string> = ["Apple", "Banana", "Cherry"];
console.log(fruits);
console.log(typeof fruits); // Output: object (arrays are objects in JavaScript)

let numbersGeneric: Array<number> = [10, 20, 30, 40, 50];
console.log(numbersGeneric);
console.log(typeof numbersGeneric); // Output: object (arrays are objects in JavaScript)

let mixedArray: Array<any> = [1, "two", true, { key: "value" }, null];
console.log(mixedArray);
console.log(typeof mixedArray); // Output: object (arrays are objects in JavaScript)    

// MultiType Arrays
// In TypeScript, you can create arrays that can hold multiple types of values using the union type. This allows you to define an array that can contain elements of different types.   
let multiTypeArray: (number | string | boolean)[] = [1, "two", true, 3, "four", false];
console.log(multiTypeArray);
console.log(typeof multiTypeArray); // Output: object (arrays are objects in JavaScript)
// Here | is used to define a union type, allowing the array to hold elements of type number, string, or boolean.

let anotherMultiTypeArray: Array<number | string | boolean> = [10, "twenty", false, 30, "forty", true];
console.log(anotherMultiTypeArray);
console.log(typeof anotherMultiTypeArray); // Output: object (arrays are objects in JavaScript)
// In this example, we use the generic array syntax to define an array that can hold elements of type number, string, or boolean.   

// Array declaration and initialization can be done in various ways, and TypeScript provides flexibility in defining the types of elements that an array can hold. The examples above demonstrate how to create arrays with specific types, as well as arrays that can hold multiple types using union types.   
let userIds: number[];
let userNames: Array<string>;
let users : Array<{ id: number; name: string; isActive: boolean }>;

userIds = [101, 102, 103, 104];
userNames = ["Alice", "Bob", "Charlie", "David"];
users = [
    { id: 1, name: "Alice", isActive: true },
    { id: 2, name: "Bob", isActive: false },
    { id: 3, name: "Charlie", isActive: true },
];

// Iterating over arrays using for loop
console.log("Iterating over userIds:");
for (let i = 0; i < userIds.length; i++) {
    console.log(userIds[i]);
}
console.log("Iterating over userNames:");
for (let i = 0; i < userNames.length; i++) {
    console.log(userNames[i]);
}
console.log("Iterating over users:");
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

// for...in loop
// Iterates over the INDEXES (keys) of the array.
// 'index' will contain values like: "0", "1", "2", "3".
// Use array[index] to access the actual element.
for (let index in userIds) {
    console.log(userIds[index]);
}

// for...of loop
// Iterates directly over the VALUES (elements) of the array.
// 'userId' will contain values like: 101, 102, 103, 104.
// No need to use an index to access the element.
for (let userId of userIds) {
    console.log(userId);
}

