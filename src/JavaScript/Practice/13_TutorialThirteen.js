/********************************************************************
 * node src/JavaScript/Practice/13_TutorialThirteen.js
 * 
 * This file demonstrates:
 * 1) How to take user input from console in JavaScript (Node.js)
 * 2) How to remove special characters from a string
 * 3) How to find duplicate words from the input string
 * 
 * This example is written for FRESHERS with detailed explanations
 ********************************************************************/


/********************************************************************
 * IMPORT SECTION
 ********************************************************************/

/*
 import readline from "readline";

 👉 What is "readline"?
 - readline is a BUILT-IN Node.js module
 - It allows us to read input from the terminal (console)
 - It is commonly used when we want user input in Node.js programs

 👉 Why do we use "import"?
 - "import" is part of ES Modules (modern JavaScript)
 - It allows us to bring functionality from another module/file

 👉 NOTE:
 - This works when your project uses ES modules
 - If needed, package.json should have:
   { "type": "module" }
*/
import readline from "readline";


/********************************************************************
 * CLASS FOR CONSOLE INPUT
 ********************************************************************/

/*
 We are creating a class to handle console input in a clean way
*/
class ConsoleInput {

    /*
     static readInput(question)

     👉 Why static?
     - static methods belong to the CLASS, not to an object
     - So we can call it like:
       ConsoleInput.readInput("Enter text")

     👉 Why class?
     - Classes help us organize code
     - Makes code reusable and readable
    */
    static readInput(question) {

        /*
         readline.createInterface()

         👉 What is createInterface?
         - It creates a connection between:
           - input  → process.stdin (keyboard input)
           - output → process.stdout (console output)

         👉 process.stdin:
         - Standard input (keyboard)

         👉 process.stdout:
         - Standard output (console screen)
        */
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        /*
         Why are we returning a Promise?

         👉 rl.question() works asynchronously
         👉 Promise allows us to use async/await
         👉 It makes code look synchronous and easy to read
        */
        return new Promise((resolve) => {

            /*
             rl.question()

             👉 What does question() do?
             - Displays the question to the user
             - Waits for user input
             - Stores the input in "answer"

             👉 Syntax:
             rl.question(question, callback)
            */
            rl.question(question, (answer) => {

                /*
                 rl.close()

                 👉 Why close?
                 - Closes the input stream
                 - Prevents the program from hanging
                */
                rl.close();

                /*
                 resolve(answer)

                 👉 Sends the user input back to the caller
                */
                resolve(answer);
            });
        });
    }
}


/********************************************************************
 * MAIN LOGIC
 ********************************************************************/

/*
 async function main()

 👉 Why async?
 - We are using await to wait for user input
 - async allows us to use await
*/
async function main() {

    // Step 1: Take user input
    const input = await ConsoleInput.readInput(
        "Enter a sentence with special characters: "
    );

    console.log("\nOriginal Input:");
    console.log(input);


    /****************************************************************
     * STEP 2: REMOVE SPECIAL CHARACTERS
     ****************************************************************/

    /*
     replace() method

     👉 input.replace(/[^a-zA-Z0-9 ]/g, "")

     Explanation of REGEX:
     - /.../g → Regular Expression
     - ^       → NOT
     - a-z     → lowercase letters
     - A-Z     → uppercase letters
     - 0-9     → numbers
     - space   → allow spaces
     - g       → global (replace all matches)

     👉 This removes:
     - commas (,)
     - dots (.)
     - special symbols (@#$%^&*)
    */
    const cleanedString = input.replace(/[^a-zA-Z0-9 ]/g, "");

    console.log("\nAfter Removing Special Characters:");
    console.log(cleanedString);


    /****************************************************************
     * STEP 3: FIND DUPLICATE WORDS
     ****************************************************************/

    /*
     toLowerCase()

     👉 Converts string to lowercase
     👉 Helps avoid case-sensitive duplicates
     Example:
     "Java" and "java" will be treated as same
    */
    const lowerCaseString = cleanedString.toLowerCase();

    /*
     split(" ")

     👉 Converts string into array of words
     Example:
     "hello world hello"
     → ["hello", "world", "hello"]
    */
    const words = lowerCaseString.split(" ");

    /*
     Object to store word count
     Example:
     {
       hello: 2,
       world: 1
     }
    */
    const wordCount = {};

    // Loop through each word
    for (let word of words) {

        /*
         Skip empty words (extra spaces)
        */
        if (word === "") continue;

        /*
         If word exists, increase count
         Otherwise, initialize with 1
        */
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }

    console.log("\nDuplicate Words:");

    /*
     Object.entries()

     👉 Converts object into array
     Example:
     {a:2, b:1}
     → [["a",2], ["b",1]]
    */
    let hasDuplicates = false;

    for (let [word, count] of Object.entries(wordCount)) {
        if (count > 1) {
            console.log(`"${word}" appears ${count} times`);
            hasDuplicates = true;
        }
    }

    if (!hasDuplicates) {
        console.log("No duplicate words found.");
    }
}


/********************************************************************
 * PROGRAM START
 ********************************************************************/

/*
 Calling main function
*/
main();
