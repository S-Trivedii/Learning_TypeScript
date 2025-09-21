// Unknown, Any and Never
// 1. Any
/*
The most flexible type → basically turns off type checking.
You can assign any value to it, and assign it to any other type.
Useful when you don’t know the type ahead of time, but dangerous because it removes type safety.

*/
var value;
value = 10; // number
value = "hello"; // string
value = true; // boolean
var str = value; // ✅ works (but unsafe, could be anything)
// -----------xxxxxxxx-------------
// 2. unknown type
/*
Safer alternative to any.
You can assign any value to unknown, but you cannot directly use it until you do type checking or type assertions.

*/
var data;
data = "hello";
data = 42;
var num;
// num = data; // ❌ Error: Type 'unknown' is not assignable to 'number'
// ✅ Need type check
if (typeof data === "number") {
    num = data; // works
}
// ----------xxxxx-------------------
// 3. never
/*
Represents values that should never happen.
A function that never returns (e.g., throws error or infinite loop) is typed as never.

*/
// Example: function that never returns
function throwError(message) {
    throw new Error(message);
}
