// To run this file:
// node src/JavaScript/Practice/21_TutorialTwentyOne.js

// Method Overriding in JavaScript

class Car {

    minimumSpeed = 10;

    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    startEngine(){
        console.log("Starting the Engine ........ ");
    }
}

class Audi extends Car {
    minimumSpeed = 20;
    startEngine(){
        console.log("Starting the Audi Engine ........ ");
    }
}

const audi = new Audi();
audi.startEngine(); // Output: Starting the Audi Engine ........
console.log(audi.minimumSpeed); // Output: 20

const car = new Car();
car.startEngine(); // Output: Starting the Engine ........
console.log(car.minimumSpeed); // Output: 10