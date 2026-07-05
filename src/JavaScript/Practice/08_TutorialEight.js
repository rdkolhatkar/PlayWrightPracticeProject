// ======================= JAVASCRIPT ARRAYS =======================

/*
    What is an Array?

    - An array is a special type of object used to store **multiple values** in a single variable.
    - Arrays can hold **numbers, strings, booleans, objects, or even other arrays**.
    - Arrays are ordered, zero-indexed, and can change in size.

    Analogy:
    - Think of an array as a row of lockers.
    - Each locker has an index number starting from 0.
    - You can put anything inside each locker.
*/

// ======================= ARRAY CREATION =======================

// Using array literal
let numbers = [10, 20, 30, 40];
console.log("Numbers Array:", numbers);
// Output: Numbers Array: [ 10, 20, 30, 40 ]

// Using Array constructor
let fruits = new Array("Apple", "Banana", "Cherry");
console.log("Fruits Array:", fruits);
// Output: Fruits Array: [ 'Apple', 'Banana', 'Cherry' ]

// Empty array
let empty = [];
console.log("Empty Array:", empty);
// Output: Empty Array: []

// Mixed data types
let mixed = [1, "Hello", true, null, undefined];
console.log("Mixed Array:", mixed);
// Output: Mixed Array: [ 1, 'Hello', true, null, undefined ]

// ======================= ARRAY LENGTH =======================
console.log("Length of numbers array:", numbers.length);
// Output: Length of numbers array: 4

// ======================= ACCESSING ARRAY ELEMENTS =======================
console.log("First number:", numbers[0]); // index 0
// Output: First number: 10
console.log("Last number:", numbers[numbers.length - 1]);
// Output: Last number: 40

// ======================= ARRAY METHODS =======================

// ---- Add elements ----
numbers.push(50);  // Add at end
console.log("After push:", numbers);
// Before push: [ 10, 20, 30, 40 ]
// Output: After push: [ 10, 20, 30, 40, 50 ]

numbers.unshift(5); // Add at beginning
console.log("After unshift:", numbers);
// Before unshift: [ 10, 20, 30, 40, 50 ]
// Output: After unshift: [ 5, 10, 20, 30, 40, 50 ]

// ---- Remove elements ----
numbers.pop(); // Remove from end (Removes last element of the array)
console.log("After pop:", numbers);
// Before pop: [ 5, 10, 20, 30, 40, 50 ]
// Output: After pop: [ 5, 10, 20, 30, 40 ]

numbers.shift(); // Remove from start (Removes first element of the array)
console.log("After shift:", numbers);
// Before shift: [ 5, 10, 20, 30, 40 ]
// Output: After shift: [ 10, 20, 30, 40 ]

// ---- Slice & Splice ----
let subArray = numbers.slice(1, 3); // from index 1 to 2
console.log("Slice(1,3):", subArray);
// Before slice: [ 10, 20, 30, 40 ]
// Output: Slice(1,3): [ 20, 30 ]

numbers.splice(1, 2, 25, 35); // remove 2 elements at index 1 and insert 25, 35
console.log("After splice:", numbers);
// Before splice: [ 10, 20, 30, 40 ]
// Output: After splice: [ 10, 25, 35, 40 ]

// ---- Concat ----
let newArray = numbers.concat([50, 60]);
console.log("After concat:", newArray);
// Before concat: [ 10, 25, 35, 40 ]
// Output: After concat: [ 10, 25, 35, 40, 50, 60 ]

// ---- Join ----
console.log("Joined with '-':", numbers.join("-"));
// Before join: [ 10, 25, 35, 40 ]
// Output: Joined with '-': 10-25-35-40

// ======================= ARRAY SEARCH =======================

// indexOf → first occurrence
console.log("Index of 35:", numbers.indexOf(35));
// Output: Index of 35: 2

