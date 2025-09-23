// 1. Generics = type placeholders (<T>) for reusable code.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*
Q. Why use Generics ?
A. Without generics, you might write:

function identity(arg: any): any {
  return arg;
}

let result = identity("Hello"); // result is `any` ❌ (lost type info)

// With generics:
function identity<T>(arg: T): T {
  return arg;
}

let result = identity("Hello"); // result is `string` ✅

Generics let TypeScript remember the type you used.

*/
// -----------------xxxxxxx-----------------------
// 2. Generic Function
// NOTE: You can name 'T' anything
function wrapInArray(value) {
    return [value];
}
var numberArray = wrapInArray(5); // number[]
var stringArray = wrapInArray("hello"); // string[]
var numberBox = { value: 100 }; // value is number here
var stringBox = { value: "Hi" }; // value is string here
// ------------------xxxxx----------------------------
// 3. Generic class
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data = this.data.filter(function (i) { return i !== item; });
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem("Alice");
textStorage.addItem("Bob");
console.log(textStorage.getItems()); // ["Alice", "Bob"]
var numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(2);
function logLength(item) {
    console.log(item.length);
}
logLength("Hello"); // ✅ string has length
logLength([1, 2, 3]); // ✅ array has length
// logLength(42);          // ❌ number has no length
// ------------------------xxxxxx-------------------------------
// 5. Default Parameters
// You can set default parameters
function merge(a, b) {
    return { a: a, b: b };
}
var result = merge("hello", 10); // { a: string, b: number }
