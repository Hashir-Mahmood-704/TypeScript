class Player {
    // public, everything is public by default, so mentioning public is not mandotary
    name: string;
    age: number;
    // private
    private score: number;
    // protected
    protected address: string;

    constructor(name: string, age: number, score: number, address: string) {
        this.name = name;
        this.age = age;
        this.score = score;
        this.address = address;
    }

    getScore(): number {
        return this.score;
    }

    getAddress(): string {
        return this.address;
    }
}
const newPlayer = new Player("Hashir", 22, 10, "Lahore, Pakistan");
// console.log(newPlayer.getScore());
// console.log(newPlayer.getAddress());

// this is a much short way to make a class
class Animal {
    constructor(
        private readonly id: number,
        public readonly name: string,
        protected age: number
    ) {}

    printAnimalData(): void {
        console.log(`Id: ${this.id}\nName: ${this.name}\nAge: ${this.age}`);
    }

    setAge(age: number): void {
        this.age = age;
    }
}

// inheriting
class Tiger extends Animal {
    private body: { legs: number; tail: boolean; eyes: number };
    private voice: string;

    constructor(
        id: number,
        name: string,
        age: number,
        body: { legs: number; tail: boolean; eyes: number },
        voice: string
    ) {
        super(id, name, age);
        this.body = body;
        this.voice = voice;
    }

    getTigerAge(): number {
        return this.age;
        
    }

    getVoice(): string {
        return this.voice;
    }

    printTigerData(): void {
        this.printAnimalData();
        console.log("Body:");
        console.table(this.body);
    }
}
const animal1 = new Animal(1, "Lion", 16);
// animal1.printAnimalData();

const tiger1 = new Tiger(
    10,
    "White Tiger",
    22,
    { legs: 4, tail: true, eyes: 2 },
    "raarrrr rarrrr!"
);

// tiger1.setAge(200);
// tiger1.printTigerData();

// classes with interface

interface TeacherInterface {
    teacherName: string;
    teacherSubject: string;
}

interface TeacherAssistantInterface extends TeacherInterface {
    isGraduated: boolean;
}

class Teacher implements TeacherInterface {
    private teacherId: number = Math.floor(Math.random() * 1000);
    readonly teacherName: string;
    readonly teacherSubject: string;

    constructor(name: string, subject: string) {
        this.teacherName = name;
        this.teacherSubject = subject;
    }
}

class TeacherAssistant extends Teacher implements TeacherAssistantInterface {
    readonly isGraduated: boolean;

    constructor(name: string, subject: string, isGraduated: boolean) {
        super(name, subject);
        this.isGraduated = isGraduated;
    }
}

const teacher1 = new Teacher("Dave Gray", "React");
const teacherAssistant1 = new TeacherAssistant("Mike", "Laravel", true);

console.table(teacher1);