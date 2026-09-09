// To run this file:
// node src/JavaScript/Practice/29_TutorialTwentyNine.js
// Destructuring in JavaScript
// Destructuring is a feature in JavaScript that allows you to extract values from arrays or properties from objects and assign them to variables in a more concise and readable way.

// Destructuring Arrays
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a); // output: 1
console.log(b); // output: 2
console.log(c); // output: 3

const languages = ["JavaScript", "Python", "Java", "C++", "C#", "Ruby", "Go", "Swift", "Kotlin", "PHP"];
const [lang1, lang2, lang3] = languages;
console.log(lang1); // output: JavaScript
console.log(lang2); // output: Python
console.log(lang3); // output: Java

// Using Rest Operator with Destructuring
const [first, second, ...rest] = languages;
console.log(first); // output: JavaScript
console.log(second); // output: Python
console.log(rest); // output: [ 'Java', 'C++', 'C#', 'Ruby', 'Go', 'Swift', 'Kotlin', 'PHP' ]

// Destructuring Objects
const person = { name: 'John', age: 30, city: 'New York' };
const { name, age, city } = person;
console.log(name); // output: John
console.log(age); // output: 30
console.log(city); // output: New York

// Using Rest Operator with Object Destructuring
const { name: personName, ...otherDetails } = person;
console.log(personName); // output: John
console.log(otherDetails); // output: { age: 30, city: 'New York' }

// Function Parameter Destructuring
function displayPerson({ name, age, city }) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

displayPerson(person); // output: Name: John, Age: 30, City: New York

// Nested Destructuring
const nestedObject = {
    user: {
        name: 'Alice',
        age: 25,
        address: {
            street: '123 Main St',
            city: 'Los Angeles'
        }
    }
};

const { user: { name: userName, age: userAge, address: { city: userCity } } } = nestedObject;
console.log(userName); // output: Alice
console.log(userAge); // output: 25
console.log(userCity); // output: Los Angeles


