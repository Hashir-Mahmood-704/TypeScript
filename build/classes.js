"use strict";
class Player {
    // public, everything is public by default, so mentioning public is not mandotary
    name;
    age;
    // private
    score;
    // protected
    address;
    constructor(name, age, score, address) {
        this.name = name;
        this.age = age;
        this.score = score;
        this.address = address;
    }
    getScore() {
        return this.score;
    }
    getAddress() {
        return this.address;
    }
}
const newPlayer = new Player("Hashir", 22, 10, "Lahore, Pakistan");
// console.log(newPlayer.getScore());
// console.log(newPlayer.getAddress());
// this is a much short way to make a class
class Animal {
    id;
    name;
    age;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    printAnimalData() {
        console.log(`Id: ${this.id}\nName: ${this.name}\nAge: ${this.age}`);
    }
    setAge(age) {
        this.age = age;
    }
}
// inheriting
class Tiger extends Animal {
    body;
    voice;
    constructor(id, name, age, body, voice) {
        super(id, name, age);
        this.body = body;
        this.voice = voice;
    }
    getTigerAge() {
        return this.age;
    }
    getVoice() {
        return this.voice;
    }
    printTigerData() {
        this.printAnimalData();
        console.log("Body:");
        console.table(this.body);
    }
}
const animal1 = new Animal(1, "Lion", 16);
// animal1.printAnimalData();
const tiger1 = new Tiger(10, "White Tiger", 22, { legs: 4, tail: true, eyes: 2 }, "raarrrr rarrrr!");
class Teacher {
    teacherId = Math.floor(Math.random() * 1000);
    teacherName;
    teacherSubject;
    constructor(name, subject) {
        this.teacherName = name;
        this.teacherSubject = subject;
    }
}
class TeacherAssistant extends Teacher {
    isGraduated;
    constructor(name, subject, isGraduated) {
        super(name, subject);
        this.isGraduated = isGraduated;
    }
}
const teacher1 = new Teacher("Dave Gray", "React");
const teacherAssistant1 = new TeacherAssistant("Mike", "Laravel", true);
console.table(teacher1);
