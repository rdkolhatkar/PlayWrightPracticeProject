// To run this file:
// node src/JavaScript/Practice/15_TutorialFifteen.js

// Different ways of creating objects in JavaScript

//1. Object literal syntax
const person1 = {
    name: "Alice",
    age: 25,
    city: "New York"
};
console.log(person1); // Output: { name: 'Alice', age: 25, city: 'New York' }
console.log(person1.name); // Output: Alice

//2. Using the Object constructor
const person2 = new Object();
person2.name = "Bob";
person2.age = 30;
person2.city = "Los Angeles";
console.log(person2); // Output: { name: 'Bob', age: 30, city: 'Los Angeles' }
console.log(person2.name); // Output: Bob

//3. Using a constructor function
function Person(name, age, city) {
    this.name = name;   
    this.age = age;
    this.city = city;
}
const person3 = new Person("Charlie", 35, "Chicago");
const person4 = new Person("Diana", 28, "Houston");
console.log(person3); // Output: Person { name: 'Charlie', age: 35, city: 'Chicago' }
console.log(person3.name); // Output: Charlie
console.log(person3.age); // Output: 35
console.log(person3.city); // Output: Chicago
console.log(person4); // Output: Person { name: 'Diana', age: 28, city: 'Houston' } 
console.log(person4.name); // Output: Diana
console.log(person4.age); // Output: 28

//4. Class syntax (ES6)
class Customer {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    addToCart(item) {
        console.log(`${this.name} added ${item} to the cart.`);
    }
}

const customer1 = new Customer("Eve", 32, "San Francisco");
console.log(customer1); // Output: Customer { name: 'Eve', age: 32, city: 'San Francisco' }
customer1.addToCart("Laptop"); // Output: Eve added Laptop to the cart. 
const customer2 = new Customer("Frank", 29, "Seattle");
console.log(customer2.addToCart("Smartphone")); // Output: Frank added Smartphone to the cart.
console.log(customer2.city); // Output: Seattle

//5. Using Object.create()
// Creating Prototype Object
const employeePrototype = {
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
// Here Object is an Inbuilt Object constructor function in JavaScript. It is used to create a new object with the specified prototype object and properties. In this case, we are creating a new object employee1 that inherits from the employeePrototype object. The employee1 object has its own properties name and age, which are set to "Grace" and 40 respectively. When we call the greet() method on employee1, it uses the properties of employee1 to print a greeting message to the console.
const employee1 = Object.create(employeePrototype);
employee1.name = "Grace";
employee1.age = 40;
employee1.greet(); // Output: Hello, my name is Grace and I am 40 years old.

//6. Using Factory Functions
// Factory function to create a new object
function createEmployee(name, age, city) {  
    return {
        name: name,
        age: age,
        city: city,
        greet: function() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };
}
const employee2 = createEmployee("Henry", 45, "Boston");
employee2.greet(); // Output: Hello, my name is Henry and I am 45 years old.
console.log(employee2.name); // Output: Henry

