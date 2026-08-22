// To run this file:
// node src/JavaScript/Practice/25_TutorialTwentyFive.js

// Callback Hell Or Pyramid of Doom in JavaScript

// Callback Hell is a situation where we have multiple nested callbacks, making the code hard to read and maintain. It often occurs when dealing with asynchronous operations in JavaScript. 
// The term "Pyramid of Doom" refers to the visual structure of nested callbacks, which resembles a pyramid shape. 

// Example of Callback Hell:
/*
===========================================================
 CALLBACK HELL / PYRAMID OF DOOM vs ASYNC/AWAIT
===========================================================

Callback Hell is a situation where we have multiple nested
callbacks, making the code difficult to read and maintain.

It commonly occurs when dealing with multiple asynchronous
operations in JavaScript.

The term "Pyramid of Doom" refers to the visual structure
created by deeply nested callbacks.

In this example, we will perform the following operations:

1. Login User
2. Get User Details
3. Get User Orders
4. Get Order Details
5. Process Payment

First, we will implement this using CALLBACKS.
Then we will solve the same problem using PROMISES
and ASYNC/AWAIT.
*/


// =========================================================
// PART 1: CALLBACK HELL / PYRAMID OF DOOM
// =========================================================

/*
    Function 1: Login User

    setTimeout() is being used here to simulate an
    asynchronous operation such as an API call.

    callback() will be executed after the operation
    is completed.
*/

function loginUserCallback(username, callback) {

    setTimeout(() => {

        console.log("1. User logged in");

        // Simulating a user ID returned from the server
        const userId = 101;

        // Pass the result to the callback
        callback(userId);

    }, 1000);
}


/*
    Function 2: Get User Details

    This function needs the userId returned by
    loginUserCallback().
*/

function getUserDetailsCallback(userId, callback) {

    setTimeout(() => {

        console.log("2. User details fetched");

        const user = {
            id: userId,
            name: "John",
            email: "john@example.com"
        };

        callback(user);

    }, 1000);
}


/*
    Function 3: Get Orders

    This function needs the user object returned
    by getUserDetailsCallback().
*/

function getOrdersCallback(user, callback) {

    setTimeout(() => {

        console.log("3. Orders fetched for:", user.name);

        const orders = [1001, 1002, 1003];

        callback(orders);

    }, 1000);
}


/*
    Function 4: Get Order Details

    This function needs an order ID.
*/

function getOrderDetailsCallback(orderId, callback) {

    setTimeout(() => {

        console.log("4. Order details fetched");

        const order = {
            id: orderId,
            product: "Laptop",
            price: 50000
        };

        callback(order);

    }, 1000);
}


/*
    Function 5: Process Payment

    This function needs the order object.
*/

function processPaymentCallback(order, callback) {

    setTimeout(() => {

        console.log("5. Payment processed for:", order.product);

        callback("Payment Successful");

    }, 1000);
}


/*
===========================================================
 CALLBACK HELL
===========================================================

Notice how every function is nested inside another
function's callback.

This creates the "Pyramid of Doom".

The execution flow is:

login
  ↓
get user details
  ↓
get orders
  ↓
get order details
  ↓
process payment
*/


function executeUsingCallbacks() {

    console.log("\n======================================");
    console.log("CALLBACK HELL EXAMPLE");
    console.log("======================================");

    loginUserCallback("John", function (userId) {

        getUserDetailsCallback(userId, function (user) {

            getOrdersCallback(user, function (orders) {

                getOrderDetailsCallback(orders[0], function (order) {

                    processPaymentCallback(order, function (result) {

                        console.log(result);

                    });

                });

            });

        });

    });
}


/*
    Visually, the above code looks like this:

    loginUserCallback(
        getUserDetailsCallback(
            getOrdersCallback(
                getOrderDetailsCallback(
                    processPaymentCallback(
                    )
                )
            )
        )
    )

    This is why it is called:

    "Pyramid of Doom"
*/


// =========================================================
// PROBLEMS WITH CALLBACK HELL
// =========================================================

/*
    1. Code becomes difficult to read.

    2. Code becomes difficult to maintain.

    3. The deeper the nesting becomes, the harder it is
       to understand the execution flow.

    4. Error handling becomes complicated.

    5. Debugging becomes difficult.

    6. Adding more asynchronous operations makes the
       pyramid even deeper.

    7. Business logic becomes tightly coupled with callbacks.
*/


