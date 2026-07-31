// To run this file:
// node src/JavaScript/Practice/20_TutorialTwnty.js

// Static Concept in JavaScript

class Car {
    static wheels = 4;
    constructor(name, model, price){
        this.name = name;
        this.model = model;
        this.price = price;
        this.wheels = 50; // This will not give any error
    }
    static stop(){
        console.log("The car is Stopped .............");
    }
    drive(){
        console.log(this.name + " is driving");
    }
}

const carOne = new Car("Honda", 2023, 50000);

console.log(`${carOne.name}, ${carOne.model}, ${carOne.price}, ${Car.wheels}`); // Output: Honda, 2023, 50000, 4
console.log(Car.wheels); // output: 4
Car.stop(); //output: The car is Stopped .............
// Note: carOne.stop() is not allowed in JavaScript because stop() is static method
carOne.drive(); // output: Honda is driving
// Static variable or function is called using class name
// Non Static varible or Function is called using object
// Static variable cannot be used directly. you have o use it with class name