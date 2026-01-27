// ======================= JavaScript DATA TYPES =======================

/*
    What is a Data Type in JavaScript?

    A data type defines the type of value a variable can hold.
    It tells JavaScript:
    - What kind of data is stored
    - What operations can be performed on it

    IMPORTANT:
    JavaScript is a DYNAMICALLY TYPED language.
    This means:
    - We do NOT declare data types explicitly (like int, String in Java)
    - JavaScript automatically detects the data type at runtime
*/

// ======================= WHY JAVASCRIPT DOES NOT REQUIRE DATA TYPE DECLARATION =======================

/*
    In Java (Statically Typed Language):
        int age = 25;
        String name = "Alice";

    ❌ You MUST declare the data type before the variable.

    In JavaScript (Dynamically Typed Language):
        let age = 25;
        let name = "Alice";

    ✅ JavaScript automatically understands:
        - 25 is a Number
        - "Alice" is a String

    This behavior is called:
        TYPE INFERENCE
*/

// ======================= TYPES OF DATA TYPES IN JAVASCRIPT =======================

/*
    JavaScript data types are divided into two categories:

    1. Primitive Data Types
    2. Non-Primitive (Reference) Data Types
*/

// ======================= 1. PRIMITIVE DATA TYPES =======================

/*
    Primitive data types store a SINGLE SIMPLE VALUE.
    They are IMMUTABLE (cannot be changed directly).
*/

// -------- Number Data Type --------
let marks = 95; // Number data type
console.log("Marks:", marks); // Output: 95

/*
    Number includes:
    - Integers (10, 20)
    - Floating numbers (3.14)
    - Negative numbers (-5)
*/

// -------- String Data Type --------
let language = "JavaScript"; // String data type
console.log("Language:", language); // Output: JavaScript

/*
    Strings are written inside:
    - Double quotes ""
    - Single quotes ''
    - Backticks ``
*/

// -------- Boolean Data Type --------
let isPassed = true; // Boolean data type
console.log("Is Passed:", isPassed); // Output: true

/*
    Boolean has ONLY two values:
    - true
    - false
*/

// -------- Undefined Data Type --------
let result; // Variable declared but not assigned
console.log("Result:", result); // Output: undefined

/*
    undefined means:
    - Variable exists
    - But value is NOT assigned
*/

// -------- Null Data Type --------
let response = null; // Explicitly no value
console.log("Response:", response); // Output: null

/*
    null means:
    - Variable intentionally has no value
*/

// -------- BigInt Data Type --------
let largeValue = 9007199254740991n; // BigInt data type
console.log("Large Value:", largeValue);

/*
    BigInt is used when:
    - Number is too large for Number data type
    - 'n' suffix tells JS it is BigInt
*/

// -------- Symbol Data Type --------
let id = Symbol("uniqueId"); // Symbol data type
console.log("Symbol ID:", id);

/*
    Symbol:
    - Always unique
    - Mainly used in advanced JavaScript
*/

// ======================= 2. NON-PRIMITIVE (REFERENCE) DATA TYPES =======================

/*
    Non-primitive data types store COLLECTIONS of values.
    They are MUTABLE (can be changed).
*/

// -------- Object Data Type --------
let employee = {
    name: "Rahul",
    age: 28
}; // Object data type

console.log("Employee:", employee);

/*
    Object stores data in:
    - Key : Value pairs
*/

// -------- Array Data Type --------
let numbers = [10, 20, 30]; // Array data type
console.log("Numbers:", numbers);

/*
    Arrays are:
    - Ordered collections
    - Index-based (starts from 0)
*/

// -------- Function Data Type --------
function greet() {
    console.log("Hello!");
}

greet();

/*
    Functions are also objects in JavaScript
*/

// ======================= TYPE CHECKING USING typeof =======================

/*
    typeof operator is used to check the data type of a value
*/

console.log(typeof 10);          // number
console.log(typeof "Hello");     // string
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object (JavaScript bug)
console.log(typeof {});          // object
console.log(typeof []);          // object
console.log(typeof function(){});// function

// ======================= IMPORTANT INTERVIEW POINT =======================

/*
    Why JavaScript does NOT declare data types like Java?

    1. JavaScript is dynamically typed
    2. Faster development
    3. Less code
    4. Data type can change at runtime
*/

let value = 10;        // Number
value = "Ten";        // String
value = true;         // Boolean

console.log("Dynamic Value:", value);

