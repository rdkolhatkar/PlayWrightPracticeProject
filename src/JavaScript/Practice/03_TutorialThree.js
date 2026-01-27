// ======================= JavaScript CONDITIONAL STATEMENTS =======================


// ======================= BOOLEAN VALUES IN JAVASCRIPT =======================
{
    let isLoggedIn = true;
    let isAdmin = false;

    console.log("Is Logged In:", isLoggedIn);
    // Explanation: isLoggedIn holds boolean value true
    // Output: Is Logged In: true

    console.log("Is Admin:", isAdmin);
    // Explanation: isAdmin holds boolean value false
    // Output: Is Admin: false
}


// ======================= TRUTHY & FALSY VALUES =======================
{
    if ("") {
        console.log("This will NOT execute");
    }
    // Explanation:
    // "" (empty string) is a FALSY value
    // Condition evaluates to false
    // Output: ❌ No output

    if ("Hello") {
        console.log("This WILL execute");
    }
    // Explanation:
    // "Hello" is a NON-EMPTY string → TRUTHY
    // Condition evaluates to true
    // Output: This WILL execute
}


// ======================= LOGICAL OPERATORS =======================
{
    let hasTicket = true;
    let hasID = false;

    console.log("AND (&&):", hasTicket && hasID);
    // true && false → false
    // Output: AND (&&): false

    console.log("OR (||):", hasTicket || hasID);
    // true || false → true
    // Output: OR (||): true

    console.log("NOT (!):", !hasTicket);
    // !true → false
    // Output: NOT (!): false
}


// ======================= IF STATEMENT =======================
{
    let age = 20;

    if (age >= 18) {
        console.log("User is eligible to vote");
    }
    // 20 >= 18 → true
    // if block executes
    // Output: User is eligible to vote
}


// ======================= IF - ELSE STATEMENT =======================
{
    let marks = 45;

    if (marks >= 50) {
        console.log("Student Passed");
    } else {
        console.log("Student Failed");
    }
    // 45 >= 50 → false
    // else block executes
    // Output: Student Failed
}


// ======================= IF - ELSE IF - ELSE STATEMENT =======================
{
    let score = 85;

    if (score >= 90) {
        console.log("Grade A");
    } else if (score >= 75) {
        console.log("Grade B");
    } else if (score >= 60) {
        console.log("Grade C");
    } else {
        console.log("Grade D");
    }

    // Evaluation:
    // 85 >= 90 → false
    // 85 >= 75 → true
    // First true block executes
    // Output: Grade B
}


// ======================= TERNARY (CONDITIONAL) OPERATOR =======================
{
    let ageValue = 20;

    let isEligible = (ageValue >= 18) ? "Eligible" : "Not Eligible";
    console.log("Eligibility:", isEligible);

    // 20 >= 18 → true
    // Ternary chooses "Eligible"
    // Output: Eligibility: Eligible
}


// ======================= SWITCH STATEMENT =======================
{
    let day = 3;

    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        default:
            console.log("Invalid Day");
    }

    // day === 3 → case 3 matched
    // break stops execution
    // Output: Wednesday
}


// ======================= SWITCH FALL-THROUGH EXAMPLE =======================
{
    let trafficLight = "yellow";

    switch (trafficLight) {
        case "red":
            console.log("STOP");
            break;

        case "yellow":
            console.log("READY");
            // no break → fall through

        case "green":
            console.log("GO");
            break;

        default:
            console.log("Invalid Signal");
    }

    // trafficLight === "yellow"
    // Prints READY
    // Falls through to "green"
    // Prints GO
    // Output:
    // READY
    // GO
}


// ======================= LOGICAL CONDITIONS WITH IF =======================
{
    let temperature = 30;

    if (temperature > 25 && temperature < 35) {
        console.log("Weather is warm");
    }
    // 30 > 25 → true
    // 30 < 35 → true
    // true && true → true
    // Output: Weather is warm

    if (temperature < 10 || temperature > 40) {
        console.log("Extreme weather");
    }
    // false || false → false
    // Output: ❌ No output

    let isLoggedIn = true;

    if (!isLoggedIn) {
        console.log("Please login");
    } else {
        console.log("Welcome user");
    }
    // !true → false
    // else block executes
    // Output: Welcome user
}


// ======================= REAL-WORLD EXAMPLE =======================
{
    let balance = 5000;
    let withdrawAmount = 3000;

    if (withdrawAmount <= balance) {
        console.log("Transaction Successful");
    } else {
        console.log("Insufficient Balance");
    }

    // 3000 <= 5000 → true
    // Output: Transaction Successful
}


// ======================= FINAL OUTPUT ORDER =======================

/*
Is Logged In: true
Is Admin: false
This WILL execute
AND (&&): false
OR (||): true
NOT (!): false
User is eligible to vote
Student Failed
Grade B
Eligibility: Eligible
Wednesday
READY
GO
Weather is warm
Welcome user
Transaction Successful
*/