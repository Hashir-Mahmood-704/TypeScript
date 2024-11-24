"use strict";
let myStr;
myStr = "Books";
let myNumOrNull = null;
myNumOrNull = 22;
let myStrOrNum = 98;
const myPerson = {
    name: "Hashir",
    age: 22,
    isAlive: true,
    city: "Lahore",
    printData: function () {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nPerson alive?: ${this.isAlive}\nCity: ${this.city}`);
    },
};
const myPerson2 = {
    name: "Hashir",
    age: 22,
    isAlive: true,
    city: "Lahore",
    printData: function () {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nPerson alive?: ${this.isAlive}\nCity: ${this.city}\nStudentId: ${this.studId}\nMarks: ${this.marks}`);
    },
    marks: 881,
    studId: "F210774",
    address: "Lahore, Pakistan",
};
