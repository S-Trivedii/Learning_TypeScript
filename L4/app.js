// Function return types and callbacks
// 1. Function return types
function add(num1, num2) {
    return num1 + num2; //  return type of this fn is number
}
// console.log(add(10,20));
function greeting(name) {
    console.log("Hi, ".concat(name)); // return type is void since it is returing nothing
}
// let combineFunction : Function; // it is a bad practice to define type like this
// combineFunction = 10; // invalid
// combineFunction = function(){}; valid
// combineFunction = add; // valid
// combineFunction = greet;
// console.log(combineFunction(1,2));
// Good Practice
var combineFunction; // return type of combineFunction is number
combineFunction = add;
console.log(combineFunction(100, 200));
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandle(10, 20, function (value) {
    console.log(value);
});