let colorsArray = ["red", "green", "blue", "green", "red", "yellow"];
console.log("Index of 'green':", colorsArray.indexOf("green"));
// Output: Index of 'green': 1
console.log("Index of 'yellow':", colorsArray.indexOf("yellow"));
// Output: Index of 'yellow': 5
console.log("Index of 'purple':", colorsArray.indexOf("purple"));
// Output: Index of 'purple': -1
// Counting occurrences of 'red'
let countRed = colorsArray.filter(color => color === "red").length;
console.log("Count of 'red':", countRed);
// Output: Count of 'red': 2
let redSecondIndex = colorsArray.indexOf("red", colorsArray.indexOf("red") + 1); // here counting will be done by using indexOf to find the first occurrence and then searching for the next occurrence starting from the index after the first one.
console.log("Second index of 'red':", redSecondIndex);
// Output: Second index of 'red': 4

// lastIndexOf → last occurrence
numbers.push(25);
console.log("Last index of 25:", numbers.lastIndexOf(25));
// Output: Last index of 25: 4

// includes → check presence
console.log("Includes 40?", numbers.includes(40));
// Output: Includes 40? true

// find → first element matching condition
let found = numbers.find(n => n > 30);
console.log("First number > 30:", found);
// Output: First number > 30: 35

// filter → all elements matching condition
let filtered = numbers.filter(n => n > 30);
console.log("Numbers > 30:", filtered);
// Output: Numbers > 30: [ 35, 40 ]

// ======================= ARRAY SORT =======================

// Default sort (converts numbers to strings → lexicographic)
let nums = [3, 1, 10, 5];
console.log("Before sort:", nums);
// Output: Before sort: [ 3, 1, 10, 5 ]
nums.sort();
console.log("After default sort:", nums);
// Output: After default sort: [ 1, 10, 3, 5 ]

// Numeric sort
nums.sort((a, b) => a - b);
console.log("After numeric sort ascending:", nums);
// Output: After numeric sort ascending: [ 1, 3, 5, 10 ]
nums.sort((a, b) => b - a);
console.log("After numeric sort descending:", nums);
// Output: After numeric sort descending: [ 10, 5, 3, 1 ]

// ======================= ARRAY ITERATION =======================

// for loop
console.log("Iterate using for loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// for...of loop
console.log("Iterate using for...of:");
for (let num of numbers) {
    console.log(num);
}

// forEach method
console.log("Iterate using forEach:");
numbers.forEach((n, index) => {
    console.log("Index:", index, "Value:", n);
});

// map → create new array
let doubled = numbers.map(n => n * 2);
console.log("Doubled numbers:", doubled);

// ======================= ARRAY REFERENCES =======================
/*
    - Arrays are objects → assigning one array to another copies **reference**
    - Changing one array affects the other
*/

let arr1 = [1, 2, 3];
let arr2 = arr1; // reference copy
arr2.push(4);
console.log("arr1:", arr1); // Output: arr1: [1,2,3,4]
console.log("arr2:", arr2); // Output: arr2: [1,2,3,4]

// To create a true copy → use slice or spread
let arr3 = arr1.slice();
arr3.push(5);
console.log("arr1 after slice copy:", arr1); // Output: [1,2,3,4]
console.log("arr3 after slice copy:", arr3); // Output: [1,2,3,4,5]

let arr4 = [...arr1];
arr4.push(6);
console.log("arr4 with spread operator:", arr4); // Output: [1,2,3,4,6]

// ======================= ARRAY CONST =======================
/*
    - Declaring array with const **does not make array immutable**
    - You cannot reassign the variable, but you can modify elements
*/

const colors = ["red", "green"];
colors.push("blue"); // ✅ Works
console.log(colors); // Output: [ 'red', 'green', 'blue' ]

// colors = ["yellow"]; // ❌ Error: Assignment to constant variable

// ======================= SUMMARY =======================

/*
    - Arrays store multiple values in ordered list
    - Can contain mixed types
    - Access elements with index
    - Common methods: push, pop, shift, unshift, slice, splice, concat, join
    - Searching: indexOf, lastIndexOf, includes, find, filter
    - Sorting: sort(), custom compare functions
    - Iteration: for, for...of, forEach, map
    - Arrays are reference types
    - const array can still be modified, just cannot be reassigned
*/
