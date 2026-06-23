// Type Assertions in TypeScript

// Type assertions are a way to tell the TypeScript compiler about the type of a variable when you have more information than it does. 
// They do not change the runtime behavior of the code, but they can help you avoid type errors and provide better type checking.

// There are two syntaxes for type assertions in TypeScript:
// 1. The "as" syntax: variable as Type
// 2. The angle-bracket syntax: <Type>variable

// Example 1: Using the "as" syntax

// Example 1: Using type assertions with a string
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
console.log(strLength); // Output: 16

// Example 2: Using type assertions with a DOM element
if (typeof document !== "undefined") {

    let myCanvas = document.getElementById("myCanvas") as HTMLCanvasElement;

    if (myCanvas) {
        let context = myCanvas.getContext("2d");
        console.log("Canvas found");
    }

} else {
    console.log("Document object not available (Node.js environment)");
}

// Example 3: Using type assertions with a union type
function getLength(value: string | number): number {
    if (typeof value === "string") {
        return (value as string).length;
    } else {
        return value as number;
    }
}

console.log(getLength("Hello")); // Output: 5
console.log(getLength(12345)); // Output: 12345 

// Example 4: Using type assertions with a custom type
interface User {
    name: string;
    age: number;
}   
let userData: any = { name: "Alice", age: 30 };
let user: User = userData as User;
console.log(user.name); // Output: Alice
console.log(user.age); // Output: 30

// Note: Type assertions should be used with caution, as they can lead to runtime errors if the asserted type is incorrect. Always ensure that the type you are asserting is accurate to avoid potential issues.

// Type assertions using the angle-bracket syntax
let someValue2: any = "This is another string";
let strLength2: number = (<string>someValue2).length;
console.log(strLength2); // Output: 24

let totalBill: any = 100;
let totalBillWithTax: number = <number>totalBill * 1.2;
console.log(totalBillWithTax); // Output: 120   

// Using type assertions with as keyword for a boolean value
let flag: any = true;
if (flag as boolean) {
    console.log("Flag is true");
}
// Using type assertions with the angle-bracket syntax for a boolean value
let flag2: any = true;
if (<boolean>flag2) {
    console.log("Flag2 is true");
}
