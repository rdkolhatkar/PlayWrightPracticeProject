// To run this file:
// node src/JavaScript/Practice/17_TutorialSeventeen.js

// Classes, Objects and Constructor Overloading in JavaScript

class Car {

    // To create the constructor inside the class in JavaScript we can directly use the "constructor" keyword. There is no need to give the same name as that of the class name.
    // In JavaScript we cannot overload te constructor.
    constructor(name, price, colour){
        this.name = name;
        this.price = price;
        this.colour = colour;
    }

    // You can create a method or a function inside the class without using "function" keyword
    refuel(){
        console.log(this.name + " car is refuled");
    }
}

// Now we have to create the object of above class, for that we have to use "new" Keyword

const carOne = new Car("BMW", 100, "Black");

console.log(carOne.colour); // output: Black
console.log(carOne.name); // output: BMW
console.log(carOne.price); // output: 100
console.log(carOne.refuel()); // output: car is refuled
carOne.refuel(); // output: car is refuled

const carTwo = new Car("Honda", 200, "White");

console.log(carTwo.colour); // output: White
console.log(carTwo.name); // output: Honda
console.log(carTwo.price); // output: 200
console.log(carTwo.refuel()); // output: car is refuled
carTwo.refuel(); // output: car is refuled



