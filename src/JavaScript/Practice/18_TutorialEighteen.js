// To run this file:
// node src/JavaScript/Practice/18_TutorialEighteen.js

// Inheritance in JavaScript

// Grand Parent Class
class Automobile {
    constructor(chasisNumber){
        this.chasisNumber = chasisNumber;
    }
    useAerodynamic(){
        console.log("Automobile is Aerodynamic in Nature ____________");
    }
}

// Parent Class
class Vehicle extends Automobile{
    constructor(make, model, year){
        super(987654321);
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getInfo(){
        return `${this.make}, ${this.model}, ${this.year}`
    }
    startEngine(){
        console.log("Engine Started ..........");
    }
    stopEngine(){
       console.log("Engine Stopped .........."); 
    }
}

// Sub class Or Child Class of Vehicle
class Car extends Vehicle {
    constructor(make, model, year, fuelType){
        // calling parent class constructor using super keyword
        super(make, model, year);
        this.fuelType = fuelType;
    }
    driveCar(){
        console.log("driving the car " + this.model + " Fuel Type is "+ this.fuelType);
    }
}

// Another Sub class Or Child Class of Vehicle
class Truck extends Vehicle {
    constructor(make, model, year, loadingCapacity){
        // calling parent class constructor using super keyword
        super(make, model, year);
        this.loadingCapacity = loadingCapacity;
    }
    driveTruckr(){
        console.log("driving the Truck " + this.model + " And capacity is "+ this.loadingCapacity);
    }
}

// Creating the objects of above classes
const car = new Car("Honda", "Civic", 2023, "Petrol");
const truck = new Truck("Tata", "Sumo", 2020, 1000);

// Calling the methods
car.driveCar(); // Output: driving the car Civic Fuel Type is Petrol
car.startEngine(); // Output: Engine Started ..........
car.stopEngine(); // Output: Engine Stopped ..........
console.log(car.getInfo()); //Output: Honda, Civic, 2023
car.useAerodynamic(); // Output: Automobile is Aerodynamic in Nature ____________
console.log(car.chasisNumber); // Output: 987654321

truck.driveTruckr(); //Output: driving the Truck Sumo And capacity is 1000
truck.startEngine(); //Output: Engine Started ..........
truck.stopEngine(); //Output: Engine Stopped ..........
console.log(car.getInfo()); //Output: Honda, Civic, 2023
truck.useAerodynamic(); // Output: Automobile is Aerodynamic in Nature ____________
console.log(truck.chasisNumber); // Output: 987654321

/*
=========================================================================================
              MULTIPLE INHERITANCE vs MULTILEVEL INHERITANCE
                  Comparison in Java and JavaScript
=========================================================================================

+--------------------------+-------------------------------------------+-------------------------------------------+
| Feature                  | Multiple Inheritance                      | Multilevel Inheritance                    |
+--------------------------+-------------------------------------------+-------------------------------------------+
| Definition               | A child inherits from multiple parents.   | A child inherits through a chain of       |
|                          |                                           | inheritance (Parent -> Child -> GrandChild)|
+--------------------------+-------------------------------------------+-------------------------------------------+
| Diagram                  |      A      B                             |        A                                  |
|                          |       \    /                              |        |                                  |
|                          |        \  /                               |        v                                  |
|                          |         C                                 |        B                                  |
|                          |                                           |        |                                  |
|                          |                                           |        v                                  |
|                          |                                           |        C                                  |
+--------------------------+-------------------------------------------+-------------------------------------------+
| Number of Parent Classes | Two or more                              | One at each level                         |
+--------------------------+-------------------------------------------+-------------------------------------------+
| Ambiguity                | Possible (Diamond Problem)                | No ambiguity                              |
+--------------------------+-------------------------------------------+-------------------------------------------+
| Complexity               | Higher                                   | Lower                                     |
+--------------------------+-------------------------------------------+-------------------------------------------+
| Java (Classes)           | NOT Supported                             | Supported                                 |
+--------------------------+-------------------------------------------+-------------------------------------------+
| Java (Interfaces)        | Supported using multiple interfaces        | Supported                                 |
+--------------------------+-------------------------------------------+-------------------------------------------+
| JavaScript (Classes)     | NOT Supported                             | Supported                                 |
+--------------------------+-------------------------------------------+-------------------------------------------+
| JavaScript (Mixins)      | Can simulate using Mixins/Object.assign() | Supported                                 |
+--------------------------+-------------------------------------------+-------------------------------------------+
| Keyword Used             | implements (Interfaces only)              | extends                                   |
+--------------------------+-------------------------------------------+-------------------------------------------+
| Real-life Example        | Smartphone implements Camera, GPS,        | Vehicle -> Car -> ElectricCar             |
|                          | MusicPlayer                               |                                           |
+--------------------------+-------------------------------------------+-------------------------------------------+

=========================================================================================
                           DIAGRAMS
=========================================================================================

1) Multiple Inheritance

          Parent A          Parent B
             \                 /
              \               /
               \             /
                \           /
                 \         /
                  \       /
                    Child

One child has TWO (or more) parents.


2) Multilevel Inheritance

        GrandParent
              |
              |
              v
           Parent
              |
              |
              v
            Child

Inheritance happens in a chain.

=========================================================================================
                          JAVA EXAMPLES
=========================================================================================

------------------------------------------
1. Multiple Inheritance
------------------------------------------

Java DOES NOT allow multiple inheritance using classes.

class A
{
}

class B
{
}

// ❌ Compile-Time Error
class C extends A, B
{
}

Reason:
--------
Java prevents the Diamond Problem where two parent classes contain
the same method and the compiler cannot decide which one to call.

-----------------------------------------------------------------------------------------

Java supports Multiple Inheritance ONLY through Interfaces.

interface Camera
{
    void clickPhoto();
}

interface MusicPlayer
{
    void playMusic();
}

class Phone implements Camera, MusicPlayer
{
    @Override
    public void clickPhoto()
    {
        System.out.println("Photo Clicked");
    }

    @Override
    public void playMusic()
    {
        System.out.println("Music Playing");
    }
}

-----------------------------------------------------------------------------------------

------------------------------------------
2. Multilevel Inheritance
------------------------------------------

class Animal
{
    void eat()
    {
        System.out.println("Eating");
    }
}

class Dog extends Animal
{
    void bark()
    {
        System.out.println("Barking");
    }
}

class Puppy extends Dog
{
    void sleep()
    {
        System.out.println("Sleeping");
    }
}

public class Main
{
    public static void main(String[] args)
    {
        Puppy obj = new Puppy();

        obj.eat();      // Animal
        obj.bark();     // Dog
        obj.sleep();    // Puppy
    }
}

=========================================================================================
                      JAVASCRIPT EXAMPLES (ES6)
=========================================================================================

------------------------------------------
1. Multiple Inheritance
------------------------------------------

JavaScript classes also DO NOT support multiple inheritance.

class A {}

class B {}

// ❌ Syntax Error
// class C extends A, B {}

-----------------------------------------------------------------------------------------

JavaScript can SIMULATE multiple inheritance using Mixins.

class CanFly
{
    fly()
    {
        console.log("Flying");
    }
}

class CanSwim
{
    swim()
    {
        console.log("Swimming");
    }
}

class Duck
{
}

// Copy methods from both prototypes
Object.assign(Duck.prototype, CanFly.prototype);
Object.assign(Duck.prototype, CanSwim.prototype);

const duck = new Duck();

duck.fly();
duck.swim();

Output

Flying
Swimming

-----------------------------------------------------------------------------------------

------------------------------------------
2. Multilevel Inheritance
------------------------------------------

class Animal
{
    eat()
    {
        console.log("Eating");
    }
}

class Dog extends Animal
{
    bark()
    {
        console.log("Barking");
    }
}

class Puppy extends Dog
{
    sleep()
    {
        console.log("Sleeping");
    }
}

const puppy = new Puppy();

puppy.eat();
puppy.bark();
puppy.sleep();

Output

Eating
Barking
Sleeping

=========================================================================================
                  JAVA vs JAVASCRIPT COMPARISON
=========================================================================================

+----------------------------+---------------------------+---------------------------+
| Feature                    | Java                      | JavaScript                |
+----------------------------+---------------------------+---------------------------+
| Multiple Inheritance       | ❌ Classes - Not Allowed  | ❌ Classes - Not Allowed  |
|                            | ✅ Interfaces Allowed     | ✅ Via Mixins             |
+----------------------------+---------------------------+---------------------------+
| Multilevel Inheritance     | ✅ Supported              | ✅ Supported              |
+----------------------------+---------------------------+---------------------------+
| Keyword                    | extends                   | extends                   |
+----------------------------+---------------------------+---------------------------+
| Multiple Interface Support | implements                | No interfaces             |
+----------------------------+---------------------------+---------------------------+
| Alternative                | Interfaces                | Mixins/Object.assign()    |
+----------------------------+---------------------------+---------------------------+

=========================================================================================
                               QUICK REMEMBER
=========================================================================================

Multiple Inheritance
--------------------
One Child
     ▲
     │
Parent A    Parent B

• One child has multiple parents.
• Java ❌ (classes)
• Java ✅ (interfaces)
• JavaScript ❌ (classes)
• JavaScript ✅ (Mixins)

------------------------------------------------------

Multilevel Inheritance
----------------------

GrandParent
     │
     ▼
 Parent
     │
     ▼
 Child

• One parent at each level.
• Supported in both Java and JavaScript.
• Uses the 'extends' keyword.
========================================================================================
*/

