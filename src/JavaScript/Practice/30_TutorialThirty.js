// To run this file:
// node src/JavaScript/Practice/30_TutorialThirty.js

// Miscellaneous JavaScript concepts and examples

// 1) Template Literals in JavaScript

// Template literals are a way to create strings in JavaScript that allow for easier string interpolation and multi-line strings. They are enclosed by backticks (`) instead of single or double quotes.

// Example of using template literals for string interpolation
const name = "John";
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is John and I am 30 years old.

// Example of using template literals for multi-line strings
const multiLineString = `This is a string   
that spans multiple lines.
It is very useful for formatting text.`;
console.log(multiLineString);
// Output:
// This is a string   
// that spans multiple lines.
// It is very useful for formatting text.

// Addition of expressions inside template literals
const a = 5;
const b = 10;
const sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum); // Output: The sum of 5 and 10 is 15.

// Example of using template literals with functions
function getUserInfo(user) {
return `User Info:  
Name: ${user.name}
Age: ${user.age}
Location: ${user.location}`;
}   

const user = {
    name: "Alice",
    age: 25,
    location: "New York"
};

console.log(getUserInfo(user));
// Output:
// User Info:  
// Name: Alice
// Age: 25
// Location: New York

function getXPath(name) {
    return `//div[@class='user'][@data-name='${name}']`;
}

console.log(getXPath("Alice")); // Output: //div[@class='user'][@data-name='Alice']

// ***************************************************************************************

// 2) Remove duplicates from an array in JavaScript

const numbers = [1, 2, 3, 2, 4, 1, 5, 3];

const names = ["Alice", "Bob", "Alice", "Charlie", "Bob"];

const uniqueNumbers = [...new Set(numbers)]; // Property of Set is that it only allows unique values
const uniqueNames = [...new Set(names)];
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
console.log(uniqueNames); // Output: ["Alice", "Bob", "Charlie"]

// ******************************************************************************************

// Reverse a number in JavaScript 

// 1) Using string manipulation
function reverseNumber(num) {
    const reversedString = num.toString().split('').reverse().join('');
    return parseInt(reversedString) * Math.sign(num); // To handle negative numbers
}
console.log(reverseNumber(123)); // Output: 321

