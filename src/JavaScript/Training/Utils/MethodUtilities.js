/********************************************************************
 * This file contains:
 * 1. Public & Private variables
 * 2. Public & Private methods
 * 3. Reusable utility methods (Armstrong, Palindrome, Prime)
 * 4. Console input handling
 * 5. Abstract class simulation
 * 6. Interface simulation
 * 7. Encapsulation example
 ********************************************************************/

/* ================================================================
   1) PUBLIC & PRIVATE VARIABLES + METHODS
   ================================================================ */

class Person {
    // PUBLIC VARIABLE
    // In JavaScript, variables declared directly are PUBLIC by default
    name;

    // PRIVATE VARIABLE (ES2020 feature)
    // In Java: private int age;
    // In JS: prefix # makes it private
    #age;

    constructor(name, age) {
        this.name = name;   // public
        this.#age = age;    // private
    }

    // PUBLIC METHOD
    greet() {
        console.log(`Hello, my name is ${this.name}`);
        this.#showAge(); // private method called inside class
    }

    // PRIVATE METHOD
    #showAge() {
        console.log(`My age is ${this.#age}`);
    }
}

/* ================================================================
   2) REUSABLE UTILITY METHODS
   ================================================================ */

class NumberUtils {

    // Armstrong Number
    // 153 => 1³ + 5³ + 3³ = 153
    static isArmstrong(num) {
        let digits = num.toString().split("");
        let power = digits.length;

        let sum = digits.reduce((acc, d) => {
            return acc + Math.pow(Number(d), power);
        }, 0);

        return sum === num;
    }

    // Palindrome Number
    static isPalindrome(num) {
        let str = num.toString();
        return str === str.split("").reverse().join("");
    }

    // Prime Number
    static isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
}

/* ================================================================
   3) CONSOLE INPUT HANDLING CLASS
   ================================================================ */

import readline from "readline";

class ConsoleInput {

    static readInput(question) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return new Promise((resolve) => {
            rl.question(question, (answer) => {
                rl.close();
                resolve(answer);
            });
        });
    }
}

/* ================================================================
   4) ABSTRACT CLASS (SIMULATION)
   ================================================================ */

// JavaScript does NOT have abstract keyword
// We simulate it using runtime checks

class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Abstract class cannot be instantiated");
        }
    }

    // Abstract method
    area() {
        throw new Error("Method 'area()' must be implemented");
    }
}

/* ================================================================
   5) INTERFACE (SIMULATION)
   ================================================================ */

// JavaScript does NOT support interfaces like Java
// We simulate interface using class with method contracts

class PaymentGateway {
    pay(amount) {
        throw new Error("pay() method must be implemented");
    }
}

/* ================================================================
   6) ENCAPSULATION EXAMPLE
   ================================================================ */

class BankAccount {

    // PRIVATE VARIABLE
    #balance = 0;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    // PUBLIC METHOD (Controlled access)
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Insufficient balance");
        }
    }

    getBalance() {
        return this.#balance;
    }
}
/* ================================================================
   INHERITANCE – PARENT CLASS (demo.js)
   ================================================================ */

class Vehicle {

    // PUBLIC VARIABLE
    type;

    constructor(type) {
        this.type = type;
    }

    // PUBLIC METHOD
    start() {
        console.log("Vehicle is starting...");
    }

    // METHOD TO BE OVERRIDDEN
    getDetails() {
        return `This is a ${this.type}`;
    }
}


/* ================================================================
   EXPORTS
   ================================================================ */

export {
    Person,
    NumberUtils,
    ConsoleInput,
    Shape,
    PaymentGateway,
    BankAccount,
    Vehicle   // 👈 add this to existing export list
};
