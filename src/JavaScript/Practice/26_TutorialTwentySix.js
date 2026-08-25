// To run this file:
// node src/JavaScript/Practice/26_TutorialTwentySix.js

// async and await concepts are used to handle asynchronous operations in JavaScript. They provide a more readable and synchronous-like way to work with promises.

// async function returns a promise, and await is used to pause the execution of the async function until the promise is resolved or rejected. This allows for writing asynchronous code in a more linear and understandable manner, avoiding callback hell and making error handling easier.

// Example of using async and await:

// Callback Hell converted to Async/Await

function startCoffeeMachine() {
    return new Promise((resolve) => {

        console.log("1. Starting the coffee machine...");

        setTimeout(() => {

            console.log("1. Coffee machine is ready.");

            resolve("Coffee machine is ready");

        }, 2000);
    });
}


function grindCoffeeBeans() {
    return new Promise((resolve) => {

        console.log("2. Starting to grind coffee beans...");

        setTimeout(() => {

            console.log("2. Coffee beans are ground.");

            resolve("Ground coffee");

        }, 1000);
    });
}


function boilWater() {
    return new Promise((resolve) => {

        console.log("3. Starting to boil water...");

        setTimeout(() => {

            console.log("3. Water is boiled.");

            resolve("Boiled water");

        }, 1500);
    });
}


function pourBoilingWaterIntoCup(boiledWater) {
    return new Promise((resolve) => {

        console.log("4. Starting to pour boiled water into the cup...");

        setTimeout(() => {

            console.log("4. " + boiledWater + " poured into the cup.");

            resolve("Water in cup");

        }, 500);
    });
}


function addCoffeeToCup(groundCoffee) {
    return new Promise((resolve) => {

        console.log("5. Starting to add ground coffee into the cup...");

        setTimeout(() => {

            console.log("5. " + groundCoffee + " added to the cup.");

            resolve("Coffee in cup");

        }, 500);
    });
}


function stirCoffee(coffeeInCup) {
    return new Promise((resolve) => {

        console.log("6. Starting to stir the coffee...");

        setTimeout(() => {

            console.log("6. " + coffeeInCup + " is stirred.");

            resolve("Final coffee");

        }, 300);
    });
}


function enjoyCoffee(finalCoffee) {

    console.log(
        "7. " + finalCoffee + " is ready. Enjoy your coffee!"
    );

}


// Async/Await

async function makeCoffee() {

    const coffeeMachineStatus = await startCoffeeMachine();

    const groundCoffee = await grindCoffeeBeans();

    const boiledWater = await boilWater();

    const waterInCup =
        await pourBoilingWaterIntoCup(boiledWater);

    const coffeeInCup =
        await addCoffeeToCup(groundCoffee);

    const finalCoffee =
        await stirCoffee(coffeeInCup);

    enjoyCoffee(finalCoffee);
}


// Start making coffee

makeCoffee();

// async function with resolved and rejected promises

function getInfo() {
    return new Promise((resolve, reject) => {
        // Simulate an API call
        setTimeout(() => {
            const success = Math.random() > 0.5; // Simulate success or failure
            if (success) {
                resolve("Information retrieved successfully.");
            } else {
                reject("Failed to retrieve information.");
            }
        }, 1000);
    });
}

// create async function to handle the promise returned by getInfo

async function fetchInfo() {
    try {
        const info = await getInfo();
        console.log(info);
    }
    catch (error) {
        console.error(error);
    }   
}

// Call the async function to fetch information
fetchInfo();

/*
    output:
    1. Starting the coffee machine...
    1. Coffee machine is ready.
    2. Starting to grind coffee beans...
    2. Coffee beans are ground.
    3. Starting to boil water...
    3. Water is boiled.
    4. Starting to pour boiled water into the cup...
    4. Boiled water poured into the cup.
    5. Starting to add ground coffee into the cup...
    5. Ground coffee added to the cup.
    6. Starting to stir the coffee...
    6. Coffee in cup is stirred.
    7. Final coffee is ready. Enjoy your coffee!

    Information retrieved successfully.
    Failed to retrieve information.
*/