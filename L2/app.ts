// Object, Array, Tuple, Enum

// 1. Object
const person1: {
  firstName: string;
  age: number;
  xyz: {
    address: string;
  };
} = {
  firstName: "Patel",
  age: 21,
  xyz: {
    address: "Mumbai",
  },
};

// -------------xxx-------------------------

// 2. Array
const person2: {
  firstName: string;
  age: number;
  skills: string[];
} = {
  firstName: "Patel",
  age: 21,
  skills: ["Reactjs", "Nodejs"], // array of string
};

// variable will be an array of string
let favouriteLanguage1: string[];
favouriteLanguage1 = ["Hindi", "English"];

// NOTE: DO NOT USE type 'any' as much as possible
let favouriteLanguage2: any[]; // loose ts powerfull
favouriteLanguage2 = ["Hindi", "English", 21, true];

//-------------xxxxx---------------------------

// 3. Tuple

// NOTE: In TS, Tuple are fixed in type and length

const person3: {
  name: string;
  age: number;
  skills: string[];
  product: [number, string]; // fixed array of two types 0 -> number, 1 -> string
} = {
  name: "Patel",
  age: 21,
  skills: ["React", "Node"],
  product: [10, "Macbook M2"],
};

// person.product = [10,"Macbook M2", "Macbook Air M2"] // invalid, since size is fixed

// person.product[1] = 20; //  invalid

// -----------------xxxxx----------------------------

// 4. enum
// NOTE: By default, enums in TypeScript are compiled into numbers in JavaScript.

// Use enums when values are used in logic, comparisons, or both string + number mix

enum Role {
  ADMIN, // 0
  AUTHOR, // 1
  READ_USER_ONLY, // 2
}

const person4 = {
  name: "patel",
  age: 21,
  skills: ["React", "Node"],
  product: [10, "Macbook Air M2"],
  role: Role.ADMIN,
};

if (person4.role === Role.AUTHOR) {
  console.log("Author");
} else if (person4.role === Role.ADMIN) {
  console.log("Admin");
} else if (person4.role === Role.READ_USER_ONLY) {
  console.log("read user only");
}

// --------------xxxx-------------
