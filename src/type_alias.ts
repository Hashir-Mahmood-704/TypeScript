type StringType = string;
type NumberOrNull = number | null;
type StringOrNumber = StringType | number;

type Person = {
    name: string;
    age: number;
    isAlive: boolean;
    city: "Lahore" | "Karachi" | "Islamabad";
    printData(): void;
    address?: string; // optional key
};

// combination of 2 type aliases
type Student = {
    studId: string;
    marks: number;
} & Person;

let myStr: StringType;
myStr = "Books";
let myNumOrNull = null;
myNumOrNull = 22;
let myStrOrNum: StringOrNumber = 98;

const myPerson: Person = {
    name: "Hashir",
    age: 22,
    isAlive: true,
    city: "Lahore",
    printData: function () {
        console.log(
            `Name: ${this.name}\nAge: ${this.age}\nPerson alive?: ${this.isAlive}\nCity: ${this.city}`
        );
    },
};

const myPerson2: Student = {
    name: "Hashir",
    age: 22,
    isAlive: true,
    city: "Lahore",
    printData: function () {
        console.log(
            `Name: ${this.name}\nAge: ${this.age}\nPerson alive?: ${this.isAlive}\nCity: ${this.city}\nStudentId: ${this.studId}\nMarks: ${this.marks}`
        );
    },
    marks: 881,
    studId: "F210774",
    address: "Lahore, Pakistan",
};