// 2) Using mathematical operations
function reverseNumberMath(num) {
    let reversed = 0;
    const isNegative = num < 0;
    num = Math.abs(num);
    while (num > 0) {
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return isNegative ? -reversed : reversed;
}
console.log(reverseNumberMath(123)); // Output: 321

// 3) Using recursion
function reverseNumberRecursion(num, reversed = 0) {
    if (num === 0) return reversed;
    return reverseNumberRecursion(Math.floor(num / 10), reversed * 10 + num % 10);
}
console.log(reverseNumberRecursion(123)); // Output: 321

// 4) Using array methods
function reverseNumberArray(num) {
    return parseInt([...num.toString()].reverse().join('')) * Math.sign(num);
}
console.log(reverseNumberArray(123)); // Output: 321

// *******************************************************************************************

// ============================================================================
// JAVASCRIPT STRINGS
// Important String Properties, Methods & String Manipulation
// Basic → Intermediate → Advanced
// ============================================================================


// ============================================================================
// 1) CREATING STRINGS
// ============================================================================

const str1 = "Hello, World!";
const str2 = 'Hello, JavaScript!';
const str3 = `Hello, Developer!`;

console.log(str1); // Output: Hello, World!
console.log(str2); // Output: Hello, JavaScript!
console.log(str3); // Output: Hello, Developer!


// ============================================================================
// 2) STRING LENGTH PROPERTY
// ============================================================================

const str = "Hello, World!";

console.log(str.length);
// Output: 13

// Index positions:
// H e l l o ,   W o r l d !
// 0 1 2 3 4 5 6 7 8 9 10 11 12


// ============================================================================
// 3) ACCESSING CHARACTERS
// ============================================================================

// Using bracket notation

console.log(str[0]);
// Output: H

console.log(str[2]);
// Output: l

console.log(str[7]);
// Output: W

console.log("Ratnakar"[5]);
// Output: k


// Using charAt()

console.log(str.charAt(0));
// Output: H

console.log(str.charAt(7));
// Output: W

console.log("Ratnakar".charAt(5));
// Output: k


// Invalid index

console.log(str[100]);
// Output: undefined

console.log(str.charAt(100));
// Output: ""


// ============================================================================
// 4) charCodeAt()
// ============================================================================

// Returns UTF-16 code unit of the character at the specified index.

console.log(str.charCodeAt(0));
// Output: 72

console.log(str.charCodeAt(1));
// Output: 101

console.log("A".charCodeAt(0));
// Output: 65

console.log("a".charCodeAt(0));
// Output: 97


// ============================================================================
// 5) codePointAt()
// ============================================================================

// Returns the Unicode code point of a character.

console.log("A".codePointAt(0));
// Output: 65

console.log("😀".codePointAt(0));
// Output: 128512


// Difference:
// charCodeAt() → UTF-16 code unit
// codePointAt() → Unicode code point


// ============================================================================
// 6) toUpperCase()
// ============================================================================

console.log(str.toUpperCase());
// Output: HELLO, WORLD!


// ============================================================================
// 7) toLowerCase()
// ============================================================================

console.log(str.toLowerCase());
// Output: hello, world!


// ============================================================================
// 8) toLocaleUpperCase()
// ============================================================================

console.log("hello".toLocaleUpperCase());
// Output: HELLO


// ============================================================================
// 9) toLocaleLowerCase()
// ============================================================================

console.log("HELLO".toLocaleLowerCase());
// Output: hello


// ============================================================================
// 10) indexOf()
// ============================================================================

console.log(str.indexOf("World"));
// Output: 7

console.log(str.indexOf("Hello"));
// Output: 0

console.log(str.indexOf("JavaScript"));
// Output: -1


// ============================================================================
// 11) lastIndexOf()
// ============================================================================

const repeated = "JavaScript is great. JavaScript is powerful.";

console.log(repeated.lastIndexOf("JavaScript"));
// Output: 21

console.log(repeated.lastIndexOf("is"));
// Output: 36


// ============================================================================
// 12) includes()
// ============================================================================

console.log(str.includes("Hello"));
// Output: true

console.log(str.includes("World"));
// Output: true

console.log(str.includes("Java"));
// Output: false


// Case-sensitive

console.log(str.includes("hello"));
// Output: false


// ============================================================================
// 13) startsWith()
// ============================================================================

console.log(str.startsWith("Hello"));
// Output: true

console.log(str.startsWith("World"));
// Output: false


// Starting from index 7

console.log(str.startsWith("World", 7));
// Output: true


// ============================================================================
// 14) endsWith()
// ============================================================================

console.log(str.endsWith("World!"));
// Output: true

console.log(str.endsWith("Hello"));
// Output: false


// ============================================================================
// 15) substring()
// ============================================================================

console.log(str.substring(0, 5));
// Output: Hello

console.log(str.substring(7, 12));
// Output: World


// If start > end, substring swaps them

console.log(str.substring(5, 0));
// Output: Hello


// Negative values are treated as 0

console.log(str.substring(-5, 5));
// Output: Hello


// ============================================================================
// 16) slice()
// ============================================================================

console.log(str.slice(0, 5));
// Output: Hello

console.log(str.slice(7, 12));
// Output: World


// Negative indexes are supported

console.log(str.slice(-6));
// Output: World!

console.log(str.slice(-6, -1));
// Output: World


// ============================================================================
// 17) substr() - LEGACY
// ============================================================================

// substr(start, length)

// This method is deprecated/legacy.
// Avoid using it in new code.

console.log(str.substr(0, 5));
// Output: Hello

console.log(str.substr(7, 5));
// Output: World


// ============================================================================
// 18) replace()
// ============================================================================

console.log(str.replace("World", "JavaScript"));
// Output: Hello, JavaScript!


// replace() replaces only the first matching occurrence.

const text = "JavaScript is great. JavaScript is powerful.";

console.log(text.replace("JavaScript", "JS"));
// Output: JS is great. JavaScript is powerful.


// ============================================================================
// 19) replaceAll()
// ============================================================================

console.log(text.replaceAll("JavaScript", "JS"));
// Output: JS is great. JS is powerful.


// ============================================================================
// 20) replace() WITH REGULAR EXPRESSION
// ============================================================================

console.log(text.replace(/JavaScript/g, "JS"));
// Output: JS is great. JS is powerful.


// ============================================================================
// 21) trim()
// ============================================================================

const userInput = "   Hello, World!   ";

console.log(userInput.trim());
// Output: Hello, World!


// Original string remains unchanged

console.log(userInput);
// Output:    Hello, World!


// ============================================================================
// 22) trimStart()
// ============================================================================

console.log(userInput.trimStart());
// Output: Hello, World!   


// ============================================================================
// 23) trimEnd()
// ============================================================================

console.log(userInput.trimEnd());
// Output:    Hello, World!


// ============================================================================
// 24) concat()
// ============================================================================

const firstName = "Ratnakar";
const lastName = "Kolhatkar";

console.log(firstName.concat(" ", lastName));
// Output: Ratnakar Kolhatkar


// Multiple strings

console.log("Hello".concat(" ", "World", "!"));
// Output: Hello World!


// Template literals are generally preferred for string composition.


// ============================================================================
// 25) repeat()
// ============================================================================

console.log("Hello ".repeat(3));
// Output: Hello Hello Hello 


console.log("*".repeat(10));
// Output: **********


// ============================================================================
// 26) padStart()
// ============================================================================

const number = "5";

console.log(number.padStart(3, "0"));
// Output: 005

console.log("42".padStart(5, "0"));
// Output: 00042


// ============================================================================
// 27) padEnd()
// ============================================================================

console.log(number.padEnd(3, "0"));
// Output: 500

console.log("42".padEnd(5, "0"));
// Output: 42000


// ============================================================================
// 28) split()
// ============================================================================

// Convert string into array

console.log("Apple,Banana,Orange".split(","));
// Output: [ 'Apple', 'Banana', 'Orange' ]


// Split by space

console.log("Hello World JavaScript".split(" "));
// Output: [ 'Hello', 'World', 'JavaScript' ]


// Split every character

console.log("Hello".split(""));
// Output: [ 'H', 'e', 'l', 'l', 'o' ]


// ============================================================================
// 29) split() WITH LIMIT
// ============================================================================

console.log("A-B-C-D".split("-", 2));
// Output: [ 'A', 'B' ]


// ============================================================================
// 30) STRING TO ARRAY USING SPREAD OPERATOR
// ============================================================================

console.log([..."Hello"]);
// Output: [ 'H', 'e', 'l', 'l', 'o' ]


// ============================================================================
// 31) Array.join() - ARRAY TO STRING
// ============================================================================

const words = ["Hello", "World", "JavaScript"];

console.log(words.join(" "));
// Output: Hello World JavaScript

console.log(words.join("-"));
// Output: Hello-World-JavaScript

console.log(words.join(""));
// Output: HelloWorldJavaScript


// ============================================================================
// 32) SEARCH()
// ============================================================================

// search() accepts a regular expression.

console.log("Hello JavaScript".search("Java"));
// Output: 6

console.log("Hello JavaScript".search(/JavaScript/));
// Output: 6

console.log("Hello JavaScript".search(/Python/));
// Output: -1


// ============================================================================
// 33) match()
// ============================================================================

const sentence = "JavaScript is powerful and JavaScript is popular.";

console.log(sentence.match(/JavaScript/g));
// Output: [ 'JavaScript', 'JavaScript' ]


// Without g

console.log(sentence.match(/JavaScript/));
// Output contains information about the first match


// ============================================================================
// 34) matchAll()
// ============================================================================

// matchAll() returns an iterator.

const matches = [...sentence.matchAll(/JavaScript/g)];

console.log(matches.length);
// Output: 2

console.log(matches[0][0]);
// Output: JavaScript

console.log(matches[1][0]);
// Output: JavaScript


// ============================================================================
// 35) String.raw()
// ============================================================================

// Useful for raw strings.

console.log(String.raw`Hello\nWorld`);
// Output: Hello\nWorld

console.log(`Hello\nWorld`);
// Output:
// Hello
// World


// ============================================================================
// 36) ESCAPE CHARACTERS
// ============================================================================

console.log("Hello\nWorld");
// Output:
// Hello
// World

console.log("Hello\tWorld");
// Output: Hello    World

console.log("He said \"Hello\"");
// Output: He said "Hello"

console.log('It\'s JavaScript');
// Output: It's JavaScript

console.log("C:\\Users\\Ratnakar");
// Output: C:\Users\Ratnakar


// ============================================================================
// 37) TEMPLATE LITERALS
// ============================================================================

const tutorialName = "Ratnakar";
const tutorialAge = 27;

console.log(`My name is ${tutorialName}`);
// Output: My name is Ratnakar

console.log(`I am ${tutorialAge} years old.`);
// Output: I am 27 years old.

console.log(`2 + 3 = ${2 + 3}`);
// Output: 2 + 3 = 5


// ============================================================================
// 38) MULTI-LINE STRINGS
// ============================================================================

const message = `
Hello,
Welcome to JavaScript.
Have a great day!
`;

console.log(message);

// Output:
// Hello,
// Welcome to JavaScript.
// Have a great day!


// ============================================================================
// 39) STRING IMMUTABILITY
// ============================================================================

let greetingForImmutability = "Hello";

greetingForImmutability[0] = "Y";

console.log(greetingForImmutability);
// Output: Hello

// Strings are immutable.
// Individual characters cannot be directly changed.


// Correct approach:

greetingForImmutability = "Y" + greetingForImmutability.slice(1);

console.log(greetingForImmutability);
// Output: Yello


// ============================================================================
// 40) CHECKING STRING TYPE
// ============================================================================

const language = "JavaScript";

console.log(typeof language);
// Output: string


// ============================================================================
// 41) String() CONVERSION
// ============================================================================

console.log(String(123));
// Output: 123

console.log(String(true));
// Output: true

console.log(String(null));
// Output: null

console.log(String(undefined));
// Output: undefined


// ============================================================================
// 42) toString() CONVERSION
// ============================================================================

console.log((123).toString());
// Output: 123

console.log(true.toString());
// Output: true


// ============================================================================
// 43) NUMBER TO STRING
// ============================================================================

const num = 100;

console.log(num.toString());
// Output: 100

console.log(typeof num.toString());
// Output: string


// ============================================================================
// 44) STRING TO NUMBER
// ============================================================================

console.log(Number("123"));
// Output: 123

console.log(Number("10.5"));
// Output: 10.5

console.log(Number("Hello"));
// Output: NaN


// ============================================================================
// 45) parseInt()
// ============================================================================

console.log(parseInt("100"));
// Output: 100

console.log(parseInt("100px"));
// Output: 100

console.log(parseInt("10.99"));
// Output: 10


// ============================================================================
// 46) parseFloat()
// ============================================================================

console.log(parseFloat("10.99"));
// Output: 10.99

console.log(parseFloat("10.99px"));
// Output: 10.99


// ============================================================================
// 47) STRING COMPARISON
// ============================================================================

console.log("apple" === "apple");
// Output: true

console.log("apple" === "Apple");
// Output: false

console.log("apple" !== "Apple");
// Output: true


// ============================================================================
// 48) STRING COMPARISON OPERATORS
// ============================================================================

console.log("apple" < "banana");
// Output: true

console.log("zebra" > "apple");
// Output: true


// String comparison is based on Unicode/code-point ordering.


// ============================================================================
// 49) localeCompare()
// ============================================================================

console.log("apple".localeCompare("banana"));
// Output: Negative number

console.log("banana".localeCompare("apple"));
// Output: Positive number

console.log("apple".localeCompare("apple"));
// Output: 0


// Common usage:

const fruits = ["banana", "apple", "orange"];

fruits.sort((a, b) => a.localeCompare(b));

console.log(fruits);
// Output: [ 'apple', 'banana', 'orange' ]


// ============================================================================
// 50) NORMALIZE()
// ============================================================================

// Used for Unicode normalization.

const text1 = "\u00E9";
const text2 = "e\u0301";

console.log(text1 === text2);
// Output: false

console.log(text1.normalize() === text2.normalize());
// Output: true


// ============================================================================
// 51) REGULAR EXPRESSIONS WITH STRINGS
// ============================================================================

// Check if string contains only numbers

console.log(/^\d+$/.test("12345"));
// Output: true

console.log(/^\d+$/.test("123abc"));
// Output: false


// Check email-like pattern

console.log(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test("test@example.com"));
// Output: true


// ============================================================================
// 52) REGEX test()
// ============================================================================

const email = "ratnakar@example.com";

console.log(/@/.test(email));
// Output: true


// ============================================================================
// 53) REGEX exec()
// ============================================================================

const result = /JavaScript/.exec("I love JavaScript");

console.log(result[0]);
// Output: JavaScript

console.log(result.index);
// Output: 7


// ============================================================================
// 54) REMOVING WHITESPACE
// ============================================================================

const input = "   JavaScript   ";

console.log(input.trim());
// Output: JavaScript

console.log(input.replace(/\s/g, ""));
// Output: JavaScript


// ============================================================================
// 55) REMOVING ALL SPACES BETWEEN WORDS
// ============================================================================

const sentence2 = "JavaScript is very powerful";

console.log(sentence2.replace(/\s+/g, ""));
// Output: JavaScriptisverypowerful


// ============================================================================
// 56) REPLACING MULTIPLE SPACES WITH ONE SPACE
// ============================================================================

const messyText = "Hello     World     JavaScript";

console.log(messyText.replace(/\s+/g, " "));
// Output: Hello World JavaScript


// ============================================================================
// 57) CAPITALIZE FIRST LETTER
// ============================================================================

const word = "javascript";

const capitalized =
    word.charAt(0).toUpperCase() + word.slice(1);

console.log(capitalized);
// Output: Javascript


// ============================================================================
// 58) CAPITALIZE EVERY WORD
// ============================================================================

const sentence3 = "hello world javascript";

const titleCase = sentence3
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

console.log(titleCase);
// Output: Hello World Javascript


// ============================================================================
// 59) CONVERT SENTENCE TO UPPERCASE WORDS
// ============================================================================

console.log("hello world".toUpperCase());
// Output: HELLO WORLD


// ============================================================================
// 60) REVERSE A STRING
// ============================================================================

const original = "Hello";

const reversed = original
    .split("")
    .reverse()
    .join("");

console.log(reversed);
// Output: olleH


// ============================================================================
// 61) CHECK PALINDROME
// ============================================================================

const palindrome = "madam";

const reversedPalindrome = palindrome
    .split("")
    .reverse()
    .join("");

console.log(palindrome === reversedPalindrome);
// Output: true


// ============================================================================
// 62) COUNT CHARACTERS
// ============================================================================

const text4 = "JavaScript";

console.log(text4.length);
// Output: 10


// ============================================================================
// 63) COUNT OCCURRENCE OF A CHARACTER
// ============================================================================

const text5 = "banana";

const countA = text5.split("a").length - 1;

console.log(countA);
// Output: 3


// ============================================================================
// 64) COUNT OCCURRENCE USING REGEX
// ============================================================================

const text6 = "banana";

const matchesA = text6.match(/a/g);

console.log(matchesA.length);
// Output: 3


// ============================================================================
// 65) CHECK EMPTY STRING
// ============================================================================

const emptyString = "";

console.log(emptyString.length === 0);
// Output: true

console.log(emptyString === "");
// Output: true


// ============================================================================
// 66) CHECK NON-EMPTY STRING
// ============================================================================

const value = "Hello";

console.log(value.length > 0);
// Output: true


// ============================================================================
// 67) REMOVE FIRST CHARACTER
// ============================================================================

const word2 = "Hello";

console.log(word2.slice(1));
// Output: ello


// ============================================================================
// 68) REMOVE LAST CHARACTER
// ============================================================================

console.log(word2.slice(0, -1));
// Output: Hell


// ============================================================================
// 69) GET FIRST CHARACTER
// ============================================================================

console.log(word2.charAt(0));
// Output: H

console.log(word2[0]);
// Output: H


// ============================================================================
// 70) GET LAST CHARACTER
// ============================================================================

console.log(word2.charAt(word2.length - 1));
// Output: o

console.log(word2[word2.length - 1]);
// Output: o

console.log(word2.at(-1));
// Output: o


// ============================================================================
// 71) at()
// ============================================================================

// at() supports negative indexes.

const example = "JavaScript";

console.log(example.at(0));
// Output: J

console.log(example.at(4));
// Output: S

console.log(example.at(-1));
// Output: t

console.log(example.at(-2));
// Output: p


// Difference:

console.log(example[example.length - 1]);
// Output: t

console.log(example.at(-1));
// Output: t


// ============================================================================
// 72) EXTRACT LAST N CHARACTERS
// ============================================================================

const filename = "document.pdf";

console.log(filename.slice(-3));
// Output: pdf


// ============================================================================
// 73) CHECK FILE EXTENSION
// ============================================================================

console.log(filename.endsWith(".pdf"));
// Output: true


// ============================================================================
// 74) REMOVE FILE EXTENSION
// ============================================================================

console.log(filename.slice(0, filename.lastIndexOf(".")));
// Output: document


// ============================================================================
// 75) EXTRACT DOMAIN FROM EMAIL
// ============================================================================

const emailAddress = "user@gmail.com";

const domain = emailAddress.slice(
    emailAddress.indexOf("@") + 1
);

console.log(domain);
// Output: gmail.com


// ============================================================================
// 76) EXTRACT USERNAME FROM EMAIL
// ============================================================================

const username = emailAddress.slice(
    0,
    emailAddress.indexOf("@")
);

console.log(username);
// Output: user


// ============================================================================
// 77) CHECK WHETHER STRING CONTAINS ONLY NUMBERS
// ============================================================================

console.log(/^\d+$/.test("123456"));
// Output: true

console.log(/^\d+$/.test("123abc"));
// Output: false


// ============================================================================
// 78) CHECK WHETHER STRING CONTAINS ONLY LETTERS
// ============================================================================

console.log(/^[A-Za-z]+$/.test("JavaScript"));
// Output: true

console.log(/^[A-Za-z]+$/.test("JavaScript123"));
// Output: false


// ============================================================================
// 79) CHECK ALPHANUMERIC STRING
// ============================================================================

console.log(/^[A-Za-z0-9]+$/.test("JavaScript123"));
// Output: true

console.log(/^[A-Za-z0-9]+$/.test("JavaScript@123"));
// Output: false


// ============================================================================
// 80) MASK SENSITIVE DATA
// ============================================================================

const cardNumber = "1234567812345678";

const maskedCard =
    "*".repeat(cardNumber.length - 4) +
    cardNumber.slice(-4);

console.log(maskedCard);
// Output: ************5678


// ============================================================================
// 81) MASK EMAIL
// ============================================================================

const userEmail = "ratnakar@gmail.com";

const atIndex = userEmail.indexOf("@");

const maskedEmail =
    userEmail[0] +
    "*".repeat(atIndex - 1) +
    userEmail.slice(atIndex);

console.log(maskedEmail);
// Output: r*******@gmail.com


// ============================================================================
// 82) REMOVE DUPLICATE SPACES
// ============================================================================

const messy = "Hello      World     JavaScript";

const cleaned = messy
    .trim()
    .replace(/\s+/g, " ");

console.log(cleaned);
// Output: Hello World JavaScript


// ============================================================================
// 83) CONVERT STRING TO ARRAY OF WORDS
// ============================================================================

const sentence4 = "JavaScript is awesome";

const wordsArray = sentence4.split(" ");

console.log(wordsArray);
// Output: [ 'JavaScript', 'is', 'awesome' ]


// ============================================================================
// 84) GET NUMBER OF WORDS
// ============================================================================

console.log(sentence4.trim().split(/\s+/).length);
// Output: 3


// ============================================================================
// 85) CHECK IF TWO STRINGS ARE EQUAL IGNORING CASE
// ============================================================================

const value1 = "Hello";
const value2 = "hello";

console.log(
    value1.toLowerCase() === value2.toLowerCase()
);
// Output: true


// ============================================================================
// 86) CHECK IF TWO STRINGS ARE EQUAL IGNORING CASE + SPACES
// ============================================================================

const value3 = "  Hello ";
const value4 = "hello";

console.log(
    value3.trim().toLowerCase() ===
    value4.trim().toLowerCase()
);
// Output: true


// ============================================================================
// 87) SEARCH CASE-INSENSITIVELY
// ============================================================================

const message2 = "Hello JavaScript";

console.log(
    message2.toLowerCase().includes("javascript")
);
// Output: true


// ============================================================================
// 88) INSERT STRING AT A POSITION
// ============================================================================

const originalText = "Hello World";

const position = 6;

const inserted =
    originalText.slice(0, position) +
    "Beautiful " +
    originalText.slice(position);

console.log(inserted);
// Output: Hello Beautiful World


// ============================================================================
// 89) REMOVE STRING FROM A POSITION
// ============================================================================

const originalText2 = "Hello Beautiful World";

const removed =
    originalText2.slice(0, 6) +
    originalText2.slice(16);

console.log(removed);
// Output: Hello World


// ============================================================================
// 90) REPLACE CHARACTER AT INDEX
// ============================================================================

const originalText3 = "Hello";

const modified =
    originalText3.slice(0, 1) +
    "a" +
    originalText3.slice(2);

console.log(modified);
// Output: Hallo


// ============================================================================
// 91) CONVERT STRING TO CHARACTER ARRAY
// ============================================================================

console.log(Array.from("Hello"));
// Output: [ 'H', 'e', 'l', 'l', 'o' ]


// ============================================================================
// 92) Array.from() WITH TRANSFORMATION
// ============================================================================

console.log(
    Array.from("hello", char => char.toUpperCase())
);

// Output: [ 'H', 'E', 'L', 'L', 'O' ]


// ============================================================================
// 93) ITERATING THROUGH STRING
// ============================================================================

for (const char of "Hello") {
    console.log(char);
}

// Output:
// H
// e
// l
// l
// o


// ============================================================================
// 94) STRING DESTRUCTURING
// ============================================================================

const [first, second, third] = "Hello";

console.log(first);
// Output: H

console.log(second);
// Output: e

console.log(third);
// Output: l


// ============================================================================
// 95) STRING SPREAD
// ============================================================================

const characters = [..."Hello"];

console.log(characters);
// Output: [ 'H', 'e', 'l', 'l', 'o' ]


// ============================================================================
// 96) TEMPLATE LITERAL EXPRESSIONS
// ============================================================================

const templateLiteralA = 10;
const templateLiteralB = 20;

console.log(`Sum = ${templateLiteralA + templateLiteralB}`);
// Output: Sum = 30

console.log(`Is greater? ${templateLiteralA > templateLiteralB}`);
// Output: Is greater? false


// ============================================================================
// 97) CONDITIONAL STRING USING TEMPLATE LITERAL
// ============================================================================

const userName = "Ratnakar";
const loggedIn = true;

console.log(
    `Welcome ${loggedIn ? userName : "Guest"}`
);

// Output: Welcome Ratnakar


// ============================================================================
// 98) STRING INTERPOLATION
// ============================================================================

const product = "Laptop";
const price = 50000;

console.log(`The ${product} costs ₹${price}.`);
// Output: The Laptop costs ₹50000.


// ============================================================================
// 99) MULTIPLE REPLACEMENTS USING replaceAll()
// ============================================================================

const url = "https://example.com/user/user/profile";

console.log(url.replaceAll("user", "admin"));
// Output: https://example.com/admin/admin/profile


// ============================================================================
// 100) NORMALIZE USER INPUT
// ============================================================================

const rawInput = "   HELLO World   ";

const normalizedInput =
    rawInput.trim().toLowerCase();

console.log(normalizedInput);
// Output: hello world


// ============================================================================
// 101) CLEAN AND FORMAT NAME
// ============================================================================

const rawName = "   rATNAKAR kOLHATKAR   ";

const formattedName = rawName
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map(
        word =>
            word.charAt(0).toUpperCase() +
            word.slice(1)
    )
    .join(" ");

console.log(formattedName);
// Output: Ratnakar Kolhatkar


// ============================================================================
// 102) CHECK STRING LENGTH RANGE
// ============================================================================

const password = "JavaScript123";

console.log(
    password.length >= 8 && password.length <= 20
);
// Output: true


// ============================================================================
// 103) CHECK PASSWORD REQUIREMENTS
// ============================================================================

const password2 = "JavaScript123!";

const hasUppercase = /[A-Z]/.test(password2);
const hasLowercase = /[a-z]/.test(password2);
const hasNumber = /[0-9]/.test(password2);
const hasSpecialCharacter = /[^A-Za-z0-9]/.test(password2);

console.log(hasUppercase);
// Output: true

console.log(hasLowercase);
// Output: true

console.log(hasNumber);
// Output: true

console.log(hasSpecialCharacter);
// Output: true


// ============================================================================
// 104) EXTRACT NUMBERS FROM STRING
// ============================================================================

const order = "Order ID: 12345";

const orderNumbers = order.match(/\d+/);

console.log(orderNumbers[0]);
// Output: 12345


// ============================================================================
// 105) EXTRACT ALL NUMBERS
// ============================================================================

const data = "Orders: 123, 456, 789";

console.log(data.match(/\d+/g));
// Output: [ '123', '456', '789' ]


// ============================================================================
// 106) EXTRACT ALL WORDS
// ============================================================================

const text7 = "Hello JavaScript World";

console.log(text7.match(/\w+/g));
// Output: [ 'Hello', 'JavaScript', 'World' ]


// ============================================================================
// 107) REMOVE SPECIAL CHARACTERS
// ============================================================================

const specialText = "Hello@World!#$123";

console.log(
    specialText.replace(/[^A-Za-z0-9 ]/g, "")
);
// Output: HelloWorld123


// ============================================================================
// 108) KEEP ONLY NUMBERS
// ============================================================================

const mixedData = "ABC123XYZ456";

console.log(
    mixedData.replace(/\D/g, "")
);
// Output: 123456


// ============================================================================
// 109) KEEP ONLY LETTERS
// ============================================================================

const mixedData2 = "ABC123XYZ456";

console.log(
    mixedData2.replace(/[^A-Za-z]/g, "")
);
// Output: ABCXYZ


// ============================================================================
// 110) CHECK PALINDROME IGNORING CASE
// ============================================================================

const word3 = "Madam";

const normalizedWord =
    word3.toLowerCase();

console.log(
    normalizedWord ===
    normalizedWord.split("").reverse().join("")
);
// Output: true


// ============================================================================
// 111) CHECK PALINDROME IGNORING SPACES AND SPECIAL CHARACTERS
// ============================================================================

const phrase = "A man, a plan, a canal: Panama";

const normalizedPhrase =
    phrase
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

console.log(
    normalizedPhrase ===
    normalizedPhrase.split("").reverse().join("")
);
// Output: true


// ============================================================================
// 112) FIND LONGEST WORD
// ============================================================================

const sentence5 = "JavaScript is extremely powerful";

const longestWord = sentence5
    .split(" ")
    .reduce(
        (longest, current) =>
            current.length > longest.length
                ? current
                : longest
    );

console.log(longestWord);
// Output: extremely


// ============================================================================
// 113) FIND SHORTEST WORD
// ============================================================================

const shortestWord = sentence5
    .split(" ")
    .reduce(
        (shortest, current) =>
            current.length < shortest.length
                ? current
                : shortest
    );

console.log(shortestWord);
// Output: is


// ============================================================================
// 114) COUNT VOWELS
// ============================================================================

const word4 = "JavaScript";

const vowels =
    word4.match(/[aeiou]/gi);

console.log(vowels.length);
// Output: 3


// ============================================================================
// 115) COUNT CONSONANTS
// ============================================================================

const consonants =
    word4.match(/[bcdfghjklmnpqrstvwxyz]/gi);

console.log(consonants.length);
// Output: 7


// ============================================================================
// 116) REMOVE VOWELS
// ============================================================================

console.log(
    word4.replace(/[aeiou]/gi, "")
);
// Output: JvScrpt


// ============================================================================
// 117) ADD PREFIX
// ============================================================================

const file = "report.pdf";

console.log("final_" + file);
// Output: final_report.pdf


// Using template literal

console.log(`final_${file}`);
// Output: final_report.pdf


// ============================================================================
// 118) ADD SUFFIX
// ============================================================================

console.log(
    file.replace(".pdf", "_backup.pdf")
);
// Output: report_backup.pdf


// ============================================================================
// 119) CHECK STRING WITH OPTIONAL CHAINING
// ============================================================================

const userWithName = {
    name: "Ratnakar"
};

console.log(userWithName.name?.toUpperCase());
// Output: RATNAKAR


// ============================================================================
// 120) NULLISH COALESCING WITH STRING
// ============================================================================

const userName2 = null;

console.log(userName2 ?? "Guest");
// Output: Guest


// ============================================================================
// 121) CONVERT STRING TO BOOLEAN
// ============================================================================

console.log(Boolean("Hello"));
// Output: true

console.log(Boolean(""));
// Output: false


// ============================================================================
// 122) TRUTHY / FALSY STRING
// ============================================================================

if ("Hello") {
    console.log("String is truthy");
}

// Output: String is truthy


if ("") {
    console.log("This will not execute");
}


// ============================================================================
// 123) STRING OBJECT VS STRING PRIMITIVE
// ============================================================================

const primitiveString = "Hello";

const objectString = new String("Hello");

console.log(typeof primitiveString);
// Output: string

console.log(typeof objectString);
// Output: object


console.log(primitiveString === "Hello");
// Output: true

console.log(objectString === "Hello");
// Output: false


// Avoid new String() in normal JavaScript code.


// ============================================================================
// 124) STRING CONSTRUCTOR
// ============================================================================

console.log(String("Hello"));
// Output: Hello

console.log(String(123));
// Output: 123


// ============================================================================
// 125) STATIC String.fromCharCode()
// ============================================================================

console.log(String.fromCharCode(72));
// Output: H

console.log(String.fromCharCode(72, 101, 108, 108, 111));
// Output: Hello


// ============================================================================
// 126) STATIC String.fromCodePoint()
// ============================================================================

console.log(String.fromCodePoint(65));
// Output: A

console.log(String.fromCodePoint(128512));
// Output: 😀


// ============================================================================
// 127) STRING ITERATOR
// ============================================================================

const iterator = "Hello"[Symbol.iterator]();

console.log(iterator.next().value);
// Output: H

console.log(iterator.next().value);
// Output: e

console.log(iterator.next().value);
// Output: l


// ============================================================================
// 128) GET STRING FROM ARRAY
// ============================================================================

const characters2 = ["J", "a", "v", "a"];

console.log(characters2.join(""));
// Output: Java


// ============================================================================
// 129) BUILD STRING USING ARRAY
// ============================================================================

const letters = [];

letters.push("H");
letters.push("e");
letters.push("l");
letters.push("l");
letters.push("o");

console.log(letters.join(""));
// Output: Hello


// ============================================================================
// 130) REPLACE FIRST CHARACTER WITH UPPERCASE
// ============================================================================

const nameText = "ratnakar";

const resultName =
    nameText.charAt(0).toUpperCase() +
    nameText.slice(1);

console.log(resultName);
// Output: Ratnakar


// ============================================================================
// 131) CAMEL CASE CONVERSION
// ============================================================================

const phrase2 = "hello world javascript";

const camelCase = phrase2
    .split(" ")
    .map((word, index) =>
        index === 0
            ? word.toLowerCase()
            : word.charAt(0).toUpperCase() +
              word.slice(1).toLowerCase()
    )
    .join("");

console.log(camelCase);
// Output: helloWorldJavascript


// ============================================================================
// 132) SNAKE CASE CONVERSION
// ============================================================================

const phrase3 = "Hello World JavaScript";

const snakeCase = phrase3
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_");

console.log(snakeCase);
// Output: hello_world_javascript


// ============================================================================
// 133) KEBAB CASE CONVERSION
// ============================================================================

const phrase4 = "Hello World JavaScript";

const kebabCase = phrase4
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

console.log(kebabCase);
// Output: hello-world-javascript


// ============================================================================
// 134) REMOVE DUPLICATE CHARACTERS
// ============================================================================

const duplicateText = "programming";

const uniqueCharacters = [
    ...new Set(duplicateText)
].join("");

console.log(uniqueCharacters);
// Output: progamin


// ============================================================================
// 135) CHECK IF STRING CONTAINS DUPLICATES
// ============================================================================

const testString = "hello";

const hasDuplicateCharacters =
    new Set(testString).size !== testString.length;

console.log(hasDuplicateCharacters);
// Output: true


// ============================================================================
// 136) FIND FIRST UNIQUE CHARACTER
// ============================================================================

const testString2 = "swiss";

const firstUnique = [...testString2]
    .find(
        char =>
            testString2.indexOf(char) ===
            testString2.lastIndexOf(char)
    );

console.log(firstUnique);
// Output: w


// ============================================================================
// 137) STRING PADDING FOR IDs
// ============================================================================

const employeeId = "123";

console.log(employeeId.padStart(6, "0"));
// Output: 000123


// ============================================================================
// 138) FORMAT CURRENCY AS STRING
// ============================================================================

const amount = 123456.78;

console.log(
    amount.toLocaleString("en-IN")
);
// Output: 1,23,456.78


// ============================================================================
// 139) FORMAT CURRENCY
// ============================================================================

console.log(
    amount.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR"
    })
);

