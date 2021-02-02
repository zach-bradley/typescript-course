const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [4,325,21,32];
let booleans: boolean[] = [true, false, false]

//classes
class Car {

}

let car: Car = new Car();

//Object literal
let point: {x: number; y: number} = {
  x: 20,
  y: 20
}

//functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

//Any type 
const json = '{"x":10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);

//delayed initialization 
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if(words[i] =='green') {
    foundWord = true;
  }
}


const add = (a: number,b: number): number => {
  return a+b;
}

const subtract = (a: number, b: number) => {
  return a-b;
}

function divide(a: number, b:number) {
  return a / b;
}
