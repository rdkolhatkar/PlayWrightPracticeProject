# JavaScript Import/Export & OOP – Beginner to Advanced (Java Comparison Guide)

> 📘 **Purpose**: This README explains **JavaScript Modules (Import/Export)** and **OOP concepts** from **absolute beginner → advanced**, with **line‑by‑line commented code**, **outputs**, and **clear comparison with Java**.
>
> It is written so that:
>
> * **Freshers** understand *what* and *why*
> * **Experienced Java developers** understand *how JavaScript differs from Java*

---

## Table of Contents

1. Why Modules & OOP Exist
2. JavaScript Modules Overview
3. CommonJS (`module.exports`) – with Java Comparison
4. ES Modules (`export` / `import`) – with Java Comparison
5. Default vs Named Export (Deep Explanation)
6. Advanced Import/Export Patterns
7. OOP Fundamentals (Java vs JavaScript)
8. Classes & Objects (Line-by-Line)
9. Encapsulation & Access Modifiers
10. Inheritance (Java vs JS)
11. Polymorphism (Compile-time vs Runtime)
12. Abstraction
13. Abstract Classes (Java vs JS Pattern)
14. Interfaces (Java vs JS Simulation)
15. Complete Real-World OOP Example
16. Memory Management in JavaScript (Important)
17. Java vs JavaScript – Summary Table

---

## 1. Why Modules & OOP Exist

### Problem without modules & OOP

* All code in one file
* Global variables clash
* Difficult to maintain

### Solution

* **Modules** → split code into files
* **OOP** → organize code around real-world entities

---

## 2. JavaScript Modules Overview

In Java:

```java
import java.util.List;
```

In JavaScript:

```js
import { add } from './math.js';
```

📌 **Key difference**:

* Java has **built-in module system**
* JavaScript added modules later (CommonJS, ES Modules)

---

## 3. CommonJS – `module.exports` (Node.js)

### Why CommonJS exists

* JavaScript originally had **no module system**
* Node.js introduced **CommonJS**

### Exporting Code

**math.js**

```js
// Define a function to add two numbers
function add(a, b) {
  // return sends value back to caller
  return a + b;
}

// Define another function
function subtract(a, b) {
  return a - b;
}

// module.exports decides what is visible outside this file
// Similar to public methods in Java
module.exports = {
  add,      // exposes add()
  subtract // exposes subtract()
};

// No output here because nothing is executed
```

### Importing Code

**app.js**

```js
// require loads exported object from math.js
const math = require('./math');

// Calling exported methods
console.log(math.add(10, 5));      // Output: 15
console.log(math.subtract(10, 5)); // Output: 5
```

### Output

```
15
5
```

### Java Comparison

```java
public class MathUtil {
    public static int add(int a, int b) {
        return a + b;
    }
}
```

📌 **Difference**:

* Java: compile-time linking
* CommonJS: runtime loading

---

## 4. ES Modules – `export` / `import` (Modern JS)

### Why ES Modules

* Standardized
* Works in browser & Node
* Tree-shaking support

### Named Export

**calculator.js**

```js
// export keyword makes function public
export function add(a, b) {
  return a + b; // Output depends on input
}

export function multiply(a, b) {
  return a * b;
}
```

### Importing Named Exports

**main.js**

```js
// Curly braces mean named import
import { add, multiply } from './calculator.js';

console.log(add(2, 3));       // Output: 5
console.log(multiply(2, 3)); // Output: 6
```

### Output

```
5
6
```

### Java Comparison

```java
import static Calculator.add;
```

📌 Java imports **classes**, JS imports **values**

---

## 5. Default vs Named Export (Deep)

### Default Export

**logger.js**

```js
// default means only ONE export per file
export default function log(message) {
  console.log(message); // prints message
}
```

**app.js**

```js
// Name can be anything
import log from './logger.js';

log("Hello"); // Output: Hello
```

### Output

```
Hello
```

### Java Comparison

* Java has **no default export concept**

---

## 6. Advanced Import/Export

```js
import * as utils from './calculator.js';

console.log(utils.add(4, 6)); // Output: 10
```

---

## 7. OOP Fundamentals (Java vs JS)

