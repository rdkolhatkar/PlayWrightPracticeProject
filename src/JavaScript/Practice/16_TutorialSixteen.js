// To run this file:
// node src/JavaScript/Practice/16_TutorialSixteen.js

// Method overloading or function overloading is not allowed & supported in JavaScript but it is allowed & supported in TypeScript
// In JavaScript If you declare multiple functions with the same name, the last declaration overwrites the previous ones.

// =====================================================================================
//                    FUNCTION OVERLOADING - JAVASCRIPT vs TYPESCRIPT
// =====================================================================================
//
// +----------------------------+---------------------------------------------------------+------------------------------------------------------------+
// | Feature                    | JavaScript                                              | TypeScript                                                 |
// +----------------------------+---------------------------------------------------------+------------------------------------------------------------+
// | Function Overloading       | ❌ Not Supported                                        | ✅ Supported                                                |
// +----------------------------+---------------------------------------------------------+------------------------------------------------------------+
// | Multiple Function          | Not Allowed. The last function declaration              | Allowed by writing multiple overload                       |
// | Declarations               | overwrites all previous declarations.                   | signatures (declarations).                                 |
// +----------------------------+---------------------------------------------------------+------------------------------------------------------------+
// | Function Implementation    | Every function declaration is treated as                | There must be exactly ONE implementation                   |
// |                            | a separate function.                                    | that satisfies all overload signatures.                    |
// +----------------------------+---------------------------------------------------------+------------------------------------------------------------+
// | Compile-Time Checking      | ❌ No compile-time overload checking.                   | ✅ Compiler selects the correct overload                    |
// |                            |                                                         | based on the function call.                                |
// +----------------------------+---------------------------------------------------------+------------------------------------------------------------+
// | Runtime Behavior           | Only the last declared function exists.                 | After compilation, only one JavaScript                     |
// |                            | Earlier functions are lost.                             | function exists.                                           |
// +----------------------------+---------------------------------------------------------+------------------------------------------------------------+
// | Alternative                | Simulate overloading by checking                        | Use overload signatures with one                           |
// |                            | argument count or argument types.                       | implementation function.                                   |
// +----------------------------+---------------------------------------------------------+------------------------------------------------------------+
// | Example                    | function add(a,b) {}                                    | function add(a,b):number;                                  |
// |                            | function add(a,b,c) {}                                  | function add(a,b,c):number;                                |
// |                            | // First function is overwritten                        | function add(a,b,c?) { ... }                               |
// +----------------------------+---------------------------------------------------------+------------------------------------------------------------+
//
// =====================================================================================