// Output: ₹1,23,456.78


// ============================================================================
// 140) CONVERT NUMBER TO FIXED DECIMAL STRING
// ============================================================================

const priceValue = 99.5;

console.log(priceValue.toFixed(2));
// Output: 99.50


// ============================================================================
// 141) CHAINING STRING METHODS
// ============================================================================

const rawText =
    "   HELLO JavaScript WORLD   ";

const cleanedText =
    rawText
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");

console.log(cleanedText);
// Output: hello javascript world


// ============================================================================
// 142) CHAINING WITH REPLACE
// ============================================================================

const userInput2 =
    "  Hello, JavaScript!  ";

const finalText =
    userInput2
        .trim()
        .replace(",", "")
        .replace("!", "")
        .toUpperCase();

console.log(finalText);
// Output: HELLO JAVASCRIPT


// ============================================================================
// 143) WORD FREQUENCY
// ============================================================================

const sentence6 =
    "JavaScript is great and JavaScript is powerful";

const wordFrequency = {};

sentence6
    .toLowerCase()
    .split(/\s+/)
    .forEach(word => {
        wordFrequency[word] =
            (wordFrequency[word] || 0) + 1;
    });

console.log(wordFrequency);

// Output:
// {
//   javascript: 2,
//   is: 2,
//   great: 1,
//   and: 1,
//   powerful: 1
// }


