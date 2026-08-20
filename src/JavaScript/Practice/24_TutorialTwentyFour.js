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

// Promise.all() in JavaScript: It is commonly used when you want to perform multiple asynchronous operations in parallel and wait for all of them to complete before moving on.

const functionOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Function One completed!");
        }, 2000);
    });
};

const functionTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Function Two completed!");
        }, 2000);
    });
};

const functionThree = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Function Three completed!");
        }, 2000);
    });
};

Promise.all(
    [
        functionOne(),
        functionTwo(),
        functionThree()
    ]
).then(dataArray => {
    console.log("All promises fulfilled: ", dataArray); 
}).catch(error => {
    console.error("One of the promises rejected: ", error);
});

/*
    Output:
    All promises fulfilled:  [
        'Function One completed!',
        'Function Two completed!',
        'Function Three completed!'
    ]
*/

// Another Example

const functionDataOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [1, 2, 3, 4, 5];
            resolve(data);
        }, 2000);
    });
};

const functionDataTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = ["item1", "item2", "item3"];
            resolve(data);
        }, 2000);
    });
};

const functionDataThree = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Function Three completed!" };
            resolve(data);
        }, 2000);
    });
};

Promise.all(
    [
        functionDataOne(),
        functionDataTwo(),
        functionDataThree()
    ]
).then(dataArray => {
    console.log("All promises fulfilled: ", dataArray); 
}).catch(error => {
    console.error("One of the promises rejected: ", error);
});

/*
    Output:
    All promises fulfilled:  [
        [ 1, 2, 3, 4, 5 ],
        [ 'item1', 'item2', 'item3' ],
        { message: 'Function Three completed!' }
    ]
*/

// Another example with rejection
 
const getDataOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [1, 2, 3, 4, 5];
            resolve(data);
        }, 2000);
    });
}

const getDataTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error: Data is Not available!");
        }, 2000);
    });
}

Promise.all(
    [
        getDataOne(),   
        getDataTwo()
    ]
).then(dataArray => {
    console.log("All promises fulfilled: ", dataArray);
}).catch(error => {
    console.error("One of the promises rejected: ", error);
});

/*
    Output:
    One of the promises rejected:  Error: Data is Not available!
*/

// Promise.AllSettled() in JavaScript: It is used when you want to wait for all promises to settle (either fulfilled or rejected) and get the results of all promises, regardless of whether they were fulfilled or rejected.

Promise.allSettled(
    [
        getDataOne(),
        getDataTwo()
    ]
).then(results => {
    console.log("All promises settled: ", results);
    results.forEach(result => {
        if (result.status === "fulfilled") {
            console.log("Fulfilled: ", result.value);
        } else {
            console.error("Rejected: ", result.reason);
        }
    });
});
/*
    Output:
    All promises settled:  [
        { status: 'fulfilled', value: [ 1, 2, 3, 4, 5 ] },
        { status: 'rejected', reason: 'Error: Data is Not available!' }
    ]   
*/

// Promise.race() in JavaScript: It is used when you want to get the result of the first promise that settles (either fulfilled or rejected) among a group of promises.
// if we have two promises, one that resolves after 2 seconds and another that rejects after 1 second, the Promise.race() will return the result of the promise that settles first, which in this case will be the rejected promise.

const resolveAfterTwoSeconds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved after 2 seconds");
    }, 2000);   
});

const rejectAfterOneSecond = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Rejected after 1 second");
    }, 1000);
});

Promise.race([resolveAfterTwoSeconds, rejectAfterOneSecond])
    .then(result => {
        console.log("Promise.race fulfilled: ", result);
    })
    .catch(error => {
        console.error("Promise.race rejected: ", error);
    });

/*
    Output:
    Promise.race rejected:  Rejected after 1 second
*/

const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved promise");
        }, 1000);
    });
};

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            reject("Rejected promise");
        }, 5000);
    });
};

Promise.race([resolvedPromise(), rejectedPromise()])
    .then(result => {
        console.log ("Promise.race fulfilled: ", result);
    })
    .catch(error => {
        console.error("Promise.race rejected: ", error);
    });

/*
    Output:
    Promise.race rejected:  Rejected promise
*/

// Promise.any() in JavaScript: It is used when you want to get the result of the first promise that fulfills (resolves) among a group of promises. If all promises are rejected, it will return an AggregateError containing all the rejection reasons.
// If at least one promise fulfills, Promise.any() will return the value of the first fulfilled promise. However, unlike Promise.race(), it doesn't reject immediately when a promise is rejected; it waits for all promises to settle and only rejects if all promises are rejected.

const getMessage = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Message received from 1st promise");
        }, 500);
    });
};

const getUsers = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error: Users not found from 2nd promise");
        }, 200);
    });
};

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error: Products not found from 3rd promise");
        }, 1000);
    });
};

Promise.any([getMessage(), getUsers(), getProducts()])
    .then(result => {
        console.log("Promise.any fulfilled: ", result); 
    })
    .catch(error => {
        console.error("Promise.any rejected: ", error);
    });

/*
    Output:
    Promise.any fulfilled:  Message received from 1st promise
*/
// If all promises are rejected, it will return an AggregateError containing all the rejection reasons.

