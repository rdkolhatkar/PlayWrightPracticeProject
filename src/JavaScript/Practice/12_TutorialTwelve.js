// ================================================================
// To run this file:
// node 02_Advanced_JavaScript_Tutorial.js
// ================================================================

console.log("========= ADVANCED JAVASCRIPT SESSION =========");

/*
=================================================================
SECTION 1: TEMPLATE LITERALS (BACKTICKS)
=================================================================

Template Literals use backticks (` `)
They allow:
1. String interpolation (variables inside strings)
2. Multi-line strings
3. Expression evaluation

JAVA COMPARISON:
----------------
Java:
String name = "John";
System.out.println("Hello " + name);

JavaScript (Old):
console.log("Hello " + name);

JavaScript (Modern):
console.log(`Hello ${name}`);
*/

// Basic example
let name = "Ratnakar";
let experience = 5;

console.log("Hello " + name + ", Experience: " + experience);
// Output: Hello Ratnakar, Experience: 5

console.log(`Hello ${name}, Experience: ${experience}`);
// Output: Hello Ratnakar, Experience: 5

// Expression inside template literal
console.log(`Experience in months: ${experience * 12}`);
// Output: Experience in months: 60

// Multi-line string
let message = `
Hello Team,
Welcome to JavaScript Session.
Trainer: ${name}
`;

console.log(message);

/*
JAVA:
String message = "Hello Team\nWelcome...";
JS is cleaner and readable.
*/

console.log("------------------------------------------------");

/*
=================================================================
SECTION 2: DESTRUCTURING
=================================================================

Destructuring allows extracting values from arrays/objects
into variables easily.

JAVA:
No direct destructuring.
You manually do:
int a = arr[0];
int b = arr[1];
*/

// ARRAY DESTRUCTURING
let scores = [90, 80, 70];

let [math, science, english] = scores;

console.log(math);     // 90
console.log(science);  // 80
console.log(english);  // 70

// Skipping values
let [, second] = scores;
console.log(second); // 80

// OBJECT DESTRUCTURING
let employee = {
    empId: 101,
    empName: "Alice",
    role: "QA Engineer"
};

let { empId, empName, role } = employee;

console.log(empId);   // 101
console.log(empName); // Alice
console.log(role);    // QA Engineer

/*
JAVA:
Employee e = new Employee();
int id = e.getEmpId();

JS:
Direct unpacking
*/

console.log("------------------------------------------------");

/*
=================================================================
SECTION 3: ERROR HANDLING (try...catch...finally)
=================================================================

Used to handle runtime errors gracefully.

JAVA:
try {
} catch(Exception e) {
} finally {
}

JavaScript:
Same concept, simpler syntax
*/

try {
    let result = 10 / 0;
    console.log(result); // Infinity (NO error in JS)
    
    // Force error
    JSON.parse("{ invalid json }");
} catch (error) {
    console.log("Error caught:", error.message);
} finally {
    console.log("Finally block always runs");
}

/*
Output:
Error caught: Unexpected token i...
Finally block always runs
*/

console.log("------------------------------------------------");

/*
=================================================================
SECTION 4: PROMISES (BASIC → ADVANCED)
=================================================================

Promise represents a value that will be available
NOW, LATER, or NEVER.

States:
1. Pending
2. Fulfilled
3. Rejected

JAVA COMPARISON:
----------------
Java uses:
- Future
- CompletableFuture
*/

// Creating a Promise
let promiseExample = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Data fetched successfully");
    } else {
        reject("Failed to fetch data");
    }
});

promiseExample
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

/*
.then() -> success
.catch() -> failure
*/

// Promise with delay (API simulation)
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("API Data received");
        }, 2000);
    });
}

fetchData().then(data => console.log(data));

console.log("------------------------------------------------");

/*
=================================================================
SECTION 5: ASYNC / AWAIT
=================================================================

Cleaner way to write promises.
Looks synchronous but is asynchronous.

JAVA COMPARISON:
----------------
Java:
CompletableFuture.thenApply()

JS:
async / await
*/

async function getData() {
    try {
        let data = await fetchData();
        console.log("Async/Await:", data);
    } catch (error) {
        console.log(error);
    }
}

getData();

/*
await pauses execution until promise resolves
ONLY works inside async function
*/

console.log("------------------------------------------------");

/*
=================================================================
SECTION 6: CLASSES, CONSTRUCTORS & METHODS
=================================================================

JavaScript classes are syntactic sugar over prototypes.

JAVA:
class Person {
   String name;
   Person(String name) { this.name = name; }
}

JS:
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I am ${this.name}, age ${this.age}`);
    }
}

let p1 = new Person("John", 30);
p1.introduce();
// Output: Hi, I am John, age 30

console.log("------------------------------------------------");

/*
=================================================================
SECTION 7: ENCAPSULATION
=================================================================

Encapsulation = Hiding data

Java:
private variables + getters/setters

JavaScript:
# private fields (ES2020)
*/

class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500

// console.log(account.#balance); ❌ Error (private)

console.log("------------------------------------------------");

/*
=================================================================
SECTION 8: INHERITANCE
=================================================================

Java:
extends keyword

JavaScript:
extends keyword (same)
*/

class Employee {
    constructor(name) {
        this.name = name;
    }

    work() {
        console.log(`${this.name} is working`);
    }
}

class Developer extends Employee {
    constructor(name, language) {
        super(name);
        this.language = language;
    }

    code() {
        console.log(`${this.name} codes in ${this.language}`);
    }
}

let dev = new Developer("Alice", "JavaScript");
dev.work(); // Alice is working
dev.code(); // Alice codes in JavaScript

console.log("------------------------------------------------");

/*
=================================================================
SECTION 9: POLYMORPHISM
=================================================================

Same method name, different behavior

Java:
Method Overriding

JS:
Method Overriding
*/

class Tester extends Employee {
    work() {
        console.log(`${this.name} is testing the application`);
    }
}

let tester = new Tester("Bob");
tester.work(); 
// Output: Bob is testing the application

console.log("------------------------------------------------");

/*
=================================================================
SECTION 10: MODULES (import / export)
=================================================================

Used to split code into reusable files

JAVA:
package + import

JS:
export / import

NOTE:
Modules work when:
- File type is .mjs OR
- package.json has "type": "module"
*/

/*
---------- file: mathUtils.js ----------
export function add(a, b) {
    return a + b;
}

export const PI = 3.14;
*/

/*
---------- file: main.js ----------
import { add, PI } from "./mathUtils.js";

console.log(add(2,3));
console.log(PI);
*/

console.log(`
Modules Demo:
- export -> makes code public
- import -> uses exported code
`);

console.log("========= END OF SESSION =========");

/*
=================================================================
FINAL COMPARISON SUMMARY (JAVA vs JAVASCRIPT)
=================================================================

Java:
- Compiled
- Strongly typed
- Verbose
- Class-based OOP only

JavaScript:
- Interpreted
- Dynamically typed
- Less boilerplate
- Prototype-based + Class syntax

=================================================================
*/
