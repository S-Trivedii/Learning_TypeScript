"use strict";
/*
  Topics covered.
  1. Basic class
  2. public and private access modifieres
  3. readonly property
  4. Inheritance
     - override properties and protected modifiers
  5. getters and setters
  6. static method and properties
  7. abstract classes

*/
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Basic Class
class Department {
    name;
    // constructor initialize the value of property
    constructor(name) {
        this.name = name;
    }
    describe() {
        console.log("Department of ", this.name);
    }
}
// constructor will get called as soon as an instance is created
const accounting = new Department("Accounting");
console.log("Accounting, ", accounting); // Accounting, Department { name: 'Accounting' } class methods aren’t stored inside each object — they live on the class prototype, and each instance gets access to them.
console.log(accounting.describe()); // undefined, since describe() is not returing anything
// Creating a new object called accountingCopy, this object is not the instance of Department. Only the method descibe is copied from accounting
const accountingCopy = {
    name: "Finance",
    describe: accounting.describe,
};
accountingCopy.describe(); // the 'this' will point to accountingCopy object
// ----------------xxxxx-----------------------------------------
// 2. private, public access modifiers
class Department2 {
    name;
    employees; // only accessble inside class (or where they are defined)
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    describe() {
        console.log("Department of ", this.name);
    }
    totalEmployess() {
        console.log("Total number of employees are: ", this.employees.length);
    }
}
// Instance of Department2
const science = new Department2("Science");
science.addEmployee("Rohan"); // ["Rohan"]
science.totalEmployess(); // 1
// science.employees = ['Tina'] // this is not the correct way. That's why I need to make employees 'private'
// ------------------------xxxxx-----------------------------------------
// 3. readonly
class Department3 {
    name;
    employees;
    id;
    constructor(name) {
        this.name = name;
        this.employees = [];
        this.id = "d1"; // readonly property can be assigned a value only once (either at declaration or inside the constructor)
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    describe() {
        console.log("Department of ", this.name);
    }
}
// --------------xxxxxx--------------------------------
// 4. Inheritance
// Overrride property and protected access modifiers
class Department4 {
    name;
    employees; // protected (property/method) is only accessible inside the class and subclass itself
    id;
    constructor(name, id) {
        this.name = name;
        this.employees = [];
        this.id = "d1";
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    describe() {
        console.log("Department of ", this.name);
    }
}
// nextDepartment inherites all the properties (not private properties) and methods (not private methods) of Department4
class nextDepartment extends Department4 {
    reports;
    constructor(id) {
        super("Maths", id); // super() is used to run the parent contructor (i.e. the constructor inside Department4)
        this.reports = [];
    }
    // overriding addEmployee method which is inherited from Department4
    addEmployee(emp) {
        if (emp === "Somu") {
            return;
        }
        // I have to convert 'employees' from 'private' to 'protected'. Private properties/method can't be inherited
        this.employees.push(emp);
    }
    // additional methods of nextDepartment
    addReports(repo) {
        this.reports.push(repo);
    }
    printReports() {
        console.log(this.reports);
    }
}
const mathsDepartment = new nextDepartment("d1");
mathsDepartment.addReports("Blood Report");
mathsDepartment.printReports();
// -------------------xxxxx---------------------------------
// 5. getters and setters
/*

Getter (get): Used to return a value like a property. Called when you read the property.
Setter (set): Used to set/update a value with validation or logic. Called when you assign to the property

NOTE: You don’t call them like functions (user.getName()), instead you access like a property (user.name).

*/
class Person {
    _age = 0;
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0) {
            throw new Error("Age cannot be negative!");
        }
        this._age = value;
    }
}
const p = new Person();
// reading a value
console.log("getter ->", p.age); // 0
// calling setter (writing a value)
p.age = 25; // works
p.age = -5; // ❌ Error
// -------------xxxxxx-----------------------------------
// 6. Static
/*

- static means the property or method belongs to the class itself, not to its instances (objects).
- You don’t need to create an object to access a static property/method — you call it directly on the class.

*/
class MathUtil {
    static add(a, b) {
        return a + b;
    }
}
const ans = MathUtil.add(5, 10); // we have not created instance, directly call method on class
console.log(ans); // 15 ✅ no object needed
// Static + Instance together
class Human {
    name;
    static species = "Homo sapiens"; // shared by all humans
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hi, I’m ${this.name} and I’m a ${Human.species}`);
    }
}
const p1 = new Human("Alice");
p1.greet(); // Hi, I’m Alice and I’m a Homo sapiens
console.log(Human.species); // Homo sapiens
// ----------------xxxxxxxxxx-----------------------
// 7. Abstract classes
/*
What is an abstract class?

- An abstract class is a class that cannot be instantiated directly.
- It’s meant to be extended by other classes.

Can contain:
 - Concrete methods (with implementation)
 - Abstract methods (without implementation — must be implemented in subclasses)

*/
// you need to add 'abstract' keyword before class if you have abstract methods
class Department5 {
    name;
    constructor(name) {
        this.name = name;
    }
    // concrete method
    printName() {
        console.log("Department name:", this.name);
    }
}
/*

Key points

- You cannot do new Department5("HR") — it will throw an error.
- Any subclass must implement all abstract methods.

*/
// Using abstract class
class ITDepartment extends Department5 {
    admins;
    constructor(name, admins) {
        super(name);
        this.admins = admins;
    }
    // must implement abstract method
    describe() {
        console.log(`IT Department, admins: ${this.admins.join(", ")}`);
    }
}
const it = new ITDepartment("IT", ["Alice", "Bob"]);
it.printName(); // Department name: IT
it.describe(); // IT Department, admins: Alice, Bob
/*
Why we use Abstract class ?

- Define a blueprint for subclasses (enforce a contract).
- Can share common code in concrete methods.
- Can combine concrete + abstract logic in one class.

*/
//# sourceMappingURL=classes.js.map