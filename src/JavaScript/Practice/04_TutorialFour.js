// ======================= JavaScript LOOPS =======================

/*
    What is a Loop?

    A loop is used to execute a block of code repeatedly
    until a specified condition is met.

    Loops help reduce code duplication.
*/

// ======================= TYPES OF LOOPS IN JAVASCRIPT =======================

/*
    1. for loop
    2. while loop
    3. do-while loop
    4. for...of loop
    5. for...in loop
*/

// ======================= 1. FOR LOOP =======================
{
    for (let i = 1; i <= 5; i++) {
        console.log("For Loop i:", i);
    }

    /*
        Iteration explanation:
        i = 1 → prints
        i = 2 → prints
        i = 3 → prints
        i = 4 → prints
        i = 5 → prints
        i = 6 → condition fails → loop stops

        Output:
        For Loop i: 1
        For Loop i: 2
        For Loop i: 3
        For Loop i: 4
        For Loop i: 5
    */
}

// ======================= 2. WHILE LOOP =======================
{
    let i = 1;

    while (i <= 3) {
        console.log("While Loop i:", i);
        i++;
    }

    /*
        i = 1 → prints → i becomes 2
        i = 2 → prints → i becomes 3
        i = 3 → prints → i becomes 4
        i = 4 → condition false → stop

        Output:
        While Loop i: 1
        While Loop i: 2
        While Loop i: 3
    */
}

// ======================= 3. DO-WHILE LOOP =======================
{
    let i = 5;

    do {
        console.log("Do-While Loop i:", i);
        i++;
    } while (i < 5);

    /*
        do-while runs AT LEAST ONCE
        i = 5 → prints
        i < 5 → false → stop

        Output:
        Do-While Loop i: 5
    */
}

// ======================= 4. for...of LOOP =======================
{
    let colors = ["red", "green", "blue"];

    for (let color of colors) {
        console.log("Color:", color);
    }

    /*
        Iterates over VALUES of iterable

        Output:
        Color: red
        Color: green
        Color: blue
    */
}

// ======================= 5. for...in LOOP =======================
{
    let person = {
        name: "Alice",
        age: 25
    };

    for (let key in person) {
        console.log(key, ":", person[key]);
    }

    /*
        Iterates over KEYS of object

        Output:
        name : Alice
        age : 25
    */
}

// ======================= BREAK STATEMENT =======================
{
    for (let i = 1; i <= 5; i++) {

        if (i === 3) {
            break;
        }

        console.log("Break Example i:", i);
    }

    /*
        i = 1 → prints
        i = 2 → prints
        i = 3 → break → loop stops

        Output:
        Break Example i: 1
        Break Example i: 2
    */
}

// ======================= CONTINUE STATEMENT =======================
{
    for (let i = 1; i <= 5; i++) {

        if (i === 3) {
            continue;
        }

        console.log("Continue Example i:", i);
    }

    /*
        i = 1 → prints
        i = 2 → prints
        i = 3 → skipped
        i = 4 → prints
        i = 5 → prints

        Output:
        Continue Example i: 1
        Continue Example i: 2
        Continue Example i: 4
        Continue Example i: 5
    */
}

// ======================= BREAK IN WHILE LOOP =======================
{
    let i = 1;

    while (i <= 5) {

        if (i === 4) {
            break;
        }

        console.log("While Break i:", i);
        i++;
    }

    /*
        i = 1 → prints
        i = 2 → prints
        i = 3 → prints
        i = 4 → break → stop

        Output:
        While Break i: 1
        While Break i: 2
        While Break i: 3
    */
}

// ======================= CONTINUE IN WHILE LOOP =======================
{
    let i = 0;

    while (i < 5) {
        i++;

        if (i === 2) {
            continue;
        }

        console.log("While Continue i:", i);
    }

    /*
        i = 1 → prints
        i = 2 → skipped
        i = 3 → prints
        i = 4 → prints
        i = 5 → prints

        Output:
        While Continue i: 1
        While Continue i: 3
        While Continue i: 4
        While Continue i: 5
    */
}

// ======================= NESTED LOOP =======================
{
    for (let i = 1; i <= 2; i++) {
        for (let j = 1; j <= 3; j++) {
            console.log("i:", i, "j:", j);
        }
    }

    /*
        Output:
        i: 1 j: 1
        i: 1 j: 2
        i: 1 j: 3
        i: 2 j: 1
        i: 2 j: 2
        i: 2 j: 3
    */
}

// ======================= SUMMARY =======================

/*
    - Loops repeat execution
    - for → known iterations
    - while → condition based
    - do-while → runs at least once
    - for...of → values
    - for...in → keys
    - break → stops loop
    - continue → skips iteration
*/
