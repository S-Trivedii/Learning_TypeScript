// Union, Type Literal, Type Alias

// 1. Union

function combine(num1: number | string, num2: number | string) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString(); // one input can be a number
  }
}

const sum = combine(10, 20);
const combinedName = combine("Shubhanshu ", "Trivedi");
const onlyOneString = combine(42, " Ravi");

console.log(sum, combinedName, onlyOneString);

// -------------------xxx-----------------------

// 2. Type Literal

/*
Definition: A type literal in TypeScript means a type that represents a specific exact value, not just a general type like 
string or number.

For example, in below code: The union "as-number" | "as-string" means the function only accepts these two exact 
values for 'conversionType.'

NOTE: 'as-number' and 'as-string', you can name it anything

*/

function combineSecond(
  num1: number | string,
  num2: number | string,
  conversionType: "as-number" | "as-string"
) {
  if (
    (typeof num1 === "number" && typeof num2 === "number") ||
    conversionType === "as-number"
  ) {
    return +num1 + +num2; // converting both num1 and num2 to a number 'cause it might be possible num1 and num2 are both string but converstionType is 'as-number' like in first fn call
  } else {
    return num1.toString() + num2.toString();
  }
}

combineSecond("10", "20", "as-number");
combineSecond(20, 30, "as-number");
combineSecond("Shubhanshu ", "Trivedi", "as-string");

// ----------------xxxxxxxx----------------------

// 3. Type Alias / Custom Types

/*
Definition: 
A type alias in TypeScript is a way to give a custom name to a type.
It doesn’t create a new type — it just creates a label that you can reuse.

*/

type UserID = string | number;

let id1: UserID = 101; // ✅ number
let id2: UserID = "abc123"; // ✅ string
// let id3: UserID = true;   // ❌ Error

// Second Example:

type Combinable = number | string;
type ConversionType = "as-num" | "as-str";

function combineThird(
  num1: Combinable,
  num2: Combinable,
  conversionType: ConversionType
) {
  let result;
  if (
    (typeof num1 === "number" && typeof num2 === "number") ||
    conversionType === "as-num"
  ) {
    result = +num1 + +num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}

const sum1 = combineThird("10", "20", "as-num"); // 30
const sum2 = combineThird(10, 50, "as-num");
const combinedNameThird = combineThird("Patel", " MernStack", "as-str"); // Patel MernStack
console.log(sum1, sum2, combinedNameThird);

type User = {
  name: string;
  age: number;
  skills: string[];
};

const user: User = {
  name: "Patel",
  age: 22,
  skills: ["React", "Node"],
};

function greet(user: User) {
  console.log(`Hi, I am ${user.name}`);
}
greet(user);
