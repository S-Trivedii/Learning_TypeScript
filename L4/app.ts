// Function return types and callbacks

// 1. Function return types

function add(num1: number, num2: number): number {
  return num1 + num2; //  return type of this fn is number
}
// console.log(add(10,20));

function greeting(name: string): void {
  console.log(`Hi, ${name}`); // return type is void since it is returing nothing
}

// let combineFunction : Function; // it is a bad practice to define type like this

// combineFunction = 10; // invalid
// combineFunction = function(){}; valid
// combineFunction = add; // valid
// combineFunction = greet;
// console.log(combineFunction(1,2));

// Good Practice

let combineFunction: (a: number, b: number) => number; // return type of combineFunction is number

combineFunction = add;

console.log(combineFunction(100, 200));

// 2. Function types and callbacks

type CB = (n: number) => void;

function addHandle(num1: number, num2: number, cb: CB) {
  const result = num1 + num2;
  cb(result);
}

addHandle(10, 20, (value: number) => {
  console.log(value);
});