// ============================================================================
// 144) CHARACTER FREQUENCY
// ============================================================================

const frequencyText = "banana";

const charFrequency = {};

for (const char of frequencyText) {
    charFrequency[char] =
        (charFrequency[char] || 0) + 1;
}

console.log(charFrequency);

// Output:
// {
//   b: 1,
//   a: 3,
//   n: 2
// }


// ============================================================================
// 145) SORT CHARACTERS IN STRING
// ============================================================================

const unsorted = "javascript";

const sorted = [...unsorted]
    .sort()
    .join("");

console.log(sorted);
// Output: aacijprstv


// ============================================================================
// 146) ANAGRAM CHECK
// ============================================================================

const wordA = "listen";
const wordB = "silent";

const normalize = str =>
    str
        .toLowerCase()
        .split("")
        .sort()
        .join("");

console.log(normalize(wordA) === normalize(wordB));
// Output: true


// ============================================================================
// 147) CHECK IF STRING IS ONLY WHITESPACE
// ============================================================================

const whitespace = "   ";

console.log(whitespace.trim().length === 0);
// Output: true


// ============================================================================
// 148) CHECK IF STRING CONTAINS WHITESPACE
// ============================================================================

console.log(/\s/.test("Hello World"));
// Output: true

console.log(/\s/.test("HelloWorld"));
// Output: false


