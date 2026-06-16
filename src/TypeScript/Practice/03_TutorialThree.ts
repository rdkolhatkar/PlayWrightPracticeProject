// Touple in TypeScript
// A tuple is a special type of array that can hold a fixed number of elements, where each element can have a different type. Tuples are useful when you want to represent a collection of related values that may have different types. In TypeScript, you can define a tuple using the following syntax:  
let myTuple: [number, string, boolean] = [42, "Hello", true];
console.log(myTuple); // Output: [42, "Hello", true]
console.log(typeof myTuple); // Output: object (tuples are arrays in JavaScript)

// ============================================================
// ARRAY vs TUPLE IN TYPESCRIPT
// ============================================================
//
// ARRAY:
// - Stores multiple values of the SAME data type.
// - Length can grow or shrink dynamically.
// - TypeScript only checks that every element matches the
//   declared type.
//
// TUPLE:
// - Stores a FIXED number of elements.
// - Order and data type of each element is important. Order matters.
// - Each position can have a DIFFERENT data type.
// - TypeScript checks both the data type and the position
//   of each element.
// - Touple is only designed for the Typescript type system. At runtime, it's just an array.
// ============================================================


// ============================================================
// 1. ARRAY EXAMPLE
// ============================================================

// Array of strings.
// Every element must be a string.
let fruits: string[] = ["Apple", "Banana", "Orange"];

// Valid because arrays can grow dynamically.
fruits.push("Mango");

// Valid because all elements are strings.
fruits.push("Grapes");

// Invalid - TypeScript error because number is not a string.
// fruits.push(100);

console.log("Array Elements:");
console.log(fruits);

// Output:
// ["Apple", "Banana", "Orange", "Mango", "Grapes"]



// ============================================================
// 2. TUPLE EXAMPLE
// ============================================================

// Tuple containing:
// Position 0 -> string
// Position 1 -> number
// Position 2 -> boolean
let employee: [string, number, boolean] =
    ["Ratnakar", 101, true];

// Accessing tuple elements by index.
console.log("Employee Name:", employee[0]);
console.log("Employee Id:", employee[1]);
console.log("Is Active:", employee[2]);

// Invalid - TypeScript error because order matters.
// employee = [101, "Ratnakar", true];

// Invalid - TypeScript error because data type at
// position 1 should be number.
// employee = ["Ratnakar", "101", true];



// ============================================================
// 3. ARRAY ALLOWS SAME TYPE VALUES ONLY
// ============================================================

let marks: number[] = [80, 85, 90, 95];

// All values are numbers.
marks.push(100);

// Invalid - TypeScript error.
// marks.push("A+");

console.log(marks);



// ============================================================
// 4. TUPLE ALLOWS DIFFERENT TYPES IN FIXED POSITIONS
// ============================================================

// Useful when each position has a specific meaning.
let studentRecord: [number, string, string] =
    [1, "Rahul", "Pune"];

// Position 0 -> Roll Number
// Position 1 -> Student Name
// Position 2 -> City

console.log(studentRecord);



// ============================================================
// 5. REAL-WORLD EXAMPLE
// ============================================================

// ARRAY:
// List of user IDs where every value is a number.
let userIds: number[] = [101, 102, 103, 104];

console.log(userIds);

// TUPLE:
// Represents a single user's details.
// Each position stores different information.
let user: [number, string, string] =
    [101, "Ratnakar", "Tester"];

console.log(user);

// Touple with arrays as elements
let userDetails: [number, string, string[]] = [
    101,
    "Ratnakar",
    ["Tester", "Developer", "Manager"],
];

console.log(userDetails); // Output: [101, "Ratnakar", ["Tester", "Developer", "Manager"]]

// Touple Array
let users: [number, string][] = [
    [101, "Alice"],
    [102, "Bob"],
    [103, "Charlie"],
];

console.log(users); // Output: [[101, "Alice"], [102, "Bob"], [103, "Charlie"]]

// Pushing data into a tuple 
let employeeRecord: [number, string, boolean] = [101, "Ratnakar", true];

employeeRecord.push(102, "Naveen", false); // This is allowed at runtime because tuples are just arrays in JavaScript, but it will cause a TypeScript error because it violates the fixed structure of the tuple.

console.log(employeeRecord); // Output: [101, "Ratnakar", true, 102, "Naveen", false]

// ============================================================
// DIFFERENCE SUMMARY
// ============================================================
//
// ARRAY
// -----
// let numbers: number[] = [1, 2, 3];
//
// ✔ Same data type
// ✔ Dynamic size
// ✔ Order does not define meaning
//
// TUPLE
// -----
// let person: [string, number] = ["John", 25];
//
// ✔ Different data types allowed
// ✔ Fixed structure
// ✔ Position defines meaning
//
// Array = Collection of similar values
// Tuple = Fixed record with different value types
// ============================================================