/*
    In Java → ❌ NOT allowed
    In JavaScript → ✅ Allowed
*/

// ======================= SUMMARY =======================

/*
    - JavaScript automatically assigns data types
    - No need to declare data types explicitly
    - Primitive = Single value
    - Non-Primitive = Collection of values
    - typeof is used to check data type
*/
// ======================= JavaScript OPERATORS =======================

/*
    What is an Operator in JavaScript?

    An operator is a symbol that is used to perform operations on values (operands).

    Example:
        let sum = 10 + 5;

    Here:
        +   → Operator
        10,5 → Operands
*/

// ======================= TYPES OF OPERATORS IN JAVASCRIPT =======================

/*
    JavaScript operators are broadly classified into:

    1. Arithmetic Operators
    2. Assignment Operators
    3. Comparison Operators
    4. Logical Operators
    5. Unary Operators
    6. Ternary (Conditional) Operator
    7. Type Operators
    8. Bitwise Operators
*/

// ======================= 1. ARITHMETIC OPERATORS =======================

/*
    Arithmetic operators are used to perform mathematical operations.
*/

let a = 10;
let b = 3;

console.log("Addition:", a + b);        // +  → 13
console.log("Subtraction:", a - b);     // -  → 7
console.log("Multiplication:", a * b);  // *  → 30
console.log("Division:", a / b);        // /  → 3.333...
console.log("Modulus:", a % b);         // %  → 1 (remainder)
console.log("Exponent:", a ** b);       // ** → 1000 (10^3)

// ======================= 2. ASSIGNMENT OPERATORS =======================

/*
    Assignment operators are used to assign values to variables.
*/

let x = 10;   // =
x += 5;       // x = x + 5
console.log("x += 5:", x);

x -= 3;       // x = x - 3
console.log("x -= 3:", x);

x *= 2;       // x = x * 2
console.log("x *= 2:", x);

x /= 4;       // x = x / 4
console.log("x /= 4:", x);

x %= 3;       // x = x % 3
console.log("x %= 3:", x);

// ======================= 3. COMPARISON OPERATORS =======================

/*
    Comparison operators compare two values and return BOOLEAN (true / false).
*/

let p = 10;
let q = "10";

console.log("p == q:", p == q);     // true (value only)
console.log("p === q:", p === q);   // false (value + type)
console.log("p != q:", p != q);     // false
console.log("p !== q:", p !== q);   // true
console.log("p > 5:", p > 5);       // true
console.log("p < 5:", p < 5);       // false
console.log("p >= 10:", p >= 10);   // true
console.log("p <= 9:", p <= 9);     // false

/*
    IMPORTANT INTERVIEW POINT:
    ==  → Loose equality (checks value only)
    === → Strict equality (checks value + data type)
*/

// ======================= 4. LOGICAL OPERATORS =======================

/*
    Logical operators are used to combine multiple conditions.
*/

let isAdult = true;
let hasID = false;

console.log("AND (&&):", isAdult && hasID); // false
console.log("OR (||):", isAdult || hasID);  // true
console.log("NOT (!):", !isAdult);          // false

/*
    && → All conditions must be true
    || → At least one condition must be true
    !  → Reverses the result
*/

// ======================= 5. UNARY OPERATORS =======================

/*
    Unary operators work with a SINGLE operand.
*/

let count = 5;

console.log("Pre Increment:", ++count); // 6
console.log("Post Increment:", count++); // 6 (then becomes 7)
console.log("After Post Increment:", count); // 7

console.log("Pre Decrement:", --count); // 6
console.log("Post Decrement:", count--); // 6 (then becomes 5)
console.log("After Post Decrement:", count); // 5

/*
    ++ → Increment
    -- → Decrement
*/

// ======================= 6. TERNARY (CONDITIONAL) OPERATOR =======================

/*
    Ternary operator is a short form of if-else.
    Syntax:
        condition ? value_if_true : value_if_false
*/

let age = 18;

let resultValue = (age >= 18) ? "Eligible to vote" : "Not eligible";
console.log("Voting Status:", resultValue);

// ======================= 7. TYPE OPERATORS =======================

/*
    Type operators are used to find the data type of a variable.
*/

// typeof operator
console.log(typeof 10);           // number
console.log(typeof "Hello");      // string
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object (JavaScript bug)
console.log(typeof {});           // object
console.log(typeof []);           // object
console.log(typeof function(){}); // function

