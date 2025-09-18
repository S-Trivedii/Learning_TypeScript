// Object, Array, Tuple, Enum
// 1. Object
var person1 = {
    firstName: "Patel",
    age: 21,
    xyz: {
        address: "Mumbai",
    },
};
// -------------xxx-------------------------
// 2. Array
var person2 = {
    firstName: "Patel",
    age: 21,
    skills: ["Reactjs", "Nodejs"], // array of string
};
// variable will be an array of string
var favouriteLanguage1;
favouriteLanguage1 = ["Hindi", "English"];
// NOTE: DO NOT USE type 'any' as much as possible
var favouriteLanguage2; // loose ts powerfull
favouriteLanguage2 = ["Hindi", "English", 21, true];
//-------------xxxxx---------------------------
// 3. Tuple
// NOTE: In TS, Tuple are fixed in type and length
var person3 = {
    name: "Patel",
    age: 21,
    skills: ["React", "Node"],
    product: [10, "Macbook M2"],
};
// person.product = [10,"Macbook M2", "Macbook Air M2"] // invalid, since size is fixed
// person.product[1] = 20; //  invalid
// -----------------xxxxx----------------------------
// 4. enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_USER_ONLY"] = 2] = "READ_USER_ONLY";
})(Role || (Role = {}));
var person4 = {
    name: "patel",
    age: 21,
    skills: ["React", "Node"],
    product: [10, "Macbook Air M2"],
    role: Role.ADMIN,
};
if (person4.role === Role.AUTHOR) {
    console.log("Author");
}
else if (person4.role === Role.ADMIN) {
    console.log("Admin");
}
else if (person4.role === Role.READ_USER_ONLY) {
    console.log("read user only");
}
