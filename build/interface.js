"use strict";
const hum1 = {
    name: "Dave",
    gender: "male",
    age: 22,
    speak(param) {
        console.log("Human speaking: ");
        console.log(param);
    },
};
const emp1 = {
    name: "Mike",
    gender: "male",
    empId: "991",
    salary: 80000,
    age: 22,
    speak(param) {
        console.log("Employee speaking: ");
        console.log(param);
    },
    sayHello() {
        console.log("Hello from,", this.name);
    },
};
// hum1.speak("Live!");
// emp1.speak("Kill!")
// this is how we call a method which is optional
emp1.sayHello?.();
const myCar = {
    doors: 4,
    seats: 5,
};
// keyof is used to tell typescript that param can be only a key of CarInterface
function getCarValues(key) {
    return myCar[key];
}
console.log(getCarValues("doors"));
console.log(getCarValues("seats"));
