// To run this file:
// node src/JavaScript/Practice/19_TutorialNineteen.js

// Important Quick tips in JavaScripts

// Finding unique values from above array using spread operator which is nothing but this -> [...]
// The ... operator in JavaScript is called the Spread Operator (or Spread Syntax).
const array = [1, 2, 3, 4, 1, 2, 7, 8, 9];
const uniqueArrayValues = [...new Set(array)];
console.log(uniqueArrayValues); // output: [ 1, 2, 3, 4, 7, 8, 9 ]

// Convert Integer to String
const num = 32;
const numString = num + ''; // With this concatination or appending with '' single quotes we can convert number into String in JavaScript
console.log(numString); // Output: 32
console.log(numString + 10); // Output: 3210
console.log(typeof(numString)); // output: string
// There is one more way with which we can convert number to String in JavaScript
const numStringOne = String(num);
console.log(typeof(numStringOne)); // output: string

// Convert the float number to integer
const floatNumber =  3.7619;
const intNumber = parseInt(floatNumber); // using parseInt() method
console.log(intNumber); // output: 3

// Check if a Variable is a number
const value = 56;
if(typeof value === 'number' && !isNaN(value)){
    console.log(value + " is a Number");
} else {
    console.log(value + " is Not a Number");
}
// Output: 56 is a Number

// Swap two variables
let a = 5;
let b = 10;
[a,b] = [b,a];
console.log(a); // output: 10
console.log(b); // output: 5

// Check if a object has a Specific Property
const person = {
    name: 'John',
    age: 28
}
// Here we are using hasOwnProperty method in JavaScript
if(person.hasOwnProperty('name')){
    console.log('person has this property');
} else {
    console.log('person doesnot have this property');
}
// output: person has this property

// Remove falsy values from array
// falsy values are like this (false, 0, "", null, undefined, NaN)
const values = [0, 1, 2, 5, "", 7, 8, '', null, undefined, NaN, 9, 0];
const newVaueArray = values.filter(Boolean); // Here we are using filter method and Boolean function which is inbuilt function in JavaScript
console.log(newVaueArray); // output: [ 1, 2, 5, 7, 8, 9 ]

// Convert a String to upper and lower case
const str = "Ratnakar Digvijay Kolhatkar";
const upper =  str.toUpperCase();
const lower = str.toLowerCase();
console.log(upper); // Output: RATNAKAR DIGVIJAY KOLHATKAR
console.log(lower); // Output: ratnakar digvijay kolhatkar

// Check if array contains a specific value or not
const language = ["Java", "Python", "C#", "Ruby", "Scala", "R", "C", "JavaScript", "TypeScript"];
if(language.includes("JavaScript")){
    console.log("Language is present in above array");
}else{
    console.log("Language is  not present in above array");
}
// output: Language is present in above array

// Check if array is empty or not
const empty = [];
if(empty.length === 0){
    console.log("Given array is empty");
}
// Output: Given array is empty

// Generate a random number in JavaScript
const min = 10;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber); // Output: Any random number between 10 to 100

// Convert a String into a number
const stringnumber = "1002";
const numOne = parseFloat(stringnumber);
console.log(numOne); // output: 1002

// Join Array Elements into a String
const words = ["Hello", "Naveen", "Kumar"];
const sentence = words.join(" "); // This will join the words with space in between them
console.log(sentence); // output: Hello Naveen Kumar

// get Object property
const user = {
    name: "Tom",
    age: 25,
    dob: '01-01-1995'
}
console.log(user.dob); // output: 01-01-1995
console.log(user['name']); // output: Tom
// Above are the two ways with which we can fetch the value of any property inside the object

// Clone an Array or Object
const marks = [10,20,30,40,50];
const newMarks = [...marks]; // Cloning array using spread operator
console.log(newMarks); // output: [ 10, 20, 30, 40, 50 ]

// To clone object using spread operator
const pepObject = {
    title: "Name",
    cast: 'Sonarika',
    duration: 4
}
 const newPepObject = { ...pepObject };
 console.log(newPepObject); // Output: { title: 'Name', cast: 'Sonarika', duration: 4 }

 // Convert Object into an array
 const userOne = {
    name: "Tom",
    age: 25,
    dob: '01-01-1995'
};
// Convert the above object into three types of arrays, one in which there will be keys only, second is where we have only values and third where we have key values both

const keysArray = Object.keys(userOne); // With this we can create the keys array from above object
console.log(keysArray); // output:; [ 'name', 'age', 'dob' ]

const valuesArray = Object.values(userOne);// With this we can create the values array from above object
console.log(valuesArray); // output: [ 'Tom', 25, '01-01-1995' ]

const keyValueArray = Object.entries(userOne); // KeyValue array or Nested array
console.log(keyValueArray); // output: [ [ 'name', 'Tom' ], [ 'age', 25 ], [ 'dob', '01-01-1995' ] ]

// Fetching the current date and time
const currentDate = new Date();
console.log(currentDate.toLocaleDateString()); // output : 25/7/2026
console.log(currentDate); // output: 2026-07-25T15:36:10.648Z

// Check if a variable is defined or not
let i;
if(typeof i === 'undefined'){
    console.log('variable is not defined');
}else {
    console.log('variable is Defined');
}
// Output: variable is not defined

// Truncate an Array
const testing = [0, 1, 2, 3, 4, 5];
testing.length = 3;
console.log(testing); // output: [ 0, 1, 2 ]

// Find last iteom in array
const pop = [0, 1, 2, 3, 4, 5, 6];
const newOne =  pop.slice(-1);
console.log(newOne); // output: [ 6 ]
