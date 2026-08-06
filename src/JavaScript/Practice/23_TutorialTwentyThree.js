// To run this file:
// node src/JavaScript/Practice/23_TutorialTwentyThree.js
import fs from 'fs';
// const fs = require('fs');

// Synchronus and Asynchronus behavior in JavaScript

/*
    1) Synchronus Programming in JavaScript:
    -> In synchronus programming, JavaScript executes code in a linear and sequential manner.
       Each line of code is executed one after the other, and the program waits for each operation to complete before moving on to the next.
       This can lead to "blocking" behavior, where long-running operations can cause the entire program or user interface to become unresponsive until those operations finish. 
    2) Asynchronus Programming in JavaScript:
    -> In asynchronus programming, JavaScript allows tasks to be started and cntinue in the background while the program executes other code.
       This is especially useful for tasks that may take some time, like fetching data from a server or reading files.
*/

// Example of Synchronus behavior in JavaScript:
console.log("Start of Synchronus Example");
for (let i = 0; i < 2; i++) {
    // Simulating a time-consuming task
    for (let j = 0; j < 10; j++) {
        console.log( j + " Processing..." ); // This will print "Processing..." multiple times, simulating a delay
    }  
}
console.log("End of Synchronus Example");
/*
    Output:
    Start of Synchronus Example
    0 Processing...
    1 Processing...
    2 Processing...
    3 Processing...
    4 Processing...
    5 Processing...
    6 Processing...
    7 Processing...
    8 Processing...
    9 Processing...
    0 Processing...
    1 Processing...
    2 Processing...
    3 Processing...
    4 Processing...
    5 Processing...
    6 Processing...
    7 Processing...
    8 Processing...
    9 Processing...
    End of Synchronus Example
*/

// Example of Asynchronus behavior in JavaScript:
console.log("Start of Asynchronus Example");   
setTimeout(() => {
    console.log("This message is printed after a delay of 2 seconds");
}, 2000); // 2000 milliseconds = 2 seconds

console.log("End of Asynchronus Example"); 
/*
    Output:
    Start of Asynchronus Example
    End of Asynchronus Example
    This message is printed after a delay of 2 seconds
*/
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
await sleep(5000); // This will pause the execution for 5 seconds before moving on to the next example
// Just like in Java we have Thread.sleep() method, in JavaScript we can use sleep() function to pause the execution of the code for a specified amount of time.
// Reading one txt file using synchronus and asynchronus behavior in JavaScript
// To read data from a text file, we can use the built-in 'fs' module in Node.js. The 'fs' module provides both synchronus and asynchronus methods for reading files.
// fs is also used for writing files, deleting files, and performing other file system operations.

// Example of Synchronus File Reading in JavaScript:
console.log("Start of Synchronus File Reading Example");
const data = fs.readFileSync("src/Resources/DemoData.txt", "utf-8");
console.log(data); // This will print the content of the file to the console
console.log("End of Synchronus File Reading Example");

// Example of Asynchronus File Reading in JavaScript:
console.log("Start of Asynchronus File Reading Example");
fs.readFile("src/Resources/DemoData.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log(data); // This will print the content of the file to the console
    console.log("End of Asynchronus File Reading Example");
});
console.log("This message is printed immediately after the asynchronous file read operation is initiated, without waiting for it to complete.");
/*
Output:
    Start of Synchronus File Reading Example
    Here is a short paragraph:

    **Environmental Safety and Pollution Control**

    Environmental safety focuses on protecting natural resources, ecosystems, and human health by reducing environmental hazards.
    Pollution control involves minimizing air, water, soil, and noise pollution through proper waste management, recycling, energy conservation, and the use of
    eco-friendly technologies.
    By following sustainable practices and complying with environmental regulations, individuals and organizations can help preserve the environment for future
    generations.

    End of Synchronus File Reading Example
    Start of Asynchronus File Reading Example
    This message is printed immediately after the asynchronous file read operation is initiated, without waiting for it to complete.
    Here is a short paragraph:

    **Environmental Safety and Pollution Control**

    Environmental safety focuses on protecting natural resources, ecosystems, and human health by reducing environmental hazards.
    Pollution control involves minimizing air, water, soil, and noise pollution through proper waste management, recycling, energy conservation, and the use of
    eco-friendly technologies.
    By following sustainable practices and complying with environmental regulations, individuals and organizations can help preserve the environment for future
    generations.

    End of Asynchronus File Reading Example
*/