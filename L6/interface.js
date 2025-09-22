"use strict";
// Topics: Interface for object, interface for class, optional and readonly, extending interface, interface for function
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "Shubhanshu",
    age: 25,
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    },
};
user.greet(); // Hello, I'm Shubhanshu
// use 'implements' keyword for class interface
class ITDepartment {
    name;
    // public name: string;
    constructor(name) {
        this.name = name;
    }
    describe() {
        console.log(`IT Department: ${this.name}`);
    }
}
const it = new ITDepartment("IT");
it.describe(); // IT Department: IT
const emp = { id: 1, name: "Alice" };
emp.name = "Bob"; // ✅ allowed
class Person {
    name;
    constructor(n) {
        this.name = n;
    }
    greeting(text) {
        console.log(`${text}, ${this.name}`);
    }
}
let user1;
user1 = new Person("Patel");
console.log(user1);
let add;
add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(10, 20));
//# sourceMappingURL=interface.js.map