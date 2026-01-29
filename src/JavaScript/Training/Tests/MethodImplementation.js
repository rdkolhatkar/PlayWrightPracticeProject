/********************************************************************
 * node src/JavaScript/Training/Tests/MethodImplementation.js
 * This file demonstrates usage of demo.js concepts
 ********************************************************************/

import {
    Person,
    NumberUtils,
    ConsoleInput,
    Shape,
    PaymentGateway,
    BankAccount,
    Vehicle
} from "../Utils/MethodUtilities.js";

/* ================================================================
   1) PUBLIC vs PRIVATE VARIABLES & METHODS
   ================================================================ */

const p = new Person("Ratnakar", 30);
console.log(p.name); // ✅ public
// console.log(p.#age); ❌ ERROR – private
p.greet();

/* ================================================================
   2) REUSABLE METHODS
   ================================================================ */

console.log("153 Armstrong:", NumberUtils.isArmstrong(153));
console.log("121 Palindrome:", NumberUtils.isPalindrome(121));
console.log("17 Prime:", NumberUtils.isPrime(17));

/* ================================================================
   3) CONSOLE INPUT
   ================================================================ */

const userNumber = await ConsoleInput.readInput("Enter a number: ");
const num = Number(userNumber);

console.log("Armstrong:", NumberUtils.isArmstrong(num));

/* ================================================================
   4) ABSTRACT CLASS IMPLEMENTATION
   ================================================================ */

class Rectangle extends Shape {
    constructor(w, h) {
        super();
        this.w = w;
        this.h = h;
    }

    area() {
        return this.w * this.h;
    }
}

const rect = new Rectangle(10, 5);
console.log("Rectangle Area:", rect.area());

/* ================================================================
   5) INTERFACE IMPLEMENTATION
   ================================================================ */

class GooglePay extends PaymentGateway {
    pay(amount) {
        console.log(`Paid ₹${amount} using Google Pay`);
    }
}

const gpay = new GooglePay();
gpay.pay(500);

/* ================================================================
   6) ENCAPSULATION
   ================================================================ */

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(300);
console.log("Final Balance:", account.getBalance());

/* ================================================================
   INHERITANCE – CHILD CLASS (main.js)
   ================================================================ */

// Child class inherits Parent class from demo.js
class Car extends Vehicle {

    constructor(type, brand) {
        // super() is mandatory
        // Java: super();
        // JavaScript: super() must be first line
        super(type);
        this.brand = brand;
    }

    // OVERRIDDEN METHOD
    getDetails() {
        // Calling parent method using super
        const parentDetails = super.getDetails();
        return `${parentDetails} and the brand is ${this.brand}`;
    }

    // NEW METHOD (Child-specific)
    drive() {
        console.log(`${this.brand} car is driving`);
    }
}

/* ================================================================
   INHERITANCE USAGE
   ================================================================ */

const car = new Car("Four Wheeler", "Toyota");

car.start();               // Inherited method
car.drive();               // Child method
console.log(car.getDetails()); // Overridden method