// ============================================================================
// 149) REMOVE LEADING ZEROS
// ============================================================================

const numericString = "00012345";

console.log(numericString.replace(/^0+/, ""));
// Output: 12345


// ============================================================================
// 150) STRING TO INTEGER
// ============================================================================

const stringNumber = "123";

console.log(parseInt(stringNumber, 10));
// Output: 123


// ============================================================================
// 151) STRING TO FLOAT
// ============================================================================

const stringFloat = "123.45";

console.log(parseFloat(stringFloat));
// Output: 123.45


// ============================================================================
// 152) CHECK NaN AFTER STRING CONVERSION
// ============================================================================

const invalidNumber = "abc";

console.log(Number.isNaN(Number(invalidNumber)));
// Output: true


// ============================================================================
// 153) FIND CHARACTER AT MIDDLE
// ============================================================================

const middleText = "JavaScript";

const middleIndex =
    Math.floor(middleText.length / 2);

console.log(middleText[middleIndex]);
// Output: S


// ============================================================================
// 154) GET FIRST N CHARACTERS
// ============================================================================

console.log("JavaScript".slice(0, 4));
// Output: Java


// ============================================================================
// 155) GET LAST N CHARACTERS
// ============================================================================

console.log("JavaScript".slice(-6));
// Output: cript


