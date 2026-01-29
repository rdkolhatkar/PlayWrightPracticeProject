// 1. Public and private fields in a class
import readline from "readline";
class MyClass {
    // Public field
    publicVar = "I am public";

    // Private field (using #)
    #privateVar = "I am private";

    // Constructor
    constructor() {
        console.log("MyClass constructor called");
    }

    // 2. Public method
    publicMethod() {
        console.log("Public method called");
        console.log("Accessing public variable: ", this.publicVar);
        console.log("Accessing private variable: ", this.#privateVar);
    }

    // Private method (using #)
    #privateMethod() {
        console.log("Private method called");
    }

    // A method to call the private method
    callPrivateMethod() {
        this.#privateMethod();
    }

    // 3. Reusable method: Check if a number is an Armstrong number
    // An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
    // Example: 153 = 1^3 + 5^3 + 3^3 = 153
    isArmstrong(number) {
        let sum = 0;
        let temp = number;
        const digits = number.toString().length;

        while (temp > 0) {
            let remainder = temp % 10;
            sum += Math.pow(remainder, digits);
            temp = Math.floor(temp / 10);
        }

        return number === sum;
    }

    // 4. Fetching user input from console (Node.js environment)
    // We'll create a method that uses the readline module to get user input.
    // Note: This method is asynchronous.
    /* =========================================================
       USER INPUT METHOD (ES MODULE SAFE)
       ========================================================= */
    async getUserInput(question) {
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
    // 5. Abstract class simulation
    // JavaScript doesn't have abstract classes, but we can throw errors if the method is not implemented.
    // We'll create a method that must be overridden.
    abstractMethod() {
        throw new Error("Abstract method must be implemented in the derived class");
    }

    // 6. Interface simulation
    // We can't create interfaces in JavaScript, but we can use classes and throw errors if methods are not implemented.
    // We'll create a method that must be implemented by the class that implements the interface.
    interfaceMethod() {
        throw new Error("Interface method must be implemented");
    }

    // 7. Encapsulation example
    // We'll use a closure to create private variables and expose only public methods.
    // This is the module pattern.
    static createEncapsulatedObject() {
        let privateVariable = "I am encapsulated and private";

        return {
            getPrivateVariable: function() {
                return privateVariable;
            },
            setPrivateVariable: function(value) {
                privateVariable = value;
            }
        };
    }
}

// Export the class so it can be used in other files
export default MyClass;