// To run this file:
// node src/JavaScript/Practice/24_TutorialTwentyFour.js

// Promises in JavaScript

// In JavaScript, Promises are a way to handle asynchronous operations in a more organized and readable manner.
// They provide cleaner syntax for dealing with asynchronous code compared to traditional callback-based approaches.
// Promises are widely used for tasks like making network requests, reading/writing files, and other operations that may take some time to complete, and operations that don't block the main thread.
// Promise represents a value that may not be available yet but will be resolved at some point in future.
// It can be in one of three states:
// 1) Pending: The initial state, neither fulfilled nor rejected.
// 2) Fulfilled: The operation completed successfully, and the promise has a resulting value.
// 3) Rejected: The operation failed, and the promise has a reason for the failure (an error).

// Asynchronus Operations using Promises in JavaScript:
const randomNumberPromise = new Promise((resolved, rejected) => {
    setTimeout(() => {
        const randomValue = Math.random();
        if(randomValue > 0.5) {
            resolved("Promise is fulfilled! Random value: " + randomValue);
        } else {
            rejected(new Error("Promise is rejected! Random value: " + randomValue));
        }
    }, 2000); // delay of 2 seconds
})

randomNumberPromise
    .then((result) => {
        console.log("Promise is fulfilled: " + result); // This will be executed if the promise is fulfilled
    })
    .catch((error) => {
        console.error("Promise is rejected: " + error.message); // This will be executed if the promise is rejected
    });

/*
    Output:
    It can be either of the following based on the random value generated:
    Promise is fulfilled: Promise is fulfilled! Random value: 0.854826944148763
    Promise is rejected: Promise is rejected! Random value: 0.12391464917765527

*/        
