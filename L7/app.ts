// Type Guards

// 1. 'typeof' type guard

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  // return a + b; // wrong, 'a' and 'b' can be string also

  // add type guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

console.log(add(10, 20)); // 30
console.log(add("30", 30)); // 3030

// ------------------xxxxxxxxx--------------

// 2. 'in' operator type guard

type Admin = {
  name: string;
  privilages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

type UnknownEmployee = Admin | Employee;

// emp1 object will have all the properties of Admin and Employee
const emp1: ElevatedEmployee = {
  name: "Shubhanshu Trivedi",
  privilages: ["create-server"],
  startDate: new Date(),
};

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name ", emp.name);

  // console.log('Privilages ', emp.privilages); // TS doen't know which type to follow Admin or Employee

  // 'in' operator based type guard
  if ("privilages" in emp) {
    console.log(emp.privilages);
  }

  if ("startDate" in emp) {
    console.log(emp.startDate);
  }
}

printEmployeeInformation(emp1);
printEmployeeInformation({ name: "Abhay", startDate: new Date() });

// -------------------xxxx---------------------------

// 3. Type gurad in class

class Car {
  drive() {
    console.log("Driving a car...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck....");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ", amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  // vehicle.loadCargo(500);

  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(500);
  }

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(500);
  }
}

useVehicle(v1);
useVehicle(v2);
