// ======================= JAVASCRIPT SETS =======================

/*
    What is a Set in JavaScript?

    A Set is a built-in object that:
    ✔ Stores UNIQUE values only
    ✔ Maintains insertion order
    ✔ Can store ANY data type
    ✔ Automatically removes duplicates

    Think of Set like:
    - A bag with NO duplicate items
*/

// =================================================================
// ======================= CREATING A SET ===========================
// =================================================================

// 1️⃣ Create empty Set
let mySet = new Set();
console.log(mySet);

/*
Output:
Set(0) {}
*/

// --------------------------------------------------

// 2️⃣ Create Set with values
let numbers = new Set([1, 2, 3, 3, 4, 4]);
console.log(numbers);

/*
Output:
Set(4) {1, 2, 3, 4}

Explanation:
Duplicate values are removed automatically
*/

// =================================================================
// ======================= SET PROPERTIES ===========================
// =================================================================

console.log(numbers.size);

/*
Output:
4

Explanation:
size → number of unique elements
*/

// =================================================================
// ======================= SET METHODS ==============================
// =================================================================

// ======================= add() =======================

numbers.add(5);
numbers.add(5); // duplicate ignored

console.log(numbers);

/*
Output:
Set(5) {1, 2, 3, 4, 5}
*/

// --------------------------------------------------

// ======================= has() =======================

console.log(numbers.has(3)); // true
console.log(numbers.has(10)); // false

/*
Explanation:
Checks if value exists
*/

// --------------------------------------------------

// ======================= delete() =======================

numbers.delete(2);
console.log(numbers);

/*
Output:
Set(4) {1, 3, 4, 5}
*/

// --------------------------------------------------

// ======================= clear() =======================

let tempSet = new Set([10, 20, 30]);
tempSet.clear();

console.log(tempSet);

/*
Output:
Set(0) {}
*/

// =================================================================
// ======================= SET ITERATION ============================
// =================================================================

// for...of
for (let value of numbers) {
    console.log(value);
}

/*
Output:
1
3
4
5
*/

// --------------------------------------------------

// forEach
numbers.forEach(value => {
    console.log(value);
});

// --------------------------------------------------

// keys(), values(), entries()
console.log(numbers.values());
console.log(numbers.keys());
console.log(numbers.entries());

/*
entries() returns:
[value, value]
*/

// =================================================================
// ======================= SET LOGIC (REAL USE CASES) ================
// =================================================================

// ======================= REMOVE DUPLICATES =======================

let arr = [1, 2, 2, 3, 4, 4, 5];

let uniqueArray = [...new Set(arr)];
console.log(uniqueArray);

/*
Output:
[1, 2, 3, 4, 5]
*/

// --------------------------------------------------

// ======================= UNION =======================

let setA = new Set([1, 2, 3]);
let setB = new Set([3, 4, 5]);

let union = new Set([...setA, ...setB]);
console.log(union);

/*
Output:
Set(5) {1, 2, 3, 4, 5}
*/

// --------------------------------------------------

// ======================= INTERSECTION =======================

let intersection = new Set(
    [...setA].filter(x => setB.has(x))
);

console.log(intersection);

/*
Output:
Set(1) {3}
*/

// --------------------------------------------------

// ======================= DIFFERENCE =======================

let difference = new Set(
    [...setA].filter(x => !setB.has(x))
);

console.log(difference);

/*
Output:
Set(2) {1, 2}
*/

// =================================================================
// ======================= SET WITH OBJECTS ==========================
// =================================================================

let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };

let objectSet = new Set();
objectSet.add(obj1);
objectSet.add(obj2);

console.log(objectSet.size);

/*
Output:
2

Explanation:
Objects are compared by REFERENCE, not by value
*/

// =================================================================
// ======================= SET REFERENCES ============================
// =================================================================

let s1 = new Set([1, 2, 3]);
let s2 = s1;

s2.add(4);

console.log(s1);

/*
Output:
Set(4) {1, 2, 3, 4}

Explanation:
Sets are reference types
*/

// --------------------------------------------------

// ======================= COPYING SET =======================

let s3 = new Set([...s1]);
s3.add(10);

console.log(s1);
console.log(s3);

/*
s1 unchanged
s3 modified
*/

// =================================================================
// ======================= WEAKSET ================================
// =================================================================

/*
    WeakSet:
    ✔ Stores ONLY objects
    ✔ Holds WEAK references
    ✔ Not iterable
    ✔ No size property
    ✔ Garbage collected automatically
*/

let weakSet = new WeakSet();

let user1 = { name: "John" };
let user2 = { name: "Jane" };

weakSet.add(user1);
weakSet.add(user2);

console.log(weakSet.has(user1)); // true

user1 = null; // eligible for garbage collection

/*
No way to list WeakSet values
*/

// =================================================================
// ======================= SET vs ARRAY =============================
// =================================================================

/*
    Array:
    ❌ Allows duplicates
    ❌ Index-based
    ✔ Ordered

    Set:
    ✔ Unique values
    ❌ No index
    ✔ Faster lookups
*/

// =================================================================
// ======================= WHEN TO USE SET ==========================
// =================================================================

/*
    ✔ Remove duplicates
    ✔ Unique IDs
    ✔ Membership checking
    ✔ Mathematical set operations
*/

// =================================================================
// ======================= COMMON MISTAKES ==========================
// =================================================================

/*
    ❌ Expecting index access
    ❌ Comparing objects by value
    ❌ Using WeakSet like Set
*/

// =================================================================
// ======================= SUMMARY ==========================
// =================================================================

/*
    ✔ Set stores unique values
    ✔ Supports any data type
    ✔ Fast has() lookup
    ✔ Set is reference type
    ✔ WeakSet holds weak object references
    ✔ Ideal for uniqueness & membership checks
*/