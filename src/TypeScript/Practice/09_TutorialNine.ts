// ============================================================================
// Switch Case Statements in TypeScript
// Complete Guide: Basic to Advanced
// File Name: test.ts
// ============================================================================

// Switch statement is used when a single expression needs to be
// compared against multiple possible values.
//
// Syntax:
//
// switch(expression) {
//     case value1:
//         // code
//         break;
//
//     case value2:
//         // code
//         break;
//
//     default:
//         // code
// }
//
// Important:
// 1. Expression is evaluated only once.
// 2. break prevents fall-through.
// 3. default executes when no match is found.
// 4. Works with numbers, strings, enums, and union types.

// ============================================================================
// Example 1: Basic Switch Statement
// ============================================================================

console.log("\nExample 1");

let dayNumber: number = 3;

switch (dayNumber) {
case 1:
    console.log("Monday");
    break;

case 2:
    console.log("Tuesday");
    break;

case 3:
    console.log("Wednesday");
    break;

default:
    console.log("Invalid Day");

}

// Output:
// Wednesday

// ============================================================================
// Example 2: Switch with Strings
// ============================================================================

console.log("\nExample 2");

let browser: string = "Chrome";

switch (browser) {
case "Chrome":
    console.log("Google Browser");
    break;

case "Firefox":
    console.log("Mozilla Browser");
    break;

case "Edge":
    console.log("Microsoft Browser");
    break;

default:
    console.log("Unknown Browser");

}

// Output:
// Google Browser

// ============================================================================
// Example 3: Default Case
// ============================================================================

console.log("\nExample 3");

let month: number = 15;

switch (month) {
case 1:
    console.log("January");
    break;

case 2:
    console.log("February");
    break;

default:
    console.log("Month Not Found");
}


// Output:
// Month Not Found

// ============================================================================
// Example 4: Multiple Cases Sharing Same Logic
// ============================================================================

console.log("\nExample 4");

let grade: string = "B";

switch (grade) {
case "A":
case "B":
case "C":
    console.log("Pass");
    break;

case "D":
case "F":
    console.log("Fail");
    break;

default:
    console.log("Invalid Grade");

}

// Output:
// Pass

// ============================================================================
// Example 5: Fall Through
// ============================================================================

console.log("\nExample 5");

let value: number = 1;

switch (value) {
case 1:
    console.log("One");

case 2:
    console.log("Two");

case 3:
    console.log("Three");
    break;

}

// Output:
// One
// Two
// Three

// ============================================================================
// Example 6: Calculator
// ============================================================================

console.log("\nExample 6");

let num1: number = 10;
let num2: number = 5;
let operator: string = "*";

switch (operator) {
case "+":
    console.log(num1 + num2);
    break;

case "-":
    console.log(num1 - num2);
    break;

case "*":
    console.log(num1 * num2);
    break;

case "/":
    console.log(num1 / num2);
    break;

default:
    console.log("Invalid Operator");
}

// Output:
// 50

// ============================================================================
// Example 7: Traffic Signal
// ============================================================================

console.log("\nExample 7");

let signal: string = "Red";

switch (signal) {
case "Red":
    console.log("Stop");
    break;

case "Yellow":
    console.log("Ready");
    break;

case "Green":
    console.log("Go");
    break;

default:
    console.log("Invalid Signal");

}

// Output:
// Stop

// ============================================================================
// Example 8: Enum Example
// ============================================================================

console.log("\nExample 8");

enum Direction {
North,
South,
East,
West
}

let direction: any = Direction.East;

switch (direction) {
case Direction.North:
    console.log("Moving North");
    break;

case Direction.South:
    console.log("Moving South");
    break;

case Direction.East:
    console.log("Moving East");
    break;

case Direction.West:
    console.log("Moving West");
    break;

}

// Output:
// Moving East

// ============================================================================
// Example 9: User Roles
// ============================================================================

console.log("\nExample 9");

let role: string = "Admin";

switch (role) {
case "Admin":
    console.log("Full Access");
    break;

case "Manager":
    console.log("Limited Access");
    break;

case "User":
    console.log("Basic Access");
    break;

default:
    console.log("No Access");

}

// Output:
// Full Access

// ============================================================================
// Example 10: Seasons
// ============================================================================

console.log("\nExample 10");

let currentMonth: string = "December";

switch (currentMonth) {
case "December":
case "January":
case "February":
    console.log("Winter");
    break;
case "March":
case "April":
case "May":
    console.log("Summer");
    break;
default:
    console.log("Other Season");

}

// Output:
// Winter

// ============================================================================
// Example 11: typeof with Union Types
// ============================================================================

console.log("\nExample 11");

let input: string | number = "Hello";

switch (typeof input) {
case "string":
    console.log("Input is String");
    break;

case "number":
    console.log("Input is Number");
    break;

}

// Output:
// Input is String

// ============================================================================
// Example 12: Nested Switch
// ============================================================================

console.log("\nExample 12");

let department = "IT";
let designation = "Developer";

switch (department) {
case "IT":
    switch (designation) {
        case "Developer":
            console.log("Writes Code");
            break;
        case "Tester":
            console.log("Tests Applications");
            break;
    }
    break;
default:
    console.log("Unknown Department");

}

// Output:
// Writes Code

// ============================================================================
// Example 13: Function Returning Value
// ============================================================================

console.log("\nExample 13");

function getDay(day: number): string {

switch (day) {
    case 1:
        return "Monday";

    case 2:
        return "Tuesday";

    case 3:
        return "Wednesday";

    default:
        return "Invalid Day";
}

}

console.log(getDay(2));

// Output:
// Tuesday

// ============================================================================
// Example 14: API Routing Simulation
// ============================================================================

console.log("\nExample 14");

let apiMethod = "POST";

switch (apiMethod) {
case "GET":
    console.log("Fetching Data");
    break;
case "POST":
    console.log("Creating Data");
    break;

case "PUT":
    console.log("Updating Data");
    break;

case "DELETE":
    console.log("Deleting Data");
    break;

default:
    console.log("Unsupported Method");
}

// Output:
// Creating Data

// ============================================================================
// Example 15: Discriminated Union
// ============================================================================

console.log("\nExample 15");

type Circle = {
type: "circle";
radius: number;
};

type Rectangle = {
type: "rectangle";
width: number;
height: number;
};

type Shape = Circle | Rectangle;

function calculateArea(shape: Shape): number {

switch (shape.type) {
    case "circle":
        return Math.PI * shape.radius * shape.radius;

    case "rectangle":
        return shape.width * shape.height;
}

}

console.log(
calculateArea({
type: "circle",
radius: 5
})
);

// Output:
// 78.53981633974483

// ============================================================================
// Example 16: Exhaustive Checking
// ============================================================================

console.log("\nExample 16");

type Status =
| "Pending"
| "Approved"
| "Rejected";

function processStatus(status: Status): string {
switch (status) {
    case "Pending":
        return "Waiting";

    case "Approved":
        return "Success";

    case "Rejected":
        return "Failure";

    default:
        const exhaustiveCheck: never = status;
        return exhaustiveCheck;
}

}

console.log(processStatus("Approved"));

// Output:
// Success

// ============================================================================
// Example 17: Payment Gateway
// ============================================================================

console.log("\nExample 17");

let paymentMethod = "UPI";

switch (paymentMethod) {
case "UPI":
    console.log("Processing UPI Payment");
    break;
case "CARD":
    console.log("Processing Card Payment");
    break;
case "NETBANKING":
    console.log("Processing Net Banking");
    break;
default:
    console.log("Unsupported Payment Method");
}

// Output:
// Processing UPI Payment

// ============================================================================
// Example 18: Environment Configuration
// ============================================================================

console.log("\nExample 18");

let environment = "PROD";

switch (environment) {
case "DEV":
    console.log("Development Server");
    break;
case "QA":
    console.log("Testing Server");
    break;
case "PROD":
    console.log("Production Server");
    break;
}

// Output:
// Production Server

// ============================================================================
// Example 19: switch(true) Pattern
// ============================================================================

console.log("\nExample 19");

let score: number = 87;

switch (true) {

case score >= 90:
    console.log("Grade A");
    break;

case score >= 80:
    console.log("Grade B");
    break;

case score >= 70:
    console.log("Grade C");
    break;

default:
    console.log("Grade D");

}

// Output:
// Grade B

// ============================================================================
// Example 20: Best Practice Example
// ============================================================================

console.log("\nExample 20");

let accountStatus = "ACTIVE";

switch (accountStatus) {

case "ACTIVE":
    console.log("Account Active");
    break;

case "INACTIVE":
    console.log("Account Inactive");
    break;

default:
    console.log("Unknown Status");

}

// Output:
// Account Active

// ============================================================================
// Summary
// ============================================================================

// Covered Topics:
//
// 1. Basic Switch
// 2. String Switch
// 3. Default Case
// 4. Multiple Cases
// 5. Fall Through
// 6. Calculator
// 7. Traffic Signal
// 8. Enums
// 9. Role Authorization
// 10. Seasons
// 11. Union Types
// 12. Nested Switch
// 13. Functions
// 14. API Routing
// 15. Discriminated Unions
// 16. Exhaustive Checking
// 17. Payment Gateway
// 18. Environment Configuration
// 19. switch(true)
// 20. Best Practices
//
