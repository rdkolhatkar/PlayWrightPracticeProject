// ======================= JAVASCRIPT OBJECTS =======================

/*
    What is an Object in JavaScript?

    - An object is a collection of **key-value pairs**.
    - Keys are called **properties**, and values can be anything (numbers, strings, booleans, arrays, functions).
    - Objects are used to **store and organize related data**.

    Analogy:
    - Think of an object as a real-world entity:
      Example: a Car
      Properties: color, brand, speed
      Methods: start(), stop()
*/

// ======================= OBJECT CREATION =======================

// 1. Object Literal (most common)
let car = {
    brand: "Toyota",
    color: "Red",
    speed: 120,
    start: function() {
        console.log(this.brand + " started");
    }
};

console.log("Car Object:", car);
// Output: Car Object: { brand: 'Toyota', color: 'Red', speed: 120, start: [Function: start] }

// Accessing properties
console.log("Car Brand:", car.brand); // Dot notation
// Output: Car Brand: Toyota

console.log("Car Color:", car["color"]); // Bracket notation
// Output: Car Color: Red

// Calling a method
car.start();
// Output: Toyota started

// ======================= ADDING & MODIFYING PROPERTIES =======================
car.model = "Corolla"; // Add new property
console.log("Updated Car:", car);
// Output: Updated Car: { brand: 'Toyota', color: 'Red', speed: 120, start: [Function], model: 'Corolla' }

car.speed = 150; // Modify property
console.log("Modified Speed:", car.speed);
// Output: Modified Speed: 150

// ======================= DELETING PROPERTIES =======================
delete car.color;
console.log("After deleting color:", car);
// Output: After deleting color: { brand: 'Toyota', speed: 150, start: [Function], model: 'Corolla' }

// ======================= OBJECT METHODS =======================
/*
    Methods are functions inside objects
    - 'this' keyword refers to the object itself
*/

let person = {
    name: "Alice",
    age: 25,
    greet: function() {
        console.log("Hello, I am " + this.name + " and I am " + this.age + " years old");
    },
    isAdult: function() {
        return this.age >= 18;
    }
};

person.greet();
// Output: Hello, I am Alice and I am 25 years old

console.log("Is Adult?", person.isAdult());
// Output: Is Adult? true

// ======================= OBJECT ITERATION =======================

// Using for...in to iterate over properties
console.log("Iterating object properties:");
for (let key in person) {
    console.log(key + ":", person[key]);
}

/*
Output:
name: Alice
age: 25
greet: function() { ... }
isAdult: function() { ... }
*/

// Object.keys → array of property names
console.log("Keys:", Object.keys(person));
// Output: Keys: [ 'name', 'age', 'greet', 'isAdult' ]

// Object.values → array of property values
console.log("Values:", Object.values(person));
// Output: Values: [ 'Alice', 25, [Function: greet], [Function: isAdult] ]

// Object.entries → array of [key, value] pairs
console.log("Entries:", Object.entries(person));
/*
Output:
Entries: [
  [ 'name', 'Alice' ],
  [ 'age', 25 ],
  [ 'greet', [Function: greet] ],
  [ 'isAdult', [Function: isAdult] ]
]
*/

// ======================= NESTED OBJECTS =======================
let student = {
    name: "Bob",
    marks: {
        math: 90,
        science: 85
    },
    hobbies: ["reading", "gaming"]
};

console.log("Student Object:", student);
// Output: Student Object: { name: 'Bob', marks: { math: 90, science: 85 }, hobbies: [ 'reading', 'gaming' ] }

console.log("Math Marks:", student.marks.math);
// Output: Math Marks: 90
console.log("First Hobby:", student.hobbies[0]);
// Output: First Hobby: reading

// ======================= OBJECT REFERENCE =======================
let obj1 = { value: 10 };
let obj2 = obj1; // Reference copy
obj2.value = 20;

console.log("obj1:", obj1); // Output: obj1: { value: 20 }
console.log("obj2:", obj2); // Output: obj2: { value: 20 }

// To clone object (shallow copy)
let obj3 = { ...obj1 };
obj3.value = 30;
console.log("obj1 after clone:", obj1); // Output: { value: 20 }
console.log("obj3 after clone:", obj3); // Output: { value: 30 }

// ======================= CONST OBJECT =======================
/*
    - Declaring object with const does NOT make it immutable
    - You can modify properties, but cannot reassign the variable
*/

const company = { name: "TechCorp", employees: 100 };
company.employees = 120; // ✅ Works
console.log(company); // Output: { name: 'TechCorp', employees: 120 }

// company = { name: "NewCorp" }; // ❌ Error: Assignment to constant variable

// ======================= OBJECT FROM ONE FILE TO ANOTHER =======================
/*
    In modern JavaScript (ES6 Modules), you can export an object from one file
    and import it in another.

    Example:

    // file: data.js
    export const car = { brand: "Honda", color: "Blue" };

    // file: main.js
    import { car } from './data.js';
    console.log(car.brand); // Output: Honda
*/

// ======================= DIFFERENCE FROM JAVA =======================
/*
    1. Java Objects:
        - Must be created from a class
        - Properties (fields) and methods are defined in class
        - Strongly typed: must declare types

    2. JavaScript Objects:
        - Can be created directly (object literal)
        - Can dynamically add/remove properties
        - Weakly typed: properties can hold any type
        - Functions can exist as methods inside objects
*/

// ======================= SUMMARY =======================
/*
    - Objects store key-value pairs
    - Properties can be accessed/modified/deleted
    - Methods are functions inside objects
    - 'this' refers to the object calling the method
    - Nested objects and arrays allowed
    - Object reference: assignment copies reference
    - Const object can still be modified
    - Objects can be exported/imported across JS files (ES6 modules)
    - Unlike Java, JS objects don’t require a class
*/
