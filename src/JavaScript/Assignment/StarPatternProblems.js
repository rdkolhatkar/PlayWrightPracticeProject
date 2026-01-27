/**********************************************************************
 ⭐ STAR PATTERN PROBLEMS IN JAVASCRIPT
 ---------------------------------------------------------------------
 PURPOSE:
 - Build logic using loops
 - Understand nested loops
 - Crack interview pattern questions
 - Improve dry-run skills

 NOTE:
 - console.log() prints a new line
 - We build each row as a string, then print it
**********************************************************************/

/**********************************************************************
 1️⃣ SQUARE STAR PATTERN
***********************************************************************
 Problem:
 Print a square star pattern of size n

 n = 4

 * * * *
 * * * *
 * * * *
 * * * *

 Logic:
 - Outer loop → rows
 - Inner loop → columns
 - Every row has n stars
**********************************************************************/

let n = 4;

for (let i = 1; i <= n; i++) {
  let row = "";                 // creates empty row

  for (let j = 1; j <= n; j++) {
    row += "* ";                // add star in each column
  }

  console.log(row);             // print row
}

/*
Output:
* * * *
* * * *
* * * *
* * * *
*/

console.log("--------------------------------------------------");

/**********************************************************************
 2️⃣ RIGHT ANGLED TRIANGLE (LEFT ALIGNED)
***********************************************************************
 Problem:
 n = 5

 *
 * *
 * * *
 * * * *
 * * * * *

 Logic:
 - Row number decides number of stars
**********************************************************************/

n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "* ";
  }

  console.log(row);
}

/*
Output:
*
* *
* * *
* * * *
* * * * *
*/

console.log("--------------------------------------------------");

/**********************************************************************
 3️⃣ INVERTED RIGHT ANGLED TRIANGLE
***********************************************************************
 n = 5

 * * * * *
 * * * *
 * * *
 * *
 *

 Logic:
 - First row has n stars
 - Stars decrease as row increases
**********************************************************************/

for (let i = n; i >= 1; i--) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "* ";
  }

  console.log(row);
}

/*
Output:
* * * * *
* * * *
* * *
* *
*
*/

console.log("--------------------------------------------------");

/**********************************************************************
 4️⃣ RIGHT ALIGNED TRIANGLE
***********************************************************************
 n = 5

         *
       * *
     * * *
   * * * *
 * * * * *

 Logic:
 - Print spaces first
 - Then print stars
 - Spaces = n - row
**********************************************************************/

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let space = 1; space <= n - i; space++) {
    row += "  ";                // double space for alignment
  }

  for (let star = 1; star <= i; star++) {
    row += "* ";
  }

  console.log(row);
}

/*
Output:
        *
      * *
    * * *
  * * * *
* * * * *
*/

console.log("--------------------------------------------------");

/**********************************************************************
 5️⃣ PYRAMID STAR PATTERN
***********************************************************************
 n = 5

         *
       * * *
     * * * * *
   * * * * * * *
 * * * * * * * * *

 Logic:
 - Spaces = n - row
 - Stars = 2 * row - 1
**********************************************************************/

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let space = 1; space <= n - i; space++) {
    row += "  ";
  }

  for (let star = 1; star <= 2 * i - 1; star++) {
    row += "* ";
  }

  console.log(row);
}

/*
Output:
        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
*/

console.log("--------------------------------------------------");

/**********************************************************************
 6️⃣ INVERTED PYRAMID
***********************************************************************
 n = 5

 * * * * * * * * *
   * * * * * * *
     * * * * *
       * * *
         *

 Logic:
 - Spaces increase
 - Stars decrease
**********************************************************************/

for (let i = n; i >= 1; i--) {
  let row = "";

  for (let space = 1; space <= n - i; space++) {
    row += "  ";
  }

  for (let star = 1; star <= 2 * i - 1; star++) {
    row += "* ";
  }

  console.log(row);
}

/*
Output:
* * * * * * * * *
  * * * * * * *
    * * * * *
      * * *
        *
*/

console.log("--------------------------------------------------");

/**********************************************************************
 7️⃣ DIAMOND STAR PATTERN
***********************************************************************
 n = 4

       *
     * * *
   * * * * *
 * * * * * * *
   * * * * *
     * * *
       *

 Logic:
 - Combine pyramid + inverted pyramid
**********************************************************************/

n = 4;

// Top pyramid
for (let i = 1; i <= n; i++) {
  let row = "";

  for (let space = 1; space <= n - i; space++) {
    row += "  ";
  }

  for (let star = 1; star <= 2 * i - 1; star++) {
    row += "* ";
  }

  console.log(row);
}

// Bottom inverted pyramid
for (let i = n - 1; i >= 1; i--) {
  let row = "";

  for (let space = 1; space <= n - i; space++) {
    row += "  ";
  }

  for (let star = 1; star <= 2 * i - 1; star++) {
    row += "* ";
  }

  console.log(row);
}

/*
Output:
      *
    * * *
  * * * * *
* * * * * * *
  * * * * *
    * * *
      *
*/

console.log("--------------------------------------------------");

/**********************************************************************
 8️⃣ HOLLOW SQUARE
***********************************************************************
 n = 5

 * * * * *
 *       *
 *       *
 *       *
 * * * * *

 Logic:
 - Print star if:
   - First row
   - Last row
   - First column
   - Last column
**********************************************************************/

n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= n; j++) {
    if (i === 1 || i === n || j === 1 || j === n) {
      row += "* ";
    } else {
      row += "  ";
    }
  }

  console.log(row);
}

/*
Output:
* * * * *
*       *
*       *
*       *
* * * * *
*/

console.log("--------------------------------------------------");

/**********************************************************************
 9️⃣ HOLLOW PYRAMID
***********************************************************************
 n = 5

         *
       *   *
     *       *
   *           *
 * * * * * * * * *

 Logic:
 - First and last star in each row
 - Last row full stars
**********************************************************************/

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let space = 1; space <= n - i; space++) {
    row += "  ";
  }

  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j === 1 || j === 2 * i - 1 || i === n) {
      row += "* ";
    } else {
      row += "  ";
    }
  }

  console.log(row);
}

/*
Output:
        *
      *   *
    *       *
  *           *
* * * * * * * * *
*/

console.log("--------------------------------------------------");

/**********************************************************************
 🔟 BUTTERFLY PATTERN
***********************************************************************
 n = 4

 *             *
 * *         * *
 * * *     * * *
 * * * * * * * *
 * * * * * * * *
 * * *     * * *
 * *         * *
 *             *

 Logic:
 - Upper half increasing
 - Lower half decreasing
**********************************************************************/

n = 4;

// Upper half
for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) row += "* ";
  for (let space = 1; space <= 2 * (n - i); space++) row += "  ";
  for (let j = 1; j <= i; j++) row += "* ";

  console.log(row);
}

// Lower half
for (let i = n; i >= 1; i--) {
  let row = "";

  for (let j = 1; j <= i; j++) row += "* ";
  for (let space = 1; space <= 2 * (n - i); space++) row += "  ";
  for (let j = 1; j <= i; j++) row += "* ";

  console.log(row);
}

/*
Output:
*             *
* *         * *
* * *     * * *
* * * * * * * *
* * * * * * * *
* * *     * * *
* *         * *
*             *
*/

console.log("--------------------------------------------------");

/**********************************************************************
 ✅ END OF STAR PATTERN FILE
**********************************************************************/

/*
📌 INTERVIEW NOTE:
- Master loops
- Dry run each row
- Visualize before coding
- Same logic applies to numbers & alphabets
*/
