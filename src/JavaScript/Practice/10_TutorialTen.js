// ======================= JAVASCRIPT DATES (COMPLETE GUIDE) =======================

/*
    JavaScript provides ways to work with:
    - Dates
    - Time
    - Timezones
    - Date calculations

    There are TWO important parts:
    1️⃣ Old but widely used → Date object
    2️⃣ Modern & correct → Temporal API
*/

// ==============================================================================
// ======================= PART 1: JAVASCRIPT DATE OBJECT =========================
// ==============================================================================

/*
    What is the JavaScript Date object?

    - Date is a built-in object
    - Represents a single moment in time
    - Internally stored as milliseconds since:
      1 January 1970 (UTC) → Epoch Time
*/


// ======================= CREATING DATE OBJECT =======================

// 1️⃣ Current date and time
let now = new Date();
console.log(now);

/*
Output (example):
2026-01-27T12:30:15.123Z
*/

// --------------------------------------------------

// 2️⃣ Create date using string (ISO format – recommended)
let isoDate = new Date("2025-12-25");
console.log(isoDate);

/*
Output:
Thu Dec 25 2025
*/

// --------------------------------------------------

// 3️⃣ Create date using year, month, day
let date1 = new Date(2025, 11, 25); // Month is ZERO-based
console.log(date1);

/*
Explanation:
0 = January
11 = December

Output:
Thu Dec 25 2025
*/

// --------------------------------------------------

// 4️⃣ Create date with time
let dateWithTime = new Date(2025, 11, 25, 10, 30, 15);
console.log(dateWithTime);

/*
Output:
Thu Dec 25 2025 10:30:15
*/

// --------------------------------------------------

// ======================= JS DATE FORMATS =======================

/*
    JavaScript understands multiple date formats
*/

// ISO (BEST & SAFE)
new Date("2025-12-25T10:30:00");

// Short date (not recommended for all browsers)
new Date("12/25/2025");

// Long date
new Date("December 25, 2025");

/*
    ✔ Always prefer ISO format
*/

// --------------------------------------------------

// ======================= GET DATE METHODS =======================

let d = new Date();

console.log(d.getFullYear());     // 2026
console.log(d.getMonth());        // 0 (January)
console.log(d.getDate());         // 27
console.log(d.getDay());          // 2 (Tuesday)
console.log(d.getHours());        // current hour
console.log(d.getMinutes());      // current minute
console.log(d.getSeconds());      // current second
console.log(d.getMilliseconds()); // ms
console.log(d.getTime());         // timestamp (ms)

/*
    IMPORTANT:
    - getMonth() → 0–11
    - getDay() → 0–6 (Sunday = 0)
*/

// --------------------------------------------------

// ======================= SET DATE METHODS =======================

let setDate = new Date();

setDate.setFullYear(2030);
setDate.setMonth(5);     // June
setDate.setDate(15);
setDate.setHours(10);
setDate.setMinutes(45);

console.log(setDate);

/*
Output:
Sat Jun 15 2030 10:45:xx
*/

// --------------------------------------------------

// ======================= DATE TO STRING METHODS =======================

let dateStr = new Date();

console.log(dateStr.toString());
console.log(dateStr.toDateString());
console.log(dateStr.toTimeString());
console.log(dateStr.toISOString());
console.log(dateStr.toLocaleDateString());
console.log(dateStr.toLocaleTimeString());

/*
Explanation:
- toISOString() → best for APIs
- toLocale* → depends on user locale
*/

// --------------------------------------------------

// ======================= DATE COMPARISON =======================

let d1 = new Date("2025-01-01");
let d2 = new Date("2025-12-31");

console.log(d1 < d2); // true

/*
Dates are compared using timestamps
*/

// --------------------------------------------------

// ======================= DATE DIFFERENCE =======================

let start = new Date("2025-01-01");
let end = new Date("2025-01-10");

let diffMs = end - start;
let diffDays = diffMs / (1000 * 60 * 60 * 24);

console.log(diffDays); // 9

// --------------------------------------------------

// ======================= DATE IS A REFERENCE TYPE =======================

let a = new Date();
let b = a;

b.setFullYear(2040);

console.log(a.getFullYear()); // 2040

/*
Both variables point to the same object
*/

// --------------------------------------------------

// ======================= COPYING DATE SAFELY =======================

let original = new Date();
let copy = new Date(original.getTime());

copy.setFullYear(2050);

console.log(original.getFullYear());
console.log(copy.getFullYear());

// ==============================================================================
// ======================= PART 2: TEMPORAL API (MODERN) ==========================
// ==============================================================================

/*
    Why Temporal?

    Problems with Date:
    ❌ Timezone confusion
    ❌ Mutable
    ❌ Hard date math
    ❌ Month indexing issues

    Temporal FIXES ALL OF THIS
*/

// ======================= TEMPORAL OVERVIEW =======================

/*
    Temporal provides:
    - Temporal.Now
    - Temporal.Instant
    - Temporal.PlainDate
    - Temporal.PlainTime
    - Temporal.PlainDateTime
    - Temporal.Duration
*/

// ------------------------------------------------------------------

// ======================= TEMPORAL.NOW =======================

// Current instant (timestamp)
let instant = Temporal.Now.instant();
console.log(instant.toString());

/*
Example:
2026-01-27T12:30:15.123Z
*/

// ------------------------------------------------------------------

// ======================= TEMPORAL.PLAIN DATE =======================

/*
    PlainDate = date WITHOUT time & timezone
    Perfect for:
    - Birthdays
    - Holidays
    - Due dates
*/

let plainDate = new Temporal.PlainDate(2025, 12, 25);
console.log(plainDate.toString());

/*
Output:
2025-12-25
*/

// ------------------------------------------------------------------

// ======================= TEMPORAL GET VALUES =======================

console.log(plainDate.year);   // 2025
console.log(plainDate.month);  // 12
console.log(plainDate.day);    // 25

// ------------------------------------------------------------------

// ======================= TEMPORAL IMMUTABILITY =======================

let newDate = plainDate.add({ days: 5 });

console.log(plainDate.toString()); // unchanged
console.log(newDate.toString());   // 2025-12-30

/*
Temporal objects are IMMUTABLE
*/

// ------------------------------------------------------------------

// ======================= TEMPORAL DATE MATH =======================

let dateA = new Temporal.PlainDate(2025, 1, 1);
let dateB = new Temporal.PlainDate(2025, 1, 10);

let duration = dateA.until(dateB);
console.log(duration.days);

/*
Output:
9
*/

// ------------------------------------------------------------------

// ======================= TEMPORAL COMPARE =======================

console.log(Temporal.PlainDate.compare(dateA, dateB));
// -1 → dateA is earlier

// ------------------------------------------------------------------

// ======================= TEMPORAL DURATION =======================

let durationExample = Temporal.Duration.from({
    days: 2,
    hours: 5
});

console.log(durationExample.toString());

/*
Output:
PT5H2D
*/

// ------------------------------------------------------------------

// ======================= DATE vs TEMPORAL =======================

/*
    Date:
    ❌ Mutable
    ❌ Timezone issues
    ❌ Month starts from 0

    Temporal:
    ✔ Immutable
    ✔ Clear timezone handling
    ✔ Human-friendly API
*/

// ==============================================================================
// ======================= SUMMARY =======================
// ==============================================================================

/*
    ✔ Date is old but widely used
    ✔ Months start at 0 in Date
    ✔ Date objects are mutable
    ✔ Temporal is modern & safe
    ✔ Temporal.PlainDate is best for calendar dates
    ✔ Temporal makes date math easy
*/

// ======================= END =======================
