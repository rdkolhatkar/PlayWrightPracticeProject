// ======================= JavaScript NUMBERS =======================

/*
    What is a Number in JavaScript?

    - JavaScript has ONLY ONE numeric type → Number
    - Used for integers, decimals, positives, negatives
    - Stored as 64-bit floating-point (IEEE 754)
*/

// ======================= NUMBER CREATION =======================
{
    let a = 10;
    let b = 3.14;
    let c = -25;

    console.log(a);
    console.log(b);
    console.log(c);

    /*
        Output:
        10
        3.14
        -25
    */
}

// ======================= NUMBER VS STRING =======================
{
    let x = 10;
    let y = "10";

    console.log(x + y);
    console.log(x - y);

    /*
        + → string concatenation
        - → numeric operation

        Output:
        1010
        0
    */
}

// ======================= NaN (Not a Number) =======================
{
    let value = "abc" / 2;

    console.log(value);
    console.log(isNaN(value));

    /*
        Invalid numeric operation → NaN

        Output:
        NaN
        true
    */
}

// ======================= INFINITY =======================
{
    let result = 10 / 0;

    console.log(result);
    console.log(typeof result);

    /*
        Output:
        Infinity
        number
    */
}

// ======================= NUMBER METHODS =======================

// ---- toString() ----
{
    let num = 123;

    console.log(num.toString());
    console.log(typeof num.toString());

    /*
        Output:
        123
        string
    */
}

// ---- toFixed() ----
{
    let price = 99.5678;

    console.log(price.toFixed(2));

    /*
        Rounds and returns string

        Output:
        99.57
    */
}

// ---- toPrecision() ----
{
    let num = 123.456;

    console.log(num.toPrecision(4));

    /*
        Output:
        123.5
    */
}

// ---- parseInt & parseFloat ----
{
    console.log(parseInt("10.99"));
    console.log(parseFloat("10.99"));

    /*
        Output:
        10
        10.99
    */
}

// ======================= NUMBER PROPERTIES =======================
{
    console.log(Number.MAX_VALUE);
    console.log(Number.MIN_VALUE);
    console.log(Number.POSITIVE_INFINITY);
    console.log(Number.NEGATIVE_INFINITY);
    console.log(Number.NaN);

    /*
        Output:
        1.7976931348623157e+308
        5e-324
        Infinity
        -Infinity
        NaN
    */
}

// ======================= isInteger & isFinite =======================
{
    console.log(Number.isInteger(10));
    console.log(Number.isInteger(10.5));
    console.log(Number.isFinite(100));
    console.log(Number.isFinite(Infinity));

    /*
        Output:
        true
        false
        true
        false
    */
}

// ======================= MATH OBJECT =======================
{
    console.log(Math.round(4.6));
    console.log(Math.floor(4.9));
    console.log(Math.ceil(4.1));
    console.log(Math.random());

    /*
        Output:
        5
        4
        5
        (random number between 0 and 1)
    */
}

// ======================= NUMBER COMPARISON =======================
{
    console.log(0.1 + 0.2 === 0.3);

    /*
        Floating point precision issue

        Output:
        false
    */
}

// ======================= NUMBER REFERENCES =======================
{
    let a = 10;
    let b = 10;

    console.log(a === b);

    /*
        Numbers are primitive values
        Compared by VALUE, not memory reference

        Output:
        true
    */
}

// ======================= NUMBER OBJECT (NOT RECOMMENDED) =======================
{
    let x = 10;
    let y = new Number(10);

    console.log(typeof x);
    console.log(typeof y);
    console.log(x == y);
    console.log(x === y);

    /*
        Output:
        number
        object
        true
        false
    */
}

// ======================= BITWISE OPERATORS =======================
{
    let a = 5;   // 0101
    let b = 3;   // 0011

    console.log(a & b); // AND
    console.log(a | b); // OR
    console.log(a ^ b); // XOR
    console.log(a << 1);
    console.log(a >> 1);

    /*
        Output:
        1
        7
        6
        10
        2
    */
}

// ======================= BIGINT =======================
{
    let big = 9007199254740991n;
    let bigger = big + 1n;

    console.log(big);
    console.log(bigger);
    console.log(typeof big);

    /*
        BigInt:
        - Used for very large integers
        - Ends with 'n'

        Output:
        9007199254740991n
        9007199254740992n
        bigint
    */
}

// ======================= BigInt RULES =======================
{
    let a = 10n;
    let b = 20n;

    console.log(a + b);

    /*
        BigInt can only operate with BigInt

        Output:
        30n
    */
}

// ======================= REAL-WORLD EXAMPLE =======================
{
    let total = 499.99;
    let tax = 0.18;

    let finalAmount = total + (total * tax);

    console.log(finalAmount.toFixed(2));

    /*
        Output:
        589.99
    */
}

// ======================= SUMMARY =======================

/*
    - JS has one numeric type → Number
    - Numbers are primitive
    - Floating-point precision exists
    - Use BigInt for large integers
    - Bitwise works on binary values
*/