// instanceof operator
let array = [1, 2, 3];
console.log(array instanceof Array); // true
console.log(array instanceof Object); // true

// ======================= 8. BITWISE OPERATORS =======================

/*
    Bitwise operators work on binary representation of numbers.
    Mainly used in low-level programming.
*/

let m = 5;  // 0101
let n = 1;  // 0001

console.log("Bitwise AND (&):", m & n);  // 1
console.log("Bitwise OR (|):", m | n);   // 5
console.log("Bitwise XOR (^):", m ^ n);  // 4
console.log("Left Shift (<<):", m << 1); // 10
console.log("Right Shift (>>):", m >> 1);// 2

// ======================= SUMMARY =======================

/*
    - Operators perform actions on values
    - Arithmetic → Math operations
    - Assignment → Assign values
    - Comparison → true / false
    - Logical → Combine conditions
    - Unary → Single operand
    - Ternary → Short if-else
    - Type → Check data type
    - Bitwise → Binary operations
*/
// ======================= instanceof OPERATOR =======================

/*
    What is the instanceof operator?

    The instanceof operator is used to check whether an object
    is created from a particular constructor or class.

    In simple words:
    instanceof checks the OBJECT → CONSTRUCTOR relationship.
*/

// ======================= BASIC SYNTAX =======================

/*
    object instanceof Constructor

    Returns:
        true  → if object is derived from Constructor
        false → otherwise
*/

// ======================= SIMPLE EXAMPLE =======================

let arr = [1, 2, 3];

// Checking array relationships
console.log(arr instanceof Array);  // true
console.log(arr instanceof Object); // true

/*
    WHY BOTH ARE TRUE?

    Because in JavaScript:
        Array is a child of Object

    Prototype chain:
        arr
         ↓
        Array.prototype
         ↓
        Object.prototype
         ↓
        null
*/

// ======================= HOW instanceof WORKS INTERNALLY =======================

/*
    Internally, instanceof checks:
        Does Constructor.prototype exist anywhere
        in the object's prototype chain?

    If YES → true
    If NO  → false
*/

/*
    Prototype chain visualization:
    arr
      -> Array.prototype
      -> Object.prototype
      -> null
*/

// ======================= ANOTHER EXAMPLE =======================

let name = "JavaScript";

console.log(name instanceof String); // false ❌

/*
    WHY false?

    Because:
        "JavaScript" is a PRIMITIVE STRING
        NOT an object

    Primitive types do NOT have prototype chains.
*/

// ======================= STRING OBJECT EXAMPLE =======================

let nameObj = new String("JavaScript");

console.log(nameObj instanceof String); // true
console.log(nameObj instanceof Object); // true

/*
    Because:
        new String() creates an OBJECT wrapper
*/

// ======================= CUSTOM CONSTRUCTOR FUNCTION =======================

function Person(name) {
    this.name = name;
}

let p1 = new Person("Alice");

console.log(p1 instanceof Person); // true
console.log(p1 instanceof Object); // true

/*
    Prototype chain:
        p1
         ↓
        Person.prototype
         ↓
        Object.prototype
         ↓
        null
*/

// ======================= instanceof vs typeof =======================

/*
    typeof:
        - Works well for PRIMITIVE types
        - Returns string values

    instanceof:
        - Works for OBJECTS
        - Checks prototype chain
*/

console.log(typeof arr);           // object
console.log(arr instanceof Array); // true

// ======================= IMPORTANT INTERVIEW EDGE CASE =======================

/*
    typeof null → "object"  ❌ (JavaScript bug)
    null instanceof Object → false  ✅

    Reason:
        null has no prototype
*/

console.log(null instanceof Object); // false

// ======================= WHEN TO USE instanceof =======================

/*
    Use instanceof when:
    - You want to check object type
    - You are dealing with arrays, classes, or custom objects

    Do NOT use instanceof for:
    - Primitive values
*/

// ======================= REAL-WORLD EXAMPLE =======================

function processData(data) {
    if (data instanceof Array) {
        console.log("Processing array data");
    } else if (data instanceof Object) {
        console.log("Processing object data");
    }
}

processData([1, 2, 3]);          // Processing array data
processData({ name: "Bob" });   // Processing object data

// ======================= SUMMARY =======================

/*
    - instanceof checks object → constructor relationship
    - It works by walking the prototype chain
    - Arrays are objects, so:
        arr instanceof Array  → true
        arr instanceof Object → true
    - Does NOT work reliably for primitives
*/