// =========================================================
// PART 2: SOLUTION USING PROMISES
// =========================================================

/*
    Modern JavaScript provides Promises to make asynchronous
    code easier to manage.

    A Promise represents the eventual completion or failure
    of an asynchronous operation.

    A Promise has three possible states:

    1. Pending
       Operation is still running.

    2. Fulfilled
       Operation completed successfully.

    3. Rejected
       Operation failed.
*/


// ---------------------------------------------------------
// Login User - Promise Version
// ---------------------------------------------------------

function loginUser(username) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("1. User logged in");

            const userId = 101;

            /*
                resolve() means the asynchronous operation
                completed successfully.

                The value passed to resolve() can be received
                using .then() or await.
            */

            resolve(userId);

        }, 1000);

    });
}


// ---------------------------------------------------------
// Get User Details - Promise Version
// ---------------------------------------------------------

function getUserDetails(userId) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("2. User details fetched");

            const user = {
                id: userId,
                name: "John",
                email: "john@example.com"
            };

            resolve(user);

        }, 1000);

    });
}


// ---------------------------------------------------------
// Get Orders - Promise Version
// ---------------------------------------------------------

function getOrders(user) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("3. Orders fetched for:", user.name);

            const orders = [1001, 1002, 1003];

            resolve(orders);

        }, 1000);

    });
}


// ---------------------------------------------------------
// Get Order Details - Promise Version
// ---------------------------------------------------------

function getOrderDetails(orderId) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("4. Order details fetched");

            const order = {
                id: orderId,
                product: "Laptop",
                price: 50000
            };

            resolve(order);

        }, 1000);

    });
}


// ---------------------------------------------------------
// Process Payment - Promise Version
// ---------------------------------------------------------

function processPayment(order) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("5. Payment processed for:", order.product);

            resolve("Payment Successful");

        }, 1000);

    });
}


// =========================================================
// PART 3: PROMISE CHAINING
// =========================================================

/*
    Before async/await became popular, Promises were commonly
    used with .then().

    Promise chaining removes the deep nesting problem.

    Instead of:

        callback(
            callback(
                callback(
                    callback()
                )
            )
        )

    We can write:

        promise
            .then()
            .then()
            .then()
            .then()

    This is much cleaner than Callback Hell.
*/


function executeUsingPromises() {

    console.log("\n======================================");
    console.log("PROMISE CHAINING EXAMPLE");
    console.log("======================================");

    loginUser("John")

        // userId is received from loginUser()
        .then((userId) => {

            return getUserDetails(userId);

        })

        // user is received from getUserDetails()
        .then((user) => {

            return getOrders(user);

        })

        // orders are received from getOrders()
        .then((orders) => {

            return getOrderDetails(orders[0]);

        })

        // order is received from getOrderDetails()
        .then((order) => {

            return processPayment(order);

        })

        // Final result
        .then((result) => {

            console.log(result);

        })

        // Handle any rejected Promise
        .catch((error) => {

            console.error("Something went wrong:", error);

        });
}


// =========================================================
// PART 4: SOLUTION USING ASYNC/AWAIT
// =========================================================

/*
    Async/await is built on top of Promises.

    async:

    The "async" keyword is used before a function to indicate
    that the function performs asynchronous operations.

    An async function always returns a Promise.


    await:

    The "await" keyword waits for a Promise to complete.

    It makes asynchronous code look and behave more like
    normal sequential code.

    IMPORTANT:

    "await" can normally be used inside an "async" function.
*/


async function executeUsingAsyncAwait() {

    console.log("\n======================================");
    console.log("ASYNC/AWAIT EXAMPLE");
    console.log("======================================");

    /*
        Wait for loginUser() to complete.

        Once loginUser() resolves with userId = 101,
        that value is stored in userId.
    */

    const userId = await loginUser("John");


    /*
        Now getUserDetails() is called.

        It receives the userId from the previous operation.
    */

    const user = await getUserDetails(userId);


    /*
        Get all orders for the user.
    */

    const orders = await getOrders(user);


    /*
        Get details of the first order.
    */

    const order = await getOrderDetails(orders[0]);


    /*
        Process payment for the order.
    */

    const result = await processPayment(order);


    /*
        Print final result.
    */

    console.log(result);
}