### OOP Pillars

1. Encapsulation
2. Inheritance
3. Polymorphism
4. Abstraction

JavaScript supports all **conceptually**, not syntactically like Java

---

## 8. Classes & Objects (Line-by-Line)

```js
// Class is a blueprint
class Person {
  // constructor runs when object is created
  constructor(name, age) {
    this.name = name; // instance variable
    this.age = age;
  }

  // method shared by all objects
  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}

// Object creation
const p1 = new Person("Ratnakar", 30);
p1.greet(); // Output: Hi, I am Ratnakar
```

### Output

```
Hi, I am Ratnakar
```

### Java Comparison

```java
class Person {
    String name;
    int age;
}
```

📌 JS has **no types**, Java does

---

## 9. Encapsulation & Access Modifiers

### Why Encapsulation

* Protect internal state

```js
class BankAccount {
  #balance = 0; // private field (cannot be accessed outside)

  deposit(amount) {
    this.#balance += amount; // controlled modification
  }

  getBalance() {
    return this.#balance; // safe access
  }
}

const acc = new BankAccount();
acc.deposit(1000);
console.log(acc.getBalance()); // Output: 1000
```

### Java Comparison

```java
private int balance;
```

---

## 10. Inheritance

```js
class Employee extends Person {
  constructor(name, age, role) {
    super(name, age); // calls parent constructor
    this.role = role;
  }

  work() {
    console.log(`${this.name} works as ${this.role}`);
  }
}

const emp = new Employee("Amit", 28, "Tester");
emp.greet(); // Output: Hi, I am Amit
emp.work();  // Output: Amit works as Tester
```

### Output

```
Hi, I am Amit
Amit works as Tester
```

---

## 11. Polymorphism

```js
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

new Animal().speak(); // Output: Animal speaks
new Dog().speak();    // Output: Dog barks
```

📌 Runtime polymorphism only (no method overloading)

---

## 12. Abstraction – WHY & HOW

### Why abstraction

* Force child classes to implement methods

```js
class Vehicle {
  start() {
    // This makes method abstract by contract
    throw new Error("start() must be implemented");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Car started");
  }
}

new Car().start(); // Output: Car started
```

### Java Comparison

```java
abstract class Vehicle {
    abstract void start();
}
```

---

## 13. Abstract Classes (Pattern)

📌 JS has **no abstract keyword**

```js
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate abstract class");
    }
  }

  area() {
    throw new Error("area() must be implemented");
  }
}
```

---

## 14. Interfaces (Java vs JS)

### Java Interface

```java
interface Payment {
    void pay();
}
```

### JavaScript Simulation

```js
class Payment {
  pay() {
    throw new Error("pay() not implemented");
  }
}
```

📌 JS uses **duck typing**

---

## 15. Real-World Example

```js
class UserService {
  createUser(name) {
    console.log(`User ${name} created`);
  }
}

class AdminService extends UserService {
  deleteUser(name) {
    console.log(`User ${name} deleted`);
  }
}

const admin = new AdminService();
admin.createUser("John");  // Output: User John created
admin.deleteUser("John");  // Output: User John deleted
```

---

## 16. Memory Management in JavaScript

### JavaScript Memory Areas

1. **Stack** – primitives, function calls
2. **Heap** – objects, arrays

```js
let x = 10;          // stack
let obj = { a: 1 }; // heap
```

### Garbage Collection

* Automatic
* Mark & Sweep algorithm

📌 Unlike Java, **no manual GC tuning**

---

## 17. Java vs JavaScript – Summary

| Feature          | Java     | JavaScript    |
| ---------------- | -------- | ------------- |
| Typing           | Static   | Dynamic       |
| Interfaces       | Yes      | No (simulate) |
| Abstract keyword | Yes      | No (pattern)  |
| Memory mgmt      | JVM GC   | JS GC         |
| Modules          | Built-in | ES/CommonJS   |

---

## ✅ Final Notes

* JavaScript is **flexible but dangerous without discipline**
* OOP in JS is **conceptual**, not enforced
* Modules + OOP = scalable applications

---

🚀 **This README is production & interview ready**
