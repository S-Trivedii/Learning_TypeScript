// Type Guards
function add(a, b) {
    // return a + b; // wrong, 'a' and 'b' can be string also
    // add type guard
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(10, 20)); // 30
console.log(add("30", 30)); // 3030
// emp1 object will have all the properties of Admin and Employee
var emp1 = {
    name: "Shubhanshu Trivedi",
    privilages: ["create-server"],
    startDate: new Date(),
};
function printEmployeeInformation(emp) {
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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving a car...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck....");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo ", amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
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