/*
===========================================================
 WHY ASYNC/AWAIT IS BETTER
===========================================================

Callback Hell:

loginUserCallback("John", function(userId) {

    getUserDetailsCallback(userId, function(user) {

        getOrdersCallback(user, function(orders) {

            getOrderDetailsCallback(orders[0], function(order) {

                processPaymentCallback(order, function(result) {

                    console.log(result);

                });

            });

        });

    });

});


Async/Await:

const userId = await loginUser("John");

const user = await getUserDetails(userId);

const orders = await getOrders(user);

const order = await getOrderDetails(orders[0]);

const result = await processPayment(order);

console.log(result);


The second version is:

    - Easier to read
    - Easier to understand
    - Easier to maintain
    - Easier to debug
    - Easier to add new operations
*/


// =========================================================
// PART 5: ERROR HANDLING WITH ASYNC/AWAIT
// =========================================================

/*
    One of the biggest advantages of async/await is that
    we can use normal try/catch blocks for error handling.

    If any awaited Promise is rejected, JavaScript jumps
    directly to the catch block.
*/


async function executeWithErrorHandling() {

    console.log("\n======================================");
    console.log("ASYNC/AWAIT + TRY/CATCH");
    console.log("======================================");

    try {

        const userId = await loginUser("John");

        const user = await getUserDetails(userId);

        const orders = await getOrders(user);

        const order = await getOrderDetails(orders[0]);

        const result = await processPayment(order);

        console.log(result);

    } catch (error) {

        /*
            If any operation above fails, this block will
            execute.

            This is much cleaner than adding error callbacks
            at every level of nested callbacks.
        */

        console.error("Something went wrong:", error);
    }
}


// =========================================================
// PART 6: SIMULATING AN ERROR
// =========================================================

/*
    Let's create another payment function where the payment
    can fail.

    This demonstrates how reject() works.
*/

function processPaymentWithError(order) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const paymentSuccessful = false;

            if (paymentSuccessful) {

                /*
                    Payment succeeded.
                */

                resolve("Payment Successful");

            } else {

                /*
                    Payment failed.

                    reject() changes the Promise state to
                    "Rejected".
                */

                reject("Payment Failed");

            }

        }, 1000);

    });
}


// =========================================================
// ASYNC/AWAIT ERROR HANDLING EXAMPLE
// =========================================================

async function executeWithPaymentError() {

    console.log("\n======================================");
    console.log("ASYNC/AWAIT ERROR HANDLING");
    console.log("======================================");

    try {

        const userId = await loginUser("John");

        const user = await getUserDetails(userId);

        const orders = await getOrders(user);

        const order = await getOrderDetails(orders[0]);

        /*
            This operation will fail because
            paymentSuccessful = false.
        */

        const result = await processPaymentWithError(order);

        console.log(result);

    } catch (error) {

        /*
            Because processPaymentWithError() rejected its
            Promise, execution jumps directly here.
        */

        console.error("Payment Error:", error);
    }
}


// =========================================================
// PART 7: CALLBACK HELL vs PROMISE vs ASYNC/AWAIT
// =========================================================

/*
    CALLBACK HELL:

        login()
            ↓
        getUser()
            ↓
        getOrders()
            ↓
        getOrder()
            ↓
        payment()


    PROMISE CHAIN:

        login()
            ↓
        .then()
            ↓
        .then()
            ↓
        .then()
            ↓
        .then()


    ASYNC/AWAIT:

        await login()
        await getUser()
        await getOrders()
        await getOrder()
        await payment()


    The Async/Await version is generally the easiest
    to read and understand.
*/


// =========================================================
// PART 8: IMPORTANT INTERVIEW POINT
// =========================================================

/*
    Interview Question:

    Q: Is async/await an alternative to Promises?

    Answer:

    Async/await is NOT a replacement for Promises.

    Async/await is a cleaner syntax for working with
    Promise-based asynchronous operations.

    For example:

        const user = await getUserDetails(userId);

    getUserDetails() returns a Promise.

    await waits for that Promise to settle and gives us
    the resolved value.


    Therefore:

        Promises
            ↓
        async/await
            ↓
        Cleaner way to consume Promises
*/


