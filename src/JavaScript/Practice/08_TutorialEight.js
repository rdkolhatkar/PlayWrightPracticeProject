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

//==================================================================================

// Difference between map(), filter(), reduce() and forEach() in JavaScript:

/*
    - map(): Creates a new array by applying a function to each element of the original array. It does not modify the original array.
    - filter(): Creates a new array containing elements that pass a specified test (condition). It does not modify the original array.
    - reduce(): Reduces the array to a single value by applying a function to each element, accumulating the result. It does not modify the original array.
    - forEach(): Executes a provided function once for each array element. It does not create a new array and does not return a value. It is mainly used for side effects.
*/  

let sampleArray = [1, 2, 3, 4, 5];

// Map example: map() creates a new array by applying a function to each element of the original array. In this case, we are doubling each number in the sampleArray.
let mappedArray = sampleArray.map((num) => num * 2);
console.log("Mapped Array (doubled):", mappedArray); // Output: [2, 4, 6, 8, 10]
// use map() to convert farenheit to celsius
let fahrenheitArray = [32, 68, 100, 212];
let celsiusArray = fahrenheitArray.map((f) => ((f - 32) * 5) / 9);
console.log("Celsius Array:", celsiusArray); // Output: [0, 20, 37.77777777777778, 100]
// Converting kilometers to miles using map() with a function that takes kilometers as input and returns miles. The conversion factor is 1 kilometer = 0.621371 miles.
let kilometersArray = [1, 5, 10, 42.195]; // 42.195 km is a marathon
function kmToMiles(km) {
    return km * 0.621371;
}
let milesArray = kilometersArray.map(kmToMiles);
console.log("Miles Array:", milesArray); // Output: [0.621371, 3.106855, 6.21371, 26.218757145]

// Filter example: filter() creates a new array containing elements that pass a specified test (condition). In this case, we are filtering out even numbers from the sampleArray.
let filteredArray = sampleArray.filter((num) => num % 2 === 0);
console.log("Filtered Array (even numbers):", filteredArray); // Output: [2, 4]
let employees = [
    { name: "Alice", age: 25, department: "HR" },
    { name: "Bob", age: 30, department: "Engineering" },
    { name: "Charlie", age: 28, department: "HR" },
    { name: "David", age: 35, department: "Engineering" },
    { name: "Eve", age: 22, department: "Marketing" },
];
employees.filter((employee) => employee.department === "HR").forEach((employee) => console.log(employee.name)); // Output: Alice Charlie
// using filter() find all employees whose age is greater than or equal to 25 and print their names
let employeesAbove25 = employees.filter((employee) => employee.age >= 25);
console.log("Employees aged 25 or older:");
employeesAbove25.forEach((employee) => console.log(employee.name)); // Output: Alice Bob Charlie David

let newEmployee = employees.filter((emp) => {
    return emp.age > 30 && emp.department === "Engineering";
});
console.log("Employees older than 30 in Engineering:", newEmployee); //output: Employees older than 30 in Engineering: [ { name: 'David', age: 35, department: 'Engineering' } ]

// Reduce example: reduce() reduces the array to a single value by applying a function to each element, accumulating the result. In this case, we are summing all the numbers in the sampleArray.
// General Syntax of reduce():
/*
    array.reduce((accumulator, currentValue) => {
        // return updated accumulator
    }, initialValue);

    accumulator → Stores the running (accumulated) result.
    currentValue → The current array element being processed.
    initialValue → The starting value of the accumulator.
*/
let sum = sampleArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
console.log("Sum of sampleArray:", sum); // Output: 15

let numbersToReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let product = numbersToReduce.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log("Product of numbersToReduce:", product); // Output: 3628800

// Finding Max number in an array using reduce()
let top = [5, 12, 8, 21, 3, 15, 33, 4, 1, 2, 40, 3];
top.reduce((max, current) => {
    if (current > max) {
        max = current;
    }else {
        max = max;
    }
    return max;
}, top[0]); // Output: 40


let cartItems = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 80 },
];
let totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
console.log("Total price of cart items:", totalPrice); // Output: 1130

// ForEach example: forEach() executes a provided function once for each array element. In this case, we are logging each number in the sampleArray to the console.
console.log("ForEach example:");
sampleArray.forEach((num) => console.log(num)); // Output: 1 2 3 4 5


