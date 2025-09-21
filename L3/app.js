// Union, Type Literal, Type Alias
// 1. Union
function combine(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString(); // one input can be a number
    }
}
var sum = combine(10, 20);
var combinedName = combine("Shubhanshu ", "Trivedi");
var onlyOneString = combine(42, " Ravi");
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
function combineSecond(num1, num2, conversionType) {
    if ((typeof num1 === "number" && typeof num2 === "number") ||
        conversionType === "as-number") {
        return +num1 + +num2; // converting both num1 and num2 to a number 'cause it might be possible num1 and num2 are both string but converstionType is 'as-number' like in first fn call
    }
    else {
        return num1.toString() + num2.toString();
    }
}
combineSecond("10", "20", "as-number");
combineSecond(20, 30, "as-number");
combineSecond("Shubhanshu ", "Trivedi", "as-string");
var id1 = 101; // ✅ number
var id2 = "abc123"; // ✅ string
function combineThird(num1, num2, conversionType) {
    var result;
    if ((typeof num1 === "number" && typeof num2 === "number") ||
        conversionType === "as-num") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum1 = combineThird("10", "20", "as-num"); // 30
var sum2 = combineThird(10, 50, "as-num");
var combinedNameThird = combineThird("Patel", " MernStack", "as-str"); // Patel MernStack
console.log(sum1, sum2, combinedNameThird);
var user = {
    name: "Patel",
    age: 22,
    skills: ["React", "Node"],
};
function greet(user) {
    console.log("Hi, I am ".concat(user.name));
}
greet(user);
