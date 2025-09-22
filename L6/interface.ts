// Topics: Interface for object, interface for class, optional and readonly, extending interface, interface for function

/*

What is an interface ?

- An interface defines a contract for objects, classes, or functions.
- It specifies what properties and methods an object should have, but does not provide implementation.

*/

// Example 1. Interface for an object

interface Person {
  name: string;
  age: number;
  greet(): void; // method signature, no implementation
}

const user: Person = {
  name: "Shubhanshu",
  age: 25,
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  },
};

user.greet(); // Hello, I'm Shubhanshu

// --------------------xxxxx------------------------

// Example 2. Interface for class

interface DepartmentInterface {
  name: string;
  describe(): void;
}

// use 'implements' keyword for class interface
class ITDepartment implements DepartmentInterface {
  // public name: string;
  constructor(public name: string) {}

  describe() {
    console.log(`IT Department: ${this.name}`);
  }
}

const it = new ITDepartment("IT");
it.describe(); // IT Department: IT

// -------------xxxx--------------------------

// Example: 3. Optional and readonly

interface Employee {
  readonly id: number; // cannot be changed
  name: string;
  department?: string; // optional
}

const emp: Employee = { id: 1, name: "Alice" };
emp.name = "Bob"; // ✅ allowed
// emp.id = 2;         // ❌ Error: id is readonly

// --------xxxxxxxxx-------------------------------

// Extending Interface

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greeting(text: string): void;
}

class Person implements Greetable {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  greeting(text: string): void {
    console.log(`${text}, ${this.name}`);
  }
}

let user1: Greetable;
user1 = new Person("Patel");
console.log(user1);

// ------------------xxxxx-----------------------------

// Interface for function

// type addFun = (a : number, b : number) => number;

// same above thing using interface for function
interface addFun {
  (a: number, b: number): number; // two input of fn 'a' and 'b' both type number and will return a type number
}

let add: addFun;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
console.log(add(10, 20));
