// variable types
let myNumber: number = 100;
let myString: string = "Lion";
let myBool: boolean = false;
let myUndefined: undefined = undefined;
let myNull: null = null;

// union types
let myNumberOrString: number | string = "Pakistan";
myNumberOrString = 101;
let myNumberOrUndefined: number | undefined = 18;
myNumberOrUndefined = undefined;

// function types
function sayHello(): void {
    console.log("Hello!");
}

function makeSum(num1: number, num2: number): number {
    return num1 + num2;
}

const makeMul = (num1: number, num2: number): number => {
    return num1 * num2;
};

// array types
const myStringArray: string[] = ["Lion", "Kite", "Bear"];
const myNumberArray: Array<Number> = [1, 2, 3];
const myStringOrNumArray: Array<Number | String> = [1, "Pakistan", "Kite", 88];
