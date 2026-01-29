// node src/JavaScript/Training/Tests/ClassImplementation.js
/********************************************************************
 * This file demonstrates usage of ClassUtilities.js concepts
 ********************************************************************/

// Import the MyClass from demo.js
import MyClass from '../Utils/ClassUtilities.js';

// 1. & 2. Public and private fields and methods
console.log("=== Public and Private Fields and Methods ===");
const myObj = new MyClass();
console.log("Public variable: ", myObj.publicVar); // Accessible
// console.log(myObj.#privateVar); // This would throw an error because it's private

myObj.publicMethod(); // Works
// myObj.#privateMethod(); // This would throw an error
myObj.callPrivateMethod(); // Calls the private method via a public method

// 3. Reusable method: Armstrong number check
console.log("\n=== Armstrong Number Check ===");
const num = 153;
console.log(`Is ${num} an Armstrong number? `, myObj.isArmstrong(num));

// 4. Fetch user input from console (Node.js)
// We'll wrap the async call in an async function.
async function getUserInputExample() {
    console.log("\n=== Get User Input ===");
    const userInput = await myObj.getUserInput("Enter a number to check if it's Armstrong: ");
    const userNum = parseInt(userInput);
    console.log(`Is ${userNum} an Armstrong number? `, myObj.isArmstrong(userNum));
}

// 5. Abstract class and method implementation
console.log("\n=== Abstract Method Implementation ===");
class DerivedClass extends MyClass {
    // Override the abstract method
    abstractMethod() {
        console.log("Abstract method implemented in DerivedClass");
    }
}

const derivedObj = new DerivedClass();
derivedObj.abstractMethod(); // Should not throw error now

// 6. Interface implementation
console.log("\n=== Interface Method Implementation ===");
class InterfaceImpl extends MyClass {
    // Override the interface method
    interfaceMethod() {
        console.log("Interface method implemented in InterfaceImpl");
    }
}

const interfaceImpl = new InterfaceImpl();
interfaceImpl.interfaceMethod(); // Should not throw error now

// 7. Encapsulation example
console.log("\n=== Encapsulation Example ===");
const encapsulatedObj = MyClass.createEncapsulatedObject();
console.log("Private variable via getter: ", encapsulatedObj.getPrivateVariable());
encapsulatedObj.setPrivateVariable("New value set from main.js");
console.log("After setting: ", encapsulatedObj.getPrivateVariable());

// Call the async function to get user input
// Note: We are in an ES module, so we can use top-level await if Node.js version supports it.
// But to be safe, we'll use an async function and call it.
getUserInputExample().catch(console.error);