// =========================================================
// PART 9: ANOTHER IMPORTANT INTERVIEW POINT
// =========================================================

/*
    Question:

    Does await block the entire JavaScript application?

    Answer:

    No.

    await pauses the execution of the current async function
    until the Promise settles.

    It does NOT block the entire JavaScript runtime.

    Other asynchronous operations and event-loop work can
    continue while the Promise is pending.
*/


// =========================================================
// PART 10: FINAL RECOMMENDED VERSION
// =========================================================

/*
    In a real-world application, the recommended structure
    would generally look like this:

        async function placeOrder() {

            try {

                const userId = await loginUser("John");

                const user = await getUserDetails(userId);

                const orders = await getOrders(user);

                const order = await getOrderDetails(orders[0]);

                const result = await processPayment(order);

                console.log(result);

            } catch (error) {

                console.error(error);

            }

        }

    This provides:

        ✓ Clean code
        ✓ Easy-to-follow execution flow
        ✓ Centralized error handling
        ✓ Easy debugging
        ✓ Easy maintenance
        ✓ No Pyramid of Doom
*/


// =========================================================
// EXECUTION
// =========================================================

/*
    Uncomment ONE of the following at a time if you want
    to observe each approach separately.

    IMPORTANT:
    Each example takes approximately 5 seconds because
    each simulated asynchronous operation waits for 1 second.
*/


// 1. Callback Hell
executeUsingCallbacks();


// 2. Promise Chaining
// executeUsingPromises();


// 3. Async/Await
// executeUsingAsyncAwait();


// 4. Async/Await with try/catch
// executeWithErrorHandling();


// 5. Async/Await with a simulated payment failure
// executeWithPaymentError();

// -------------------------------------------------------------------------------------------------------------------

// Example of callback hell in JavaScript:

/*
    All the below steps are asynchronous operations that need to be performed in sequence to make a cup of coffee.
    1) Start the coffee machine -> 2 seconds
    2) Grind the coffee beans -> 1 second
    3) Boil water -> 1.5 seconds
    4) Pour boiled water into the cup -> 0.5 second
    5) Add grounded coffee into the cup -> 0.5 second
    6) Stir the coffee -> 0.3 second
    7) Serve the coffee and enjoy
*/

// ---------------------------------------------------------------------------------------------------------

function startCoffeeMachine(callback) {

    console.log("1. Starting the coffee machine...");

    setTimeout(function () {

        console.log("1. Coffee machine is ready.");

        callback("Coffee machine is ready");

    }, 2000);
}


function grindCoffeeBeans(callback) {

    console.log("2. Starting to grind coffee beans...");

    setTimeout(function () {

        console.log("2. Coffee beans are ground.");

        callback("Ground coffee");

    }, 1000);
}


function boilWater(callback) {

    console.log("3. Starting to boil water...");

    setTimeout(function () {

        console.log("3. Water is boiled.");

        callback("Boiled water");

    }, 1500);
}


function pourBoilingWaterIntoCup(boiledWater, callback) {

    console.log("4. Starting to pour boiled water into the cup...");

    setTimeout(function () {

        console.log("4. " + boiledWater + " poured into the cup.");

        callback("Water in cup");

    }, 500);
}


function addCoffeeToCup(groundCoffee, callback) {

    console.log("5. Starting to add ground coffee into the cup...");

    setTimeout(function () {

        console.log("5. " + groundCoffee + " added to the cup.");

        callback("Coffee in cup");

    }, 500);
}


function stirCoffee(coffeeInCup, callback) {

    console.log("6. Starting to stir the coffee...");

    setTimeout(function () {

        console.log("6. " + coffeeInCup + " is stirred.");

        callback("Final coffee");

    }, 300);
}


function enjoyCoffee(finalCoffee) {

    console.log("7. " + finalCoffee + " is ready. Enjoy your coffee!");

}


// Callback Hell

startCoffeeMachine(function (coffeeMachineStatus) {

    grindCoffeeBeans(function (groundCoffee) {

        boilWater(function (boiledWater) {

            pourBoilingWaterIntoCup(boiledWater, function (waterInCup) {

                addCoffeeToCup(groundCoffee, function (coffeeInCup) {

                    stirCoffee(coffeeInCup, function (finalCoffee) {

                        enjoyCoffee(finalCoffee);

                    });

                });

            });

        });

    });

});