// Type Casting or Type Assertion

// Both are doing 'Type casting' in a same way, it just how you write is different

// First way
// const userInput = <HTMLInputElement>document.getElementById('user-input')!

// Second way - this way is mostly preferred
const userInput = document.getElementById("user-input")! as HTMLInputElement; // I am sure input element exist so remove null. Hover over userInput you will understand

userInput.value = "Hi, there";

/*

Q1. What is ! here ?
A: document.getElementById("user-input") returns:
   HTMLInput | null
   because if the element is not found in the DOM, it could be null.

   By writing !, you tell TypeScript:
👉 “I’m sure this is not null or undefined at runtime.”


*/