// ============================================================================
// 156) TRUNCATE STRING
// ============================================================================

const longText =
    "JavaScript is a powerful programming language";

const truncated =
    longText.length > 20
        ? longText.slice(0, 20) + "..."
        : longText;

console.log(truncated);
// Output: JavaScript is a pow...


/*
===============================================================================
IMPORTANT JAVASCRIPT STRING METHODS - QUICK REFERENCE
===============================================================================

PROPERTY
--------
length
    Returns the number of UTF-16 code units in the string.


CHARACTER ACCESS
----------------
at()
charAt()
charCodeAt()
codePointAt()
str[index]


SEARCHING
---------
indexOf()
lastIndexOf()
includes()
startsWith()
endsWith()
search()


EXTRACTING
----------
slice()
substring()
substr()       // Legacy/deprecated


MODIFICATION / TRANSFORMATION
-----------------------------
toUpperCase()
toLowerCase()
toLocaleUpperCase()
toLocaleLowerCase()
replace()
replaceAll()
trim()
trimStart()
trimEnd()
concat()
repeat()
padStart()
padEnd()


SPLITTING / JOINING
-------------------
split()
Array.join()


REGULAR EXPRESSIONS
-------------------
match()
matchAll()
search()
replace()
test()
exec()


UNICODE
-------
charCodeAt()
codePointAt()
String.fromCharCode()
String.fromCodePoint()
normalize()


CONVERSION
----------
String()
toString()
Number()
parseInt()
parseFloat()


COMPARISON
----------
===
!==
<
>
localeCompare()


ITERATION
---------
for...of
Symbol.iterator
Array.from()
Spread operator (...)


TEMPLATE LITERALS
-----------------
`${variable}`
`${expression}`
Multi-line strings
Tagged templates


STATIC STRING METHODS
---------------------
String()
String.fromCharCode()
String.fromCodePoint()
String.raw()


===============================================================================
MOST IMPORTANT METHODS TO MASTER FOR SELENIUM / PLAYWRIGHT / TEST AUTOMATION
===============================================================================

1. length
2. charAt()
3. at()
4. includes()
5. startsWith()
6. endsWith()
7. indexOf()
8. lastIndexOf()
9. substring()
10. slice()
11. replace()
12. replaceAll()
13. trim()
14. split()
15. toUpperCase()
16. toLowerCase()
17. match()
18. matchAll()
19. padStart()
20. concat()
21. repeat()
22. localeCompare()
23. String()
24. Number()
25. parseInt()
26. parseFloat()


===============================================================================
COMMON STRING MANIPULATION PATTERNS
===============================================================================

Trim input:
    value.trim()

Case-insensitive comparison:
    value.toLowerCase() === expected.toLowerCase()

Check text:
    value.includes("text")

Check prefix:
    value.startsWith("prefix")

Check suffix:
    value.endsWith(".pdf")

Extract part:
    value.slice(start, end)

Replace text:
    value.replace("old", "new")

Replace everything:
    value.replaceAll("old", "new")

Split words:
    value.split(" ")

Convert array to string:
    array.join("")

Remove extra spaces:
    value.trim().replace(/\s+/g, " ")

Convert string to number:
    Number(value)

Convert integer:
    parseInt(value, 10)

Convert decimal:
    parseFloat(value)

Get last character:
    value.at(-1)

Reverse:
    value.split("").reverse().join("")

Check palindrome:
    value === value.split("").reverse().join("")

Convert to lowercase:
    value.toLowerCase()

Convert to uppercase:
    value.toUpperCase()


===============================================================================
END OF JAVASCRIPT STRING CHEAT SHEET
===============================================================================
*/

