"use strict";
// variable types
let myNumber = 100;
let myString = "Lion";
let myBool = false;
let myUndefined = undefined;
let myNull = null;
// union types
let myNumberOrString = "Pakistan";
myNumberOrString = 101;
let myNumberOrUndefined = 18;
myNumberOrUndefined = undefined;
// function types
function sayHello() {
    console.log("Hello!");
}
function makeSum(num1, num2) {
    return num1 + num2;
}
const makeMul = (num1, num2) => {
    return num1 * num2;
};
// array types
const myStringArray = ["Lion", "Kite", "Bear"];
const myNumberArray = [1, 2, 3];
const myStringOrNumArray = [1, "Pakistan", "Kite", 88];
