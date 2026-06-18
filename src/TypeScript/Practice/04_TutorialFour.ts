// Enum (Enumeration) in TypeScript is a way to define a set of named constants. It allows you to create a collection of related values that can be used in your code. Enums can be numeric or string-based, and they provide a way to give more meaningful names to sets of values.
// It will hold set of constants.

// Numeric Enum
enum Direction {
    Up,
    Down,
    Left,
    Right
};

console.log(Direction.Up); // Output: 0
console.log(Direction.Down); // Output: 1

console.log(Direction); // Output: { '0': 'Up', '1': 'Down', '2': 'Left', '3': 'Right', Up: 0, Down: 1, Left: 2, Right: 3 }

enum Browser {
    Chrome=10,
    Firefox=20,
    Safari=30,
    Edge=40
};

console.log(Browser.Chrome); // Output: 10
console.log(Browser.Firefox); // Output: 20
console.log(Browser.Safari); // Output: 30
console.log(Browser.Edge); // Output: 40
console.log(Browser); // Output: { '10': 'Chrome', '20': 'Firefox', '30': 'Safari', '40': 'Edge', Chrome: 10, Firefox: 20, Safari: 30, Edge: 40 }

// String Enum

enum Status {
    Pending = "Pending",
    InProgress = "In Progress",
    Completed = "Completed"
};

console.log(Status.Pending); // Output: Pending
console.log(Status.InProgress); // Output: In Progress
console.log(Status['Completed']); // Output: Completed -> Another way of calling String Enum value using bracket notation
console.log(Status); // Output: { Pending: 'Pending', InProgress: 'In Progress', Completed: 'Completed' }

// Heterogeneous Enum
enum Game {
    Easy = "Easy",
    Medium = 2,
    Hard = "Hard"
};

console.log(Game.Easy); // Output: Easy
console.log(Game.Medium); // Output: 2
console.log(Game.Hard); // Output: Hard

// Enum implementation with function
enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
};

function getColorName(TestColor: string): number {
    if (TestColor === Color.Red) {
        return 1;
    } else if (TestColor === Color.Green) {
        return 2;
    } else if (TestColor === Color.Blue) {
        return 3;
    }
    return 0;
}

// Enum with function value
enum Size {
    Small = 1,
    Medium = 2,
    Large = getSizeValue('Extra Large') // Function call to get the value for Extra Large
};

function getSizeValue(TestSize: string): number {
    if (TestSize === 'Small') {
        return 1;
    } else if (TestSize === 'Medium') {
        return 2;
    } else if (TestSize === 'Large') {
        return 3;
    } else if (TestSize === "Extra Large") {
        return 4;
    }
    return 0;
}

console.log(Size.Small); // Output: 1
console.log(Size.Medium); // Output: 2
console.log(Size.Large); // Output: 4 -> because we called getSizeValue('Extra Large') which returned 4 : Large = getSizeValue('Extra Large')
