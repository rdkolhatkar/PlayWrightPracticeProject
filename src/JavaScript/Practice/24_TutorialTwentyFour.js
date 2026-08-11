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

// Chaining Promises in JavaScript:
// Promises can be chained together to perform a series of asynchronous operations in a sequential manner.
// Each .then() method returns a new promise, allowing you to chain multiple .then() calls together.
// This is useful for performing a series of dependent asynchronous tasks.

function getEvenNumber(value, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(value % 2 === 0){
                resolve(value);
            }
            else{
                reject(new Error("The number is not even: " + value));
            }
        }, delay);
    })
}

// Example of chaining promises

getEvenNumber(4, 1000)
    .then(result => {
        console.log("First promise fulfilled with value: " + result);
        return getEvenNumber(3, 2000); // Chaining another promise
    })
    .then(result => {
        console.log("Second promise fulfilled with value: " + result);
        return getEvenNumber(result + 5, 1000); // Chaining another promise
    })
    .then(result => {
        console.log("Third promise fulfilled with value: " + result);
    })
    .catch(error => {
        console.error("Promise rejected: " + error.message);
    });

/*
    Output:
    First promise fulfilled with value: 4
    Promise is fulfilled: Promise is fulfilled! Random value: 0.8606540562389924
    Promise rejected: The number is not even: 3
*/
