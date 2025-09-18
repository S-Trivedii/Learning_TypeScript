// Basic core types in TS - number, string, boolean
function add(num1, num2, printResult, someText) {
    if (printResult) {
        console.log("".concat(someText, " ").concat(num1 + num2));
    }
    else {
        return num1 + num2;
    }
}
var n1 = 20; // number
var n2 = 200; // number
var printResult = true;
var someText = "Sum of two numbers is = ";
add(n1, n2, printResult, someText);
// console.log(ans);
