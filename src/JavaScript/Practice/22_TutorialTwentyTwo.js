// To run this file:
// node src/JavaScript/Practice/22_TutorialTwentyTwo.js

// Callback Functions in JavaScript

// Callback functions are functions that are passed as arguments to other functions and are executed after some operation has been completed. They are commonly used for asynchronous operations, such as handling events or making API calls.
// Once asynchronous operation is completed, the callback function is invoked to handle the result or perform further actions.
// Once asynchronus call is completed then only callback function will be called.

// Basic callback without any asynchronus process
function greet(name, callback){
    console.log("Hello " + name);
    callback();
}

function welcome(){
    console.log("Welcome !!!!!!!!");
}

// Adding the welcome() function as a callback to the greet() function

greet("Ketan", welcome); // Output: Hello Ketan Welcome !!!!!!!!

// Callback function with async process
// Base function
function printInfo(name, callback){
    // adding asynchronus step
    setTimeout(function(){
        console.log("Name : " + name);
        callback("PLZ call me back .....");
    }, 1000); // 1 second delay

}
// callback function
function displayMessage(msg){
    console.log(msg);
}

printInfo("Tony", displayMessage); 

/*
Output:
Name : Tony
PLZ call me back .....
*/

// Another example

function fetchUserData(userId, callback){
    setTimeout(function(){
        const userData = {
            1 : { name: "John", age: 30 },
            2 : { name: "Jane", age: 25 },
            3 : { name: "Mike", age: 35 }
        }
        const user =userData[userId];
        if(user){
            callback(null, user);
        } else {
            callback("User not found", null);
        }
    }, 1000);
}

// Callback Function

function handleUserData(error, user){
    if(error){
        console.error("Error: " + error);
    } else {
        console.log("User Data: ", user);
    }
}

// Fetching user data for userId 2
fetchUserData(2, handleUserData); // Output: User Data:  { name: 'Jane', age: 25 }

// Fetching user data for userId 4 (non-existent)
fetchUserData(4, handleUserData); // Output: Error: User not found
