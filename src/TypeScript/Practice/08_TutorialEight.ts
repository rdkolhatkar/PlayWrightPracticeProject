// If-Else & Ternery Operator in TypeScript

// ============================================================
// If-Else & Ternary Operator in TypeScript
// ============================================================

// Conditional statements are used to make decisions in a program.
// Based on whether a condition evaluates to true or false,
// different blocks of code can be executed.

// TypeScript uses the same conditional statements as JavaScript:
//
// 1. if
// 2. if-else
// 3. if-else-if ladder
// 4. nested if
// 5. ternary operator (? :)
//
// ============================================================
// Example 1: Simple if Statement
// ============================================================

// The code inside the if block executes only when
// the condition evaluates to true.

let age: number = 20;

if (age >= 18) {
    console.log("You are eligible to vote");
}

// Output:
// You are eligible to vote


// ============================================================
// Example 2: if-else Statement
// ============================================================

// If the condition is true, the first block executes.
// Otherwise, the else block executes.

let marks: number = 35;

if (marks >= 40) {
    console.log("Student Passed");
} else {
    console.log("Student Failed");
}

// Output:
// Student Failed


// ============================================================
// Example 3: if-else-if Ladder
// ============================================================

// Used when multiple conditions need to be checked.

let score: number = 85;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}

// Output:
// Grade B


// ============================================================
// Example 4: Nested if Statement
// ============================================================

// An if statement inside another if statement.

let userAge: number = 25;
let hasLicense: boolean = true;

if (userAge >= 18) {

    // Executes only when age condition is true
    if (hasLicense) {
        console.log("You can drive");
    } else {
        console.log("You need a driving license");
    }

} else {
    console.log("You are underage");
}

// Output:
// You can drive


// ============================================================
// Example 5: Using Logical Operators
// ============================================================

// && (AND)
// Both conditions must be true.

let username: string = "admin";
let password: string = "admin123";

if (username === "admin" && password === "admin123") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}

// Output:
// Login Successful


// ============================================================
// Example 6: Using OR Operator
// ============================================================

// || (OR)
// At least one condition must be true.

let isAdmin: boolean = false;
let isManager: boolean = true;

if (isAdmin || isManager) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

// Output:
// Access Granted


// ============================================================
// Example 7: Using NOT Operator
// ============================================================

// ! (NOT)
// Reverses a boolean value.

let isBlocked: boolean = false;

if (!isBlocked) {
    console.log("User is Active");
}

// Output:
// User is Active


// ============================================================
// Ternary Operator
// ============================================================

// Syntax:
//
// condition ? expressionIfTrue : expressionIfFalse
//
// Ternary operator is a shorthand version of if-else.
// It is useful when assigning values based on a condition.


// ============================================================
// Example 8: Basic Ternary Operator
// ============================================================

let temperature: number = 30;

let weatherMessage =
    temperature > 25
        ? "Hot Weather"
        : "Cool Weather";

console.log(weatherMessage);

// Output:
// Hot Weather


// ============================================================
// Example 9: if-else vs Ternary Operator
// ============================================================

// Traditional if-else

let salary: number = 50000;
let bonus: string;

if (salary >= 50000) {
    bonus = "Eligible";
} else {
    bonus = "Not Eligible";
}

console.log(bonus);

// Same logic using ternary operator

let bonusStatus =
    salary >= 50000
        ? "Eligible"
        : "Not Eligible";

console.log(bonusStatus);

// Output:
// Eligible


// ============================================================
// Example 10: Ternary Operator with Boolean Values
// ============================================================

let isLoggedIn: boolean = true;

let loginMessage =
    isLoggedIn
        ? "Welcome User"
        : "Please Login";

console.log(loginMessage);

// Output:
// Welcome User


// ============================================================
// Example 11: Ternary Operator with Function Return
// ============================================================

function checkEligibility(age: number): string {

    return age >= 18
        ? "Eligible"
        : "Not Eligible";
}

console.log(checkEligibility(25));
console.log(checkEligibility(15));

// Output:
// Eligible
// Not Eligible


// ============================================================
// Example 12: Nested Ternary Operator
// ============================================================

// Nested ternaries are possible but should be used carefully
// because they can reduce readability.

let percentage: number = 72;

let result =
    percentage >= 90
        ? "Grade A"
        : percentage >= 75
            ? "Grade B"
            : percentage >= 60
                ? "Grade C"
                : "Grade D";

console.log(result);

// Output:
// Grade C


// ============================================================
// Example 13: Ternary Operator with Union Types
// ============================================================

let value: string | number = "TypeScript";

let valueType =
    typeof value === "string"
        ? "String Value"
        : "Number Value";

console.log(valueType);

// Output:
// String Value


// ============================================================
// Example 14: Real-World Example - User Role Check
// ============================================================

let role: string = "Admin";

if (role === "Admin") {
    console.log("Full Access");
} else if (role === "Manager") {
    console.log("Limited Access");
} else {
    console.log("Read Only Access");
}

// Output:
// Full Access


// ============================================================
// Example 15: Real-World Example - Discount Calculation
// ============================================================

let purchaseAmount: number = 1200;

let discount =
    purchaseAmount >= 1000
        ? purchaseAmount * 0.10
        : 0;

console.log("Discount:", discount);

// Output:
// Discount: 120


// ============================================================
// Example 16: Real-World Example - Form Validation
// ============================================================

let email: string = "user@example.com";

let validationMessage =
    email.includes("@")
        ? "Valid Email"
        : "Invalid Email";

console.log(validationMessage);

// Output:
// Valid Email


// ============================================================
// Example 17: Combining Multiple Conditions
// ============================================================

let experience: number = 5;
let skillsMatched: boolean = true;

if (experience >= 3 && skillsMatched) {
    console.log("Candidate Shortlisted");
} else {
    console.log("Candidate Rejected");
}

// Output:
// Candidate Shortlisted


// ============================================================
// Example 18: Advanced Ternary with Function Calls
// ============================================================

function calculateTax(income: number): number {

    return income > 1000000
        ? income * 0.30
        : income * 0.20;
}

console.log(calculateTax(1200000));

// Output:
// 360000


// ============================================================
// Example 19: Default Value Using Ternary
// ============================================================

let userName: string | null = null;

let displayName =
    userName
        ? userName
        : "Guest User";

console.log(displayName);

// Output:
// Guest User


// ============================================================
// Example 20: Best Practice Example
// ============================================================

// Use if-else when:
//
// 1. Multiple conditions exist
// 2. Complex business logic exists
// 3. Multiple statements must execute
//
// Use ternary when:
//
// 1. Simple true/false assignment
// 2. Returning a value
// 3. Keeping code concise

let accountBalance: number = 1000;

// Good use of ternary operator
let accountStatus =
    accountBalance > 0
        ? "Active"
        : "Inactive";

console.log(accountStatus);

// Output:
// Active


// ============================================================
// Important Notes
// ============================================================

// 1. Ternary operator returns a value.
// 2. if-else executes code blocks.
// 3. Nested ternaries should be avoided when readability suffers.
// 4. Use meaningful conditions for better maintainability.
// 5. Prefer if-else for complex business logic.
// 6. Prefer ternary for simple assignments and return values.