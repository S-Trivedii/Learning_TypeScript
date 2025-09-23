// 1. Generics = type placeholders (<T>) for reusable code.

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

function wrapInArray<T>(value: T): T[] {
  return [value];
}

const numberArray = wrapInArray(5); // number[]
const stringArray = wrapInArray("hello"); // string[]

// 3. Generic Interface

interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 100 }; // value is number here
const stringBox: Box<string> = { value: "Hi" }; // value is string here

// ------------------xxxxx----------------------------

// 3. Generic class

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data = this.data.filter((i) => i !== item);
  }

  getItems(): T[] {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Alice");
textStorage.addItem("Bob");
console.log(textStorage.getItems()); // ["Alice", "Bob"]

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);

// -------------------xxxxxxx-----------------------------

// 4. Generic constraints (extends)
// You can restrict what types are allowed.

interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log(item.length);
}

logLength("Hello"); // ✅ string has length
logLength([1, 2, 3]); // ✅ array has length
// logLength(42);          // ❌ number has no length

// ------------------------xxxxxx-------------------------------

// 5. Default Parameters
// You can set default parameters

function merge<T = string, U = number>(a: T, b: U) {
  return { a, b };
}

const result = merge("hello", 10); // { a: string, b: number }
