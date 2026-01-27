// ======================= JavaScript STRINGS =======================

/*
    What is a String?

    A string is a sequence of characters.
    It is used to store text.

    JavaScript strings are:
    - Immutable (cannot be changed)
    - Indexed (starts from 0)
*/

// ======================= STRING CREATION =======================
{
    let s1 = "Hello";
    let s2 = 'World';
    let s3 = `JavaScript`;

    console.log(s1);
    console.log(s2);
    console.log(s3);

    /*
        Output:
        Hello
        World
        JavaScript
    */
}

// ======================= STRING LENGTH =======================
{
    let text = "JavaScript";

    console.log(text.length);

    /*
        "JavaScript" has 10 characters
        Output: 10
    */
}

// ======================= STRING INDEXING =======================
{
    let lang = "JavaScript";

    console.log(lang[0]);   // First character
    console.log(lang[4]);   // Fifth character
    console.log(lang[20]);  // Out of range

    /*
        Output:
        J
        S
        undefined
    */
}

// ======================= STRINGS ARE IMMUTABLE =======================
{
    let word = "Hello";
    word[0] = "Y";

    console.log(word);

    /*
        Strings cannot be modified
        Original string remains unchanged

        Output:
        Hello
    */
}

// ======================= STRING CONCATENATION =======================
{
    let firstName = "Ratnakar";
    let lastName = "Kolhatkar";

    console.log(firstName + " " + lastName);

    /*
        Output:
        Ratnakar Kolhatkar
    */
}

// ======================= TEMPLATE LITERALS =======================
{
    let name = "Ratnakar";
    let age = 25;

    console.log(`My name is ${name} and I am ${age} years old`);

    /*
        Template literals:
        - Use backticks (` `)
        - Allow variable embedding using ${}

        Output:
        My name is Ratnakar and I am 25 years old
    */
}

// ======================= MULTI-LINE STRINGS =======================
{
    let message = `Hello,
Welcome to JavaScript
String Tutorial`;

    console.log(message);

    /*
        Output:
        Hello,
        Welcome to JavaScript
        String Tutorial
    */
}

// ======================= STRING METHODS =======================

// ---- toUpperCase & toLowerCase ----
{
    let text = "JavaScript";

    console.log(text.toUpperCase());
    console.log(text.toLowerCase());

    /*
        Output:
        JAVASCRIPT
        javascript
    */
}

// ---- trim, trimStart, trimEnd ----
{
    let text = "   Hello World   ";

    console.log(text.trim());
    console.log(text.trimStart());
    console.log(text.trimEnd());

    /*
        Output:
        Hello World
        Hello World   
           Hello World
    */
}

// ---- replace & replaceAll ----
{
    let sentence = "I love JavaScript. JavaScript is powerful.";

    console.log(sentence.replace("JavaScript", "JS"));
    console.log(sentence.replaceAll("JavaScript", "JS"));

    /*
        replace → replaces FIRST match
        replaceAll → replaces ALL matches

        Output:
        I love JS. JavaScript is powerful.
        I love JS. JS is powerful.
    */
}

// ---- substring & slice ----
{
    let word = "JavaScript";

    console.log(word.substring(0, 4));
    console.log(word.slice(4, 10));
    console.log(word.slice(-6));

    /*
        Output:
        Java
        Script
        Script
    */
}

// ======================= STRING SEARCH METHODS =======================
{
    let text = "JavaScript is awesome";

    console.log(text.indexOf("Script"));
    console.log(text.lastIndexOf("a"));
    console.log(text.includes("awesome"));
    console.log(text.startsWith("Java"));
    console.log(text.endsWith("awesome"));

    /*
        Output:
        4
        14
        true
        true
        true
    */
}

// ======================= STRING SPLIT =======================
{
    let data = "red,green,blue";

    console.log(data.split(","));

    /*
        Output:
        [ 'red', 'green', 'blue' ]
    */
}

// ======================= STRING CHAR METHODS =======================
{
    let word = "Hello";

    console.log(word.charAt(1));
    console.log(word.charCodeAt(1));

    /*
        Output:
        e
        101
    */
}

// ======================= STRING COMPARISON =======================
{
    console.log("a" === "a");
    console.log("a" > "b");
    console.log("apple" > "banana");

    /*
        Comparison is lexicographical (dictionary order)

        Output:
        true
        false
        false
    */
}

// ======================= STRING REFERENCES =======================
{
    let a = "Hello";
    let b = "Hello";
    let c = a;

    console.log(a === b);
    console.log(a === c);

    /*
        Strings are primitive values
        Comparison checks VALUE, not memory reference

        Output:
        true
        true
    */
}

// ======================= STRING OBJECT (NOT RECOMMENDED) =======================
{
    let x = "Hello";
    let y = new String("Hello");

    console.log(typeof x);
    console.log(typeof y);
    console.log(x == y);
    console.log(x === y);

    /*
        Output:
        string
        object
        true
        false
    */
}

// ======================= ESCAPE CHARACTERS =======================
{
    let quote = "He said \"JavaScript is awesome\"";

    console.log(quote);

    /*
        Output:
        He said "JavaScript is awesome"
    */
}

// ======================= REAL-WORLD EXAMPLE =======================
{
    let email = " user@example.com ";

    let cleanEmail = email.trim().toLowerCase();

    console.log(cleanEmail);

    /*
        Output:
        user@example.com
    */
}

// ======================= SUMMARY =======================

/*
    - Strings store text
    - Strings are immutable
    - Template literals allow embedding
    - Methods return NEW strings
    - Search methods help find text
    - Strings are compared by value
*/
