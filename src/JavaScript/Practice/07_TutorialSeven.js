// ======================= JavaScript FUNCTIONS =======================

/*
    What is a Function?

    A function is a BLOCK OF CODE designed to perform a specific task.
    A function runs ONLY when it is CALLED (invoked).

    Think of a function like:
    - A machine
    - Input → Processing → Output
*/

// ======================= FUNCTION INTRODUCTION =======================
{
    function greet() {
        console.log("Hello World");
    }

    greet();

    /*
        Explanation:
        - function greet() → function definition
        - greet() → function invocation (call)

        Output:
        Hello World
    */
}

// ======================= FUNCTION PATH (INTERNAL FLOW) =======================
/*
    Function Execution Path:

    1. Function is created (stored in memory)
    2. Function is called
    3. Parameters receive values
    4. Function body executes
    5. return sends value back (optional)
*/

// ======================= FUNCTION WITH PARAMETERS =======================
{
    function add(a, b) {
        console.log(a + b);
    }

    add(5, 3);

    /*
        a = 5, b = 3
        Output:
        8
    */
}

// ======================= PARAMETERS vs ARGUMENTS =======================
/*
    Parameters → variables in function definition
    Arguments → actual values passed during function call
*/

{
    function multiply(x, y) {   // x, y → parameters
        console.log(x * y);
    }

    multiply(4, 5);             // 4, 5 → arguments

    /*
        Output:
        20
    */
}

// ======================= FUNCTION RETURN =======================
{
    function square(num) {
        return num * num;
    }

    let result = square(6);
    console.log(result);

    /*
        return sends value back
        Output:
        36
    */
}

// ======================= RETURN STOPS EXECUTION =======================
{
    function test() {
        console.log("Before return");
        return;
        console.log("After return");
    }

    test();

    /*
        Output:
        Before return
        (After return is never executed)
    */
}

// ======================= DEFAULT PARAMETERS =======================
{
    function greetUser(name = "Guest") {
        console.log("Hello", name);
    }

    greetUser("Alice");
    greetUser();

    /*
        Output:
        Hello Alice
        Hello Guest
    */
}

// ======================= FUNCTION EXPRESSION =======================
/*
    Function stored in a variable
*/

{
    const sum = function (a, b) {
        return a + b;
    };

    console.log(sum(10, 20));

    /*
        Output:
        30
    */
}

// ======================= FUNCTION DECLARATION vs EXPRESSION =======================
/*
    Function Declaration → Hoisted
    Function Expression → Not hoisted
*/

{
    sayHello();

    function sayHello() {
        console.log("Hello!");
    }

    /*
        Output:
        Hello!
    */
}

// ======================= ANONYMOUS FUNCTION =======================
{
    let show = function () {
        console.log("Anonymous Function");
    };

    show();

    /*
        Output:
        Anonymous Function
    */
}

// ======================= ARROW FUNCTIONS (ES6) =======================
/*
    Arrow function is a SHORTER syntax for writing functions.
*/

{
    const add = (a, b) => {
        return a + b;
    };

    console.log(add(3, 4));

    /*
        Output:
        7
    */
}

// ======================= ARROW FUNCTION (IMPLICIT RETURN) =======================
{
    const square = n => n * n;

    console.log(square(5));

    /*
        Output:
        25
    */
}

// ======================= CONVERT NORMAL FUNCTION TO ARROW =======================
/*
    Normal Function:
    function multiply(a, b) {
        return a * b;
    }

    Arrow Function:
    const multiply = (a, b) => a * b;
*/

{
    const multiply = (a, b) => a * b;
    console.log(multiply(6, 7));

    /*
        Output:
        42
    */
}

// ======================= FUNCTION INVOCATION TYPES =======================
/*
    1. Direct Invocation → func()
    2. Method Invocation → obj.func()
    3. Constructor Invocation → new Func()
*/

// ======================= METHOD FUNCTION =======================
/*
    What is a Method in JavaScript?

    - A method is a function that is a property of an object.
    - Example: user.greet() → greet() is a method of user object.

    Difference from Java:
    - In Java, methods are always part of a class.
    - In JavaScript, objects can have functions as properties without defining a class.
*/

{
    let user = {
        name: "Bob",
        greet: function () {
            console.log("Hello", this.name);
        }
    };

    user.greet();

    /*
        this refers to object calling the method
        Output:
        Hello Bob
    */
}

// ======================= ARROW FUNCTION & this =======================
{
    let person = {
        name: "Alice",
        greet: () => {
            console.log(this.name);
        }
    };

    person.greet();

    /*
        Arrow function does NOT have its own this
        It uses 'this' from surrounding context (window/global object)
        Output:
        undefined
    */
}

// ======================= CONSTRUCTORS IN JAVASCRIPT =======================
/*
    Constructor Function:

    - Special function used to create objects
    - Called with `new` keyword
    - 'this' refers to the new object

    Example:
*/

{
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.greet = function () {
            console.log("Hello, I am", this.name);
        };
    }

    const p1 = new Person("John", 25);
    p1.greet();

    /*
        Output:
        Hello, I am John
    */
}

// ======================= FUNCTION ARGUMENTS OBJECT =======================
{
    function showArgs() {
        console.log(arguments);
    }

    showArgs(1, 2, 3);

    /*
        Output:
        [Arguments] { '0': 1, '1': 2, '2': 3 }
        Arguments object contains all passed arguments
    */
}

// ======================= REST PARAMETERS =======================
/*
    - Rest parameters allow functions to accept unlimited arguments as an array
    - Syntax: function(...args)
*/

{
    function total(...numbers) {
        let sum = 0;
        for (let num of numbers) {
            sum += num;
        }
        return sum;
    }

    console.log(total(1, 2, 3, 4));

    /*
        Output:
        10
    */
}

// ======================= CALLBACK FUNCTIONS =======================
/*
    - A callback is a function passed into another function as an argument
    - It is called (invoked) inside the outer function
*/

{
    function greet(name, callback) {
        console.log("Hello", name);
        callback();
    }

    function done() {
        console.log("Welcome!");
    }

    greet("John", done);

    /*
        Output:
        Hello John
        Welcome!
    */
}

// ======================= HIGHER ORDER FUNCTION =======================
/*
    - A higher-order function either:
        1. Accepts a function as an argument
        2. Returns a function

    Example:
*/

{
    function operate(a, b, operation) {
        return operation(a, b);
    }

    let result = operate(5, 3, (x, y) => x + y);
    console.log(result);

    /*
        Output:
        8
    */
}

// ======================= IIFE (Immediately Invoked Function) =======================
/*
    - A function that runs immediately after creation
    - Useful to create private scope
*/

{
    (function () {
        console.log("IIFE executed");
    })();

    /*
        Output:
        IIFE executed
    */
}

// ======================= PURE FUNCTION =======================
/*
    - A function that:
        1. Always returns same output for same input
        2. Has no side effects (does not modify external state)

    Example:
*/

{
    function add(a, b) {
        return a + b;
    }

    console.log(add(2, 3));

    /*
        No side effects
        Output:
        5
    */
}

// ======================= SUMMARY =======================

/*
    - Functions are reusable blocks
    - Parameters receive values
    - Arguments pass values
    - return sends result back
    - Arrow functions are shorter
    - Arrow functions don’t have their own this
    - Methods are functions inside objects
    - Constructor functions create new objects
    - this refers to the object invoking the function
    - Rest parameters collect unlimited arguments into an array
    - Callback functions are passed into other functions
    - Higher-order functions accept/return functions
    - IIFE runs immediately and creates private scope
    - Pure functions have no side effects and predictable output